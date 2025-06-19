<template>
  <div class="h-screen flex flex-col">
    <!-- Fixed Header -->
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
          Add Student
        </router-link>
      </div>
    </div>

    <!-- Scrollable Table -->
    <div class="overflow-auto flex-grow p-6">
      <table
        class="w-full text-sm text-left text-gray-500 shadow-md sm:rounded-lg"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0 z-0"
        >
          <tr class="bg-white border-b border-gray-200">
            <th scope="col" class="p-4"></th>
            <th scope="col" class="px-6 py-3 text-blue-500">Student Name</th>
            <th scope="col" class="px-6 py-3 text-blue-500">ID Card</th>
            <th scope="col" class="px-6 py-3 text-blue-500">Class</th>
            <th scope="col" class="px-6 py-3 text-blue-500">TimeLine</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="i in 40"
            :key="i"
            class="bg-white border-b border-gray-200 hover:bg-gray-50"
          >
            <td class="w-4 p-4"></td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Student {{ i }}
            </th>
            <td class="px-6 py-4">STU{{ String(i).padStart(3, "0") }}</td>
            <td class="px-6 py-4">Class {{ (i % 5) + 1 }}</td>
            <td class="px-6 py-4">2025-06-{{ (i % 28) + 1 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
