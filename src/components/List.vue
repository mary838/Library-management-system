<script setup></script>

<template>
  <div class="flex min-h-screen p-6 bg-gray-100">
    <div class="relative ms-1 overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-900">
        <thead class="text-xs text-black uppercase bg-white border-b">
          <div class="relative">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-b-3xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              List Book
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>

          <tr>
            <th scope="col" class="px-6 py-3 text-blue-500">Title</th>
            <th scope="col" class="px-6 py-3 text-blue-500">Author</th>
            <th scope="col" class="px-6 py-3 text-blue-500">Category</th>
            <th scope="col" class="px-6 py-3 text-blue-500">Quantity</th>
            <th scope="col" class="px-6 py-3 text-blue-500">Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >Edit</a
              >
            </td>
          </tr>
          <tr class="bg-white border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >Edit</a
              >
            </td>
          </tr>
          <tr class="bg-white border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2899</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >Edit</a
              >
            </td>
          </tr>
          <tr class="bg-white border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >Edit</a
              >
            </td>
          </tr>
          <tr class="bg-white border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2099</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >Edit</a
              >
            </td>
          </tr>
          <tr class="bg-white border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >Edit</a
              >
            </td>
          </tr>
          <tr class="bg-white border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >Edit</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="relative ms-1 overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-900">
        <thead class="text-xs text-black uppercase bg-white border-b">
          <div class="relative">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              List Students
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>

          <tr>
            <th scope="col" class="px-6 py-3 text-blue-500">Students Name</th>
            <th scope="col" class="px-6 py-3 text-blue-500">ID</th>
            <th scope="col" class="px-6 py-3 text-blue-500">Class</th>
            <th scope="col" class="px-6 py-3 text-blue-500">number</th>
            <th scope="col" class="px-6 py-3 text-blue-500">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >Edit</a
              >
            </td>
          </tr>
          <tr class="bg-white border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >Edit</a
              >
            </td>
          </tr>
          <tr class="bg-white border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2899</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >Edit</a
              >
            </td>
          </tr>
          <tr class="bg-white border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >Edit</a
              >
            </td>
          </tr>
          <tr class="bg-white border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2099</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >Edit</a
              >
            </td>
          </tr>
          <tr class="bg-white border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >Edit</a
              >
            </td>
          </tr>
          <tr class="bg-white border-b border-gray-200 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Silver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >Edit</a
              >
            </td>
          </tr>
          <!-- Repeat other rows similarly -->
        </tbody>
      </table>
    </div>
  </div>
</template>
