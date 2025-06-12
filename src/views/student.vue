<script setup></script>

<template>
  <div class="relative shadow-md sm:rounded-lg">
    <div
      class="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 p-4 mb-6 bg-white shadow-md rounded-e-3xl"
    >
      <form class="w-full sm:w-96">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
            class="block w-full ps-10 py-2 text-sm text-gray-900 border border-blue-400 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search books..."
            required
          />
        </div>
      </form>

      <!-- Add Book Button -->
      <button
        class="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg shadow hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 transition"
      >
        + Add Book
      </button>
    </div>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg mb-8">
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Book Name</th>
              <th scope="col" class="px-6 py-3">ID Book</th>
              <th scope="col" class="px-6 py-3">Type</th>
              <th scope="col" class="px-6 py-3">Timeline</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </td>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </td>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Laptop PC</td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </td>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple Watch
              </td>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Accessories</td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                iPad
              </td>
              <td class="px-6 py-4">Gold</td>
              <td class="px-6 py-4">Tablet</td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                iPad
              </td>
              <td class="px-6 py-4">Gold</td>
              <td class="px-6 py-4">Tablet</td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                iPad
              </td>
              <td class="px-6 py-4">Gold</td>
              <td class="px-6 py-4">Tablet</td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                iPad
              </td>
              <td class="px-6 py-4">Gold</td>
              <td class="px-6 py-4">Tablet</td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                iPad
              </td>
              <td class="px-6 py-4">Gold</td>
              <td class="px-6 py-4">Tablet</td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple iMac 27"
              </td>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">PC Desktop</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
