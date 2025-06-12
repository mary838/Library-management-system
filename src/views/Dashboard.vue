<script setup>
import List from "../components/List.vue";
import Profile from "../components/profile.vue";
</script>

<template>
  <header>
    <Profile />
  </header>
  <div
    class="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
  >
    <a
      href="#"
      class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-300 dark:hover:bg-gray-300"
    >
      <h5
        class="mb-2 text-3xl font-bold flex justify-between items-center tracking-tight text-gray-900 dark:text-white"
      >
        300
        <div
          class="relative w-10 h-10 overflow-hidden bg-blue-500 rounded-full dark:bg-gray-600"
        >
          <svg
            class="absolute w-12 h-12 p-1 text-red-600 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill="white"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </h5>
      <p class="font-bold text-gray-700 dark:text-gray-400">Member Student</p>
    </a>

    <a
      href="#"
      class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5
        class="mb-2 text-3xl font-bold flex justify-between items-center tracking-tight text-gray-900 dark:text-white"
      >
        155
        <div
          class="relative w-10 h-10 overflow-hidden bg-blue-500 rounded-full dark:bg-gray-600"
        >
          <svg
            class="absolute w-6 h-7 ms-2 mt-1.5 text-red-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="white"
              d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"
            />
          </svg>
        </div>
      </h5>
      <p class="font-bold text-gray-700 dark:text-gray-400">Borrowed Books</p>
    </a>

    <a
      href="#"
      class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5
        class="mb-2 text-3xl font-bold flex justify-between items-center tracking-tight text-gray-900 dark:text-white"
      >
        1020
        <div
          class="relative w-10 h-10 overflow-hidden bg-blue-500 rounded-full dark:bg-gray-600"
        >
          <svg
            class="absolute w-6 h-8 ms-2 mt-1 text-red-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              clip-rule="evenodd"
              fill="white"
              d="M96 0C43 0 0 1 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
            />
          </svg>
        </div>
      </h5>
      <p class="font-bold text-gray-700 dark:text-gray-400">Number Book</p>
    </a>
  </div>

  <List />
</template>
