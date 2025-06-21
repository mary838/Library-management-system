<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const students = ref([]);
const books = ref([]);
const loadingStudents = ref(true);
const loadingBooks = ref(true);

// Fetch Students
const fetchStudents = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:3000/api/students", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      if (res.status === 401) router.push("/login");
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    students.value = Array.isArray(data) ? data : data.data || [];
    students.value.sort((a, b) => a.full_name.localeCompare(b.full_name));
  } catch (error) {
    console.error("Error fetching students:", error);
  } finally {
    loadingStudents.value = false;
  }
};

// Fetch Books
const fetchBooks = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:3000/api/books", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      if (res.status === 401) router.push("/login");
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    books.value = Array.isArray(data) ? data : data.data || [];
    books.value.sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.error("Error fetching books:", error);
  } finally {
    loadingBooks.value = false;
  }
};

onMounted(() => {
  fetchStudents();
  fetchBooks();
});
</script>

<template>
  <div class="min-h-screen p-6 bg-gray-100">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Book List -->
      <div class="bg-white shadow-md rounded-lg overflow-x-auto">
        <div class="flex justify-between items-center px-6 py-4 border-b">
          <h2 class="text-lg font-semibold text-gray-700">Books</h2>
          <router-link to="/books">
            <button
              class="flex items-center bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              View All
              <svg
                class="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </router-link>
        </div>

        <table class="w-full text-left text-gray-700">
          <thead class="bg-gray-50 text-gray-600 text-xs uppercase">
            <tr>
              <th class="px-6 py-3">Title</th>
              <th class="px-6 py-3">Description</th>
              <th class="px-6 py-3">Author ID</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="loadingBooks">
              <td colspan="3" class="text-center py-4 text-gray-500">
                Loading books...
              </td>
            </tr>
            <tr v-else-if="books.length === 0">
              <td colspan="3" class="text-center py-4 text-gray-500">
                No books available.
              </td>
            </tr>
            <tr
              v-else
              v-for="book in books"
              :key="book.id"
              class="border-b hover:bg-gray-50"
            >
              <td class="px-6 py-4">{{ book.title }}</td>
              <td class="px-6 py-4">{{ book.description }}</td>
              <td class="px-6 py-4">{{ book.author_id }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Student List -->
      <div class="bg-white shadow-md rounded-lg overflow-x-auto">
        <div class="flex justify-between items-center px-6 py-4 border-b">
          <h2 class="text-lg font-semibold text-gray-700">Students</h2>
          <router-link to="/student">
            <button
              class="flex items-center bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              View All
              <svg
                class="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </router-link>
        </div>

        <table class="w-full text-sm text-left text-gray-700">
          <thead class="bg-gray-50 text-gray-600 text-xs uppercase">
            <tr>
              <th class="px-6 py-3">ID</th>
              <th class="px-6 py-3">Full Name</th>
              <th class="px-6 py-3">ID Card</th>
              <th class="px-6 py-3">Class</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="loadingStudents">
              <td colspan="4" class="text-center py-4 text-gray-500">
                Loading students...
              </td>
            </tr>
            <tr v-else-if="students.length === 0">
              <td colspan="4" class="text-center py-4 text-gray-500">
                No students found.
              </td>
            </tr>
            <tr
              v-else
              v-for="student in students"
              :key="student.id"
              class="border-b hover:bg-gray-50"
            >
              <td class="px-6 py-4">{{ student.id }}</td>
              <td class="px-6 py-4">{{ student.full_name }}</td>
              <td class="px-6 py-4">{{ student.id_card }}</td>
              <td class="px-6 py-4">{{ student.class }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
