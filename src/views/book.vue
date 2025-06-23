<script setup>
import { ref, onMounted } from 'vue'

const books = ref([])
const currentPage = ref(1)
const totalPages = ref(1)

const apiUrl = 'http://localhost:3000/api/books'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImxpYmVyaWFuIiwiaWF0IjoxNzUwNjUwODAzfQ.rCw2xX44AXo6eDbMHKiDJWpTwJU4YqPxRGQF0h6QQjE'

async function fetchBooks(page = 1, limit = 10) {
  try {
    const res = await fetch(`${apiUrl}?page=${page}&limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (!res.ok) throw new Error('Failed to fetch data')

    const data = await res.json()

    books.value = data.books
    currentPage.value = data.currentPage
    totalPages.value = data.totalPages
  } catch (error) {
    console.error(error)
  }
}

function goToPage(page) {
  if (page !== currentPage.value && page >= 1 && page <= totalPages.value) {
    fetchBooks(page)
  }
}

onMounted(() => {
  fetchBooks()
})
</script>

<template>
  <div class="h-screen flex flex-col">
    <!-- Search and Add Book -->
    <div class="sticky top-0 z-10 bg-white shadow-md p-4">
      <div
        class="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4"
      >
        <form class="w-full sm:w-96">
          <div class="relative">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                aria-hidden="true"
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
              type="search"
              id="default-search"
              class="block w-full ps-10 py-2 text-sm text-gray-900 border border-blue-400 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search students..."
              required
            />
          </div>
        </form>

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
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3 text-blue-600">Title</th>
            <th scope="col" class="px-6 py-3 text-blue-600">Author</th>
            <th scope="col" class="px-6 py-3 text-blue-600">Quantity</th>
            <th scope="col" class="px-6 py-3 text-blue-600">Category</th>
            <th scope="col" class="px-6 py-3 text-blue-600">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="book in books"
            :key="book.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ book.title }}
            </td>
            <td class="px-6 py-4">{{ book.author_name }}</td>
            <td class="px-6 py-4">{{ book.quantity }}</td>
            <td class="px-6 py-4">{{ book.category }}</td>
            <td class="px-6 py-4">{{ book.description }}</td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <nav class="mt-4 flex justify-center" aria-label="Pagination">
        <ul class="inline-flex">
          <li>
            <button
              @click="goToPage(1)"
              :class="[
          'px-3 py-2 border rounded-lg mx-1',  /* added mx-1 for horizontal margin */
          currentPage === 1
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-white text-blue-600 hover:bg-blue-100'
        ]"
            >
              1
            </button>
          </li>
          <li>
            <button
              @click="goToPage(2)"
              :class="[
          'px-3 py-2 border rounded-lg mx-1',  /* added mx-1 here too */
          currentPage === 2
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-white text-blue-600 hover:bg-blue-100'
        ]"
            >
              2
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
