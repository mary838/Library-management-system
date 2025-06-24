<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const token = localStorage.getItem("token") || "";

// Form fields
const title = ref("");
const description = ref("");
const quantity = ref("");
const selectedAuthor = ref("");
const selectedCategory = ref("");
const createdBy = ref("");

// Dropdown data
const authors = ref([]);
const categories = ref([]);

// API URLs
const apiUrl = "http://localhost:3000/api/books";
const authorsUrl = "http://localhost:3000/api/authors";
const categoriesUrl = "http://localhost:3000/api/categories";

// Fetch authors and categories on mount
onMounted(async () => {
  try {
    const resAuthors = await fetch(authorsUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!resAuthors.ok) throw new Error("Failed to fetch authors");
    authors.value = await resAuthors.json();

    const resCategories = await fetch(categoriesUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!resCategories.ok) throw new Error("Failed to fetch categories");
    categories.value = await resCategories.json();
  } catch (error) {
    alert("Error loading dropdown data: " + error.message);
  }
});

async function handleSubmit() {
  if (
    !title.value ||
    !description.value ||
    !selectedAuthor.value ||
    !selectedCategory.value ||
    !quantity.value ||
    !createdBy.value
  ) {
    alert("Please fill all fields");
    return;
  }

  const authorObj = authors.value.find(
    (a) => a.full_name === selectedAuthor.value
  );
  const categoryObj = categories.value.find(
    (c) => c.name === selectedCategory.value
  );

  if (!authorObj || !categoryObj) {
    alert("Invalid author or category selected.");
    return;
  }

  const payload = {
    title: title.value,
    description: description.value,
    author_id: authorObj.id,
    category_id: categoryObj.id,
    quantity: Number(quantity.value),
    created_by: Number(createdBy.value),
  };

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to create book");
    }

    alert("Book created successfully!");
    router.push("/books");
  } catch (error) {
    alert("Error: " + error.message);
  }
}

function goBack() {
  router.back();
}
</script>

<template>
  <div class="w-full p-4 mb-6 bg-white h-full">
    <div class="flex p-7 mb-4 h-full">
      <div class="ms-6 w-1/2 px-32 py-16 rounded-xl shadow-lg">
        <h1 class="text-2xl font-bold mb-4 p-4 text-center text-blue-600">
          Add New Book
        </h1>
        <form class="max-w-sm mx-auto space-y-4" @submit.prevent="handleSubmit">
          <div>
            <label for="title" class="block text-sm font-bold mb-2"
              >Title</label
            >
            <input
              type="text"
              id="title"
              v-model="title"
              class="shadow border rounded w-full py-2 px-3"
              required
            />
          </div>

          <div>
            <label for="description" class="block text-sm font-bold mb-2"
              >Description</label
            >
            <input
              type="text"
              id="description"
              v-model="description"
              class="shadow border rounded w-full py-2 px-3"
              required
            />
          </div>

          <div>
            <label for="author" class="block text-sm font-bold mb-2"
              >Author</label
            >
            <select
              id="author"
              v-model="selectedAuthor"
              class="shadow border rounded w-full py-2 px-3"
              required
            >
              <option value="" disabled>Select an author</option>
              <option v-for="a in authors" :key="a.id" :value="a.full_name">
                {{ a.full_name }}
              </option>
            </select>
          </div>

          <div>
            <label for="category" class="block text-sm font-bold mb-2"
              >Category</label
            >
            <select
              id="category"
              v-model="selectedCategory"
              class="shadow border rounded w-full py-2 px-3"
              required
            >
              <option value="" disabled>Select a category</option>
              <option v-for="cat in categories" :key="cat.id" :value="cat.name">
                {{ cat.name }}
              </option>
            </select>
          </div>

          <div>
            <label for="quantity" class="block text-sm font-bold mb-2"
              >Quantity</label
            >
            <input
              type="number"
              id="quantity"
              v-model="quantity"
              class="shadow border rounded w-full py-2 px-3"
              required
            />
          </div>

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm w-full px-3 py-2 mt-4"
          >
            Add Book
          </button>
          <button
            type="button"
            @click="goBack"
            class="text-gray-700 bg-gray-200 rounded-lg text-sm w-full px-3 py-2 hover:bg-gray-300"
          >
            Back
          </button>
        </form>
      </div>

      <div class="mt-6 ms-6 w-1/2 px-32 py-16">
        <img class="w-full h-full" src="../assets/image.png" alt="Book Image" />
      </div>
    </div>
  </div>
</template>
