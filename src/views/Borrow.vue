<template>
  <div class="sticky top-0 z-10 bg-white shadow-md p-4">
    <div
      class="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4"
    >
      <h2 class="text-xl font-semibold">
        <span class="text-blue-700">Borrow</span> Management
      </h2>
      <button
        @click="toggleForm"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        {{ isFormVisible ? "Close Form" : "Add Borrow" }}
      </button>
    </div>
  </div>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-5xl mx-auto space-y-6">
      <transition name="fade">
        <form
          v-show="isFormVisible"
          @submit.prevent="handleAddBorrow"
          class="bg-white p-6 rounded shadow space-y-6"
        >
          <div class="grid md:grid-cols-2 gap-4">
            <div class="relative">
              <label class="block font-medium mb-1">Search Book</label>
              <input
                v-model="bookSearch"
                type="text"
                placeholder="Type book title..."
                class="w-full border px-3 py-2 rounded"
              />
              <ul
                v-if="bookSearch && filteredBooks.length"
                class="absolute z-10 bg-white border w-full rounded shadow max-h-40 overflow-y-auto"
              >
                <li
                  v-for="book in filteredBooks"
                  :key="book.id"
                  @click="
                    form.book_id = book.id;
                    bookSearch = book.title;
                  "
                  class="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                >
                  {{ book.title }} — {{ book.author_name }}
                </li>
              </ul>
            </div>

            <div class="relative">
              <label class="block font-medium mb-1">Search Student</label>
              <input
                v-model="studentSearch"
                type="text"
                placeholder="Type student name..."
                class="w-full border px-3 py-2 rounded"
              />
              <ul
                v-if="studentSearch && filteredStudents.length"
                class="absolute z-10 bg-white border w-full rounded shadow max-h-40 overflow-y-auto"
              >
                <li
                  v-for="student in filteredStudents"
                  :key="student.id"
                  @click="
                    form.student_id = student.id;
                    studentSearch = student.full_name;
                  "
                  class="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                >
                  {{ student.full_name }} ({{ student.class }})
                </li>
              </ul>
            </div>
          </div>

          <button
            type="submit"
            class="w-full mt-7 bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </transition>

      <div v-if="isLoading" class="text-center py-10">
        <div
          class="animate-spin h-8 w-8 mx-auto text-blue-500 border-4 border-blue-300 border-t-transparent rounded-full"
        ></div>
        <p class="mt-2 text-sm text-gray-500">Loading borrowed books...</p>
      </div>

      <div v-else-if="errorMessage" class="text-red-500 text-center">
        {{ errorMessage }}
      </div>

      <div v-else>
        <table
          class="w-full text-sm text-left text-gray-700 table-auto border border-gray-200 bg-white rounded-lg shadow-md overflow-hidden"
        >
          <thead class="bg-blue-600 text-white text-sm">
            <tr>
              <th class="px-4 py-3 text-left">#</th>
              <th class="px-4 py-3 text-left">Book Title</th>
              <th class="px-4 py-3 text-left">Student Name</th>
              <th class="px-4 py-3 text-left">Borrowed On</th>
              <th class="px-4 py-3 text-left">Returned On</th>
              <th class="px-4 py-3 text-left">Status</th>
              <th class="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr
              v-for="(borrow, index) in borrows"
              :key="borrow.id"
              class="hover:bg-blue-50 transition-colors duration-150"
            >
              <td class="px-4 py-3 font-mono text-gray-700">
                {{ index + 1 + (currentPage - 1) * limit }}
              </td>
              <td class="px-4 py-3 font-medium text-gray-800">
                {{ borrow.title }}
              </td>
              <td class="px-4 py-3">{{ borrow.full_name }}</td>
              <td class="px-4 py-3 text-gray-600">
                {{
                  new Date(borrow.borrow_date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                }}
              </td>
              <td class="px-4 py-3 text-gray-600">
                {{
                  borrow.return_date
                    ? new Date(borrow.return_date).toLocaleDateString(
                        undefined,
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )
                    : "Not returned"
                }}
              </td>
              <td class="px-4 py-3">
                <span
                  class="inline-block px-2 py-1 text-xs font-medium rounded-full"
                  :class="
                    borrow.return_date
                      ? 'bg-green-200 text-green-800'
                      : 'bg-red-200 text-red-800'
                  "
                >
                  {{ borrow.return_date ? "Returned" : "Borrowed" }}
                </span>
              </td>
              <td class="px-4 py-3">
                <div class="flex gap-2">
                  <button
                    @click="deleteBorrow(borrow)"
                    class="px-3 py-1 text-xs font-semibold text-red-800 bg-red-100 border border-red-300 rounded hover:bg-red-200 transition"
                    title="Delete Borrow"
                  >
                    Delete
                  </button>
                  <button
                    v-if="!borrow.return_date"
                    @click="returnBorrow(borrow)"
                    class="px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 border border-green-300 rounded hover:bg-green-200 transition"
                    title="Mark as returned"
                  >
                    Return
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="flex justify-center items-center gap-2 mt-4 flex-wrap">
          <button
            @click="goToPage(currentPage - 1)"
            :disabled="currentPage === 1"
            class="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          <button
            v-for="page in totalPages"
            :key="page"
            @click="goToPage(page)"
            :class="[
              page === currentPage
                ? 'bg-blue-500 text-white'
                : 'bg-white hover:bg-blue-100',
              'px-3 py-1 border rounded transition',
            ]"
          >
            {{ page }}
          </button>

          <button
            @click="goToPage(currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const borrows = ref([]);
const isLoading = ref(true);
const errorMessage = ref("");
const currentPage = ref(1);
const totalPages = ref(1);
const limit = 10;

const students = ref([]);
const books = ref([]);

const form = ref({
  student_id: "",
  book_id: "",
});

const isFormVisible = ref(false);
const toggleForm = () => {
  isFormVisible.value = !isFormVisible.value;
};

const bookSearch = ref("");
const studentSearch = ref("");

const filteredBooks = computed(() => {
  const q = bookSearch.value.toLowerCase();
  return books.value.filter(
    (book) =>
      book.title.toLowerCase().includes(q) ||
      (book.author_name && book.author_name.toLowerCase().includes(q))
  );
});

const filteredStudents = computed(() => {
  const q = studentSearch.value.toLowerCase();
  return students.value.filter(
    (student) =>
      student.full_name.toLowerCase().includes(q) ||
      (student.class && student.class.toLowerCase().includes(q))
  );
});

const fetchBorrows = async (page = 1) => {
  isLoading.value = true;
  errorMessage.value = "";
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(
      `${baseUrl}/api/borrows?page=${page}&limit=${limit}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (!res.ok) throw new Error("Failed to fetch borrowed books");
    const data = await res.json();
    borrows.value = data.borrows || [];
    currentPage.value = data.currentPage || 1;
    totalPages.value = data.totalPages || 1;
  } catch (error) {
    errorMessage.value = error.message;
  } finally {
    isLoading.value = false;
  }
};

const fetchStudentsAndBooks = async (page = 1, limit = 100) => {
  try {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    const [studentsRes, booksRes] = await Promise.all([
      fetch(`${baseUrl}/api/students?page=${page}&limit=${limit}`, { headers }),
      fetch(`${baseUrl}/api/books?page=${page}&limit=${limit}`, { headers }),
    ]);

    const studentsData = await studentsRes.json();
    const booksData = await booksRes.json();

    students.value = studentsData.students || [];
    books.value = booksData.books || [];
  } catch (err) {
    console.error("Error fetching students/books:", err);
  }
};

const handleAddBorrow = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${baseUrl}/api/borrows`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        student_id: parseInt(form.value.student_id),
        book_id: parseInt(form.value.book_id),
      }),
    });

    if (!res.ok)
      throw new Error("Oops! Couldn't add the borrow. Please try again.");

    alert("🎉 Success! Borrow record has been added.");
    form.value = { student_id: "", book_id: "" };
    bookSearch.value = "";
    studentSearch.value = "";
    isFormVisible.value = false;
    fetchBorrows(currentPage.value);
  } catch (err) {
    alert(`⚠️ Error: ${err.message}`);
  }
};

const deleteBorrow = async (borrow) => {
  if (!confirm(`Delete borrow ID ${borrow.id}?`)) return;

  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${baseUrl}/api/borrows/${borrow.id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to delete borrow: ${errorText}`);
    }

    alert("✅ Borrow deleted successfully!");
    fetchBorrows(currentPage.value);
  } catch (error) {
    alert(`❌ Error deleting borrow: ${error.message}`);
  }
};

const returnBorrow = async (borrow) => {
  if (borrow.return_date) return;
  if (
    !confirm(
      `Are you sure you want to mark borrow ID ${borrow.id} as returned?`
    )
  )
    return;

  const token = localStorage.getItem("token");
  const url = `${baseUrl}/api/borrows/${borrow.id}/return`;
  const methods = ["POST", "PUT", "PATCH"];

  for (const method of methods) {
    try {
      const res = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      if (res.ok) {
        alert(`✅ Borrow ID ${borrow.id} marked as returned successfully!`);
        fetchBorrows(currentPage.value);
        return;
      }
    } catch (e) {
      console.error(e);
    }
  }
  alert("❌ Unable to mark as returned. Please try again or contact support.");
};

const goToPage = (page) => {
  if (page < 1 || page > totalPages.value) return;
  fetchBorrows(page);
};

onMounted(() => {
  fetchBorrows();
  fetchStudentsAndBooks();
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
