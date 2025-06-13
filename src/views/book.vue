<script setup></script>

<template>
  <div class="h-screen flex flex-col">
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

        <button
          class="inline-flex cursor-pointer items-center justify-center px-6 py-2 text-sm font-medium text-white bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg shadow hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition"
        >
          + Add Student
        </button>
      </div>
    </div>
    <div class="overflow-x-auto relative shadow-md p-6 sm:rounded-lg mb-8">
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3 text-blue-600">Library</th>
              <th scope="col" class="px-6 py-3 text-blue-600">Loan Type</th>
              <th scope="col" class="px-6 py-3 text-blue-600">Classmark</th>
              <th scope="col" class="px-6 py-3 text-blue-600">Item Barcod</th>
              <th scope="col" class="px-6 py-3 text-blue-600">
                Collection/Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Augustine House
              </td>
              <td class="px-6 py-4">4week loan</td>
              <td class="px-6 py-4">378.170281 COT</td>
              <td class="px-6 py-4">360762200X</td>
              <td class="px-6 py-4">Main Collection</td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Augustine House
              </td>
              <td class="px-6 py-4">4week loan</td>
              <td class="px-6 py-4">378.170281 COT</td>
              <td class="px-6 py-4">360762200X</td>
              <td class="px-6 py-4">Main Collection</td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Augustine House
              </td>
              <td class="px-6 py-4">4week loan</td>
              <td class="px-6 py-4">378.170281 COT</td>
              <td class="px-6 py-4">360762200X</td>
              <td class="px-6 py-4">Main Collection</td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Augustine House
              </td>
              <td class="px-6 py-4">4week loan</td>
              <td class="px-6 py-4">378.170281 COT</td>
              <td class="px-6 py-4">360762200X</td>
              <td class="px-6 py-4">Main Collection</td>
            </tr>

            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Augustine House
              </td>
              <td class="px-6 py-4">4week loan</td>
              <td class="px-6 py-4">378.170281 COT</td>
              <td class="px-6 py-4">360762200X</td>
              <td class="px-6 py-4">Main Collection</td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Augustine House
              </td>
              <td class="px-6 py-4">4week loan</td>
              <td class="px-6 py-4">378.170281 COT</td>
              <td class="px-6 py-4">360762200X</td>
              <td class="px-6 py-4">Main Collection</td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Augustine House
              </td>
              <td class="px-6 py-4">4week loan</td>
              <td class="px-6 py-4">378.170281 COT</td>
              <td class="px-6 py-4">360762200X</td>
              <td class="px-6 py-4">Main Collection</td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Augustine House
              </td>
              <td class="px-6 py-4">4week loan</td>
              <td class="px-6 py-4">378.170281 COT</td>
              <td class="px-6 py-4">360762200X</td>
              <td class="px-6 py-4">Main Collection</td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Augustine House
              </td>
              <td class="px-6 py-4">4week loan</td>
              <td class="px-6 py-4">378.170281 COT</td>
              <td class="px-6 py-4">360762200X</td>
              <td class="px-6 py-4">Main Collection</td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Augustine House
              </td>
              <td class="px-6 py-4">4week loan</td>
              <td class="px-6 py-4">378.170281 COT</td>
              <td class="px-6 py-4">360762200X</td>
              <td class="px-6 py-4">Main Collection</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div></div>
</template>
