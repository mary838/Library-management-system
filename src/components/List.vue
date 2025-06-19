<script setup>
// Your logic or data fetching can go here
</script>

<template>
  <div class="min-h-screen p-6 bg-gray-100">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="overflow-x-auto shadow-md rounded-lg bg-white">
        <div class="flex justify-between items-center px-6 py-4 border-b">
          <h2 class="text-lg font-semibold text-gray-700">Book List</h2>
          <button
            type="button"
            class="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            List Book
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
        </div>

        <table class="w-full text-sm text-left text-gray-700">
          <thead class="text-xs uppercase bg-gray-50 text-gray-600">
            <tr>
              <th class="px-6 py-3">Title</th>
              <th class="px-6 py-3">Author</th>
              <th class="px-6 py-3">Category</th>
              <th class="px-6 py-3">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b hover:bg-gray-50">
              <td class="px-6 py-4">MacBook</td>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Student List Table -->
      <div class="overflow-x-auto shadow-md rounded-lg bg-white">
        <div class="flex justify-between items-center px-6 py-4 border-b">
          <h2 class="text-sm font-semibold text-gray-700">Student List</h2>
          <button
            type="button"
            class="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            List Students
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
        </div>

        <table class="w-full text-sm text-left text-gray-700">
          <thead class="text-xs uppercase bg-gray-50 text-gray-600">
            <tr>
              <th class="px-6 py-3">Name</th>
              <th class="px-6 py-3">ID</th>
              <th class="px-6 py-3">Class</th>
              <th class="px-6 py-3">Number</th>
              <th class="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b hover:bg-gray-50">
              <td class="px-6 py-4">John Doe</td>
              <td class="px-6 py-4">ST1234</td>
              <td class="px-6 py-4">10-B</td>
              <td class="px-6 py-4">23</td>
              <td class="px-6 py-4">
                <a href="#" class="text-blue-600 hover:underline">Edit</a>
              </td>
            </tr>
            <!-- Add more student rows here -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
