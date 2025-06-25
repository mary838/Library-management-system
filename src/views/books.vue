<template>
  <div class="h-screen flex flex-col">
    <!-- Search and Add Book -->
    <div class="sticky top-0 z-10 bg-white shadow-md p-4">
      <div
        class="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4"
      >
        <div class="w-full sm:w-96">
          <div class="relative">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="search"
              placeholder="Search books by title or ID..."
              class="block w-full ps-10 py-2 text-sm text-gray-900 border border-blue-400 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <router-link
          to="/login-book"
          class="inline-flex cursor-pointer items-center justify-center px-6 py-2 text-sm font-medium text-white bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg shadow hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition"
        >
          Add Book
        </router-link>
      </div>
    </div>

    <!-- Books Table -->
    <div class="overflow-x-auto relative shadow-md p-6 sm:rounded-lg mb-8">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-blue-600">ID</th>
            <th class="px-6 py-3 text-blue-600">Title</th>
            <th class="px-6 py-3 text-blue-600">Author</th>
            <th class="px-6 py-3 text-blue-600">Quantity</th>
            <th class="px-6 py-3 text-blue-600">Category</th>
            <th class="px-6 py-3 text-blue-600">Description</th>
            <th class="px-6 py-3 text-blue-600 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="book in books"
            :key="book.id"
            class="bg-white border-b hover:bg-gray-50"
          >
            <td class="px-6 py-4 font-medium text-gray-900">{{ book.id }}</td>
            <td class="px-6 py-4 font-medium text-gray-900">
              {{ book.title }}
            </td>
            <td class="px-6 py-4">{{ book.author_name || 'N/A' }}</td>
            <td class="px-6 py-4">{{ book.quantity }}</td>
            <td class="px-6 py-4">{{ book.category || 'N/A' }}</td>
            <td class="px-6 py-4">{{ book.description }}</td>
            <td class="px-6 py-4 text-center">
              <div class="flex justify-center gap-2">
                <button
                  @click="handleUpdate(book)"
                  class="inline-flex items-center gap-1 text-sm font-medium text-yellow-800 bg-yellow-100 hover:bg-yellow-200 border border-yellow-300 px-3 py-1 rounded-md transition"
                >
                  Edit
                </button>
                <button
                  @click="handleDelete(book)"
                  class="inline-flex items-center gap-1 text-sm font-medium text-red-800 bg-red-100 hover:bg-red-200 border border-red-300 px-3 py-1 rounded-md transition"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="books.length === 0">
            <td colspan="7" class="text-center py-4 text-gray-400">
              No books found
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination (hidden while searching) -->
      <nav
        v-if="!searchQuery"
        class="mt-4 flex justify-center"
        aria-label="Pagination"
      >
        <ul class="inline-flex">
          <li v-for="page in totalPages" :key="page">
            <button
              @click="goToPage(page)"
              :class="[
                'px-3 py-2 border rounded-lg mx-1',
                currentPage === page
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-blue-600 hover:bg-blue-100',
              ]"
            >
              {{ page }}
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Update Modal -->
    <div
      v-if="showUpdateModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h3 class="text-xl font-semibold mb-4">Update Book</h3>
        <form @submit.prevent="submitUpdate" class="space-y-4">
          <div>
            <label class="block font-semibold mb-1">Title</label>
            <input
              v-model="selectedBook.title"
              type="text"
              class="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label class="block font-semibold mb-1">Description</label>
            <input
              v-model="selectedBook.description"
              type="text"
              class="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label class="block font-semibold mb-1">Author</label>
            <select
              v-model.number="selectedBook.author_id"
              class="w-full border border-gray-300 rounded px-3 py-2"
              required
            >
              <option value="" disabled>Select an author</option>
              <option v-for="author in authors" :key="author.id" :value="author.id">
                {{ author.full_name }}
              </option>
            </select>
          </div>

          <div>
            <label class="block font-semibold mb-1">Category</label>
            <select
              v-model.number="selectedBook.category_id"
              class="w-full border border-gray-300 rounded px-3 py-2"
              required
            >
              <option value="" disabled>Select a category</option>
              <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                {{ cat.name }}
              </option>
            </select>
          </div>

          <div>
            <label class="block font-semibold mb-1">Quantity</label>
            <input
              v-model.number="selectedBook.quantity"
              type="number"
              class="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div class="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              @click="showUpdateModal = false"
              class="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

// Debounce helper to limit API calls during typing
function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const books = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const searchQuery = ref("");

// Get token dynamically from localStorage
const token = ref(localStorage.getItem("token") || "");

const apiUrl = "http://localhost:3000/api/books";
const searchUrl = "http://localhost:3000/api/books/search";

const authors = ref([]);
const categories = ref([]);

// Fetch authors and categories for dropdowns
async function fetchDropdowns() {
  try {
    const [resAuthors, resCategories] = await Promise.all([
      fetch("http://localhost:3000/api/authors", {
        headers: { Authorization: `Bearer ${token.value}` },
      }),
      fetch("http://localhost:3000/api/categories", {
        headers: { Authorization: `Bearer ${token.value}` },
      }),
    ]);

    if (!resAuthors.ok || !resCategories.ok) throw new Error("Failed to fetch dropdown data");

    authors.value = await resAuthors.json();
    categories.value = await resCategories.json();
  } catch (error) {
    console.error("Dropdown fetch error:", error);
  }
}

// Fetch books with optional search query
async function fetchBooks(page = 1, limit = 10, query = "") {
  try {
    if (!query) {
      // No search: fetch paginated books
      const res = await fetch(`${apiUrl}?page=${page}&limit=${limit}`, {
        headers: { Authorization: `Bearer ${token.value}` },
      });
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      books.value = data.books || data || [];
      currentPage.value = data.currentPage || 1;
      totalPages.value = data.totalPages || 1;
      return;
    }

    // Search by ID if query is numeric
    let byIdResults = [];
    if (/^\d+$/.test(query)) {
      const res = await fetch(`${apiUrl}/${query}`, {
        headers: { Authorization: `Bearer ${token.value}` },
      });
      if (res.ok) {
        const book = await res.json();
        if (book) byIdResults = [book];
      }
    }

    // Search by title using search API
    const res = await fetch(
      `${searchUrl}?query=${encodeURIComponent(
        query
      )}&page=${page}&limit=${limit}`,
      {
        headers: { Authorization: `Bearer ${token.value}` },
      }
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();

    // Extract books from response
    const byTitleResults = data.books || data || [];

    // Merge unique books by ID: id matches removed duplicates
    const combinedMap = new Map();
    [...byTitleResults, ...byIdResults].forEach((book) => {
      combinedMap.set(book.id, book);
    });

    books.value = Array.from(combinedMap.values());
    currentPage.value = 1;
    totalPages.value = 1; // disable pagination while searching
  } catch (error) {
    console.error("Fetch error:", error);
    books.value = [];
  }
}

const debouncedFetchBooks = debounce((query) => {
  fetchBooks(1, 10, query.trim());
}, 500);

watch(searchQuery, (newQuery) => {
  debouncedFetchBooks(newQuery);
});

function goToPage(page) {
  if (page !== currentPage.value && page >= 1 && page <= totalPages.value) {
    fetchBooks(page, 10, searchQuery.value.trim());
  }
}

const selectedBook = ref(null);
const showUpdateModal = ref(false);

async function handleUpdate(book) {
  try {
    const res = await fetch(`${apiUrl}/${book.id}`, {
      headers: { Authorization: `Bearer ${token.value}` },
    });
    if (!res.ok) throw new Error("Failed to fetch book data");

    const data = await res.json();
    selectedBook.value = {
      ...data,
      author_name: data.author_name || "",
      category: data.category || "",
      description: data.description || "",
    };
    showUpdateModal.value = true;
  } catch (error) {
    alert(error.message);
  }
}

async function submitUpdate() {
  if (!selectedBook.value) return;

  const payload = {
    title: selectedBook.value.title,
    description: selectedBook.value.description,
    author_id: selectedBook.value.author_id,
    category_id: selectedBook.value.category_id,
    quantity: selectedBook.value.quantity,
  };

  try {
    const res = await fetch(`${apiUrl}/${selectedBook.value.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to update book");
    }

    alert("Book updated successfully!");
    showUpdateModal.value = false;
    await fetchBooks(currentPage.value, 10, searchQuery.value.trim());
  } catch (error) {
    alert(error.message);
  }
}

async function handleDelete(book) {
  if (!confirm(`Are you sure you want to delete "${book.title}"?`)) return;

  try {
    const res = await fetch(`${apiUrl}/${book.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to delete book");
    }

    alert("Book deleted successfully.");
    await fetchBooks(currentPage.value, 10, searchQuery.value.trim());
  } catch (error) {
    alert("Error deleting book: " + error.message);
  }
}

onMounted(() => {
  fetchBooks();
  fetchDropdowns();
});
</script>
