<script setup>
import { useRouter } from "vue-router";
import Image from "../assets/four.jpg"; // Ensure this is correct

const AdminName = "THOUN SOVANNAREACH";
</script>

<template>
  <header class="w-full flex justify-between mx-auto">
    <a
      href="#"
      class="block w-full p-6 bg-white border border-gray-200 shadow-sm hover:bg-gray-100 rounded-b-3xl transition duration-200"
    >
      <div class="flex items-center space-x-4">
        <div class="relative w-10 h-10 overflow-hidden rounded-full">
          <img :src="Image" alt="Avatar" class="object-cover w-full h-full" />
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-800">Librarian</h3>
          <p class="text-sm text-gray-600">
            {{ AdminName }}
          </p>
          <p class="text-sm text-gray-600">ID : 3245-123</p>
        </div>
        <button
          @click="handleLogout"
          class="ml-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-red-600 transition"
        >
          Log Out
        </button>
      </div>
    </a>
  </header>
</template>
