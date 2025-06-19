<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Image from "../assets/four.jpg";

const router = useRouter();
const username = ref("Loading...");

function handleLogout() {
  localStorage.removeItem("token");
  localStorage.removeItem("username"); // clear username too
  router.push("/");
}

// On component mount, load username from localStorage
onMounted(() => {
  const storedUsername = localStorage.getItem("username");
  if (storedUsername) {
    username.value = storedUsername;
  } else {
    username.value = "Guest";
  }
});
</script>

<template>
  <header
    class="w-full z-10 flex justify-between items-center bg-white border-b border-gray-200 px-6 py-3 shadow-sm rounded-b-3xl"
  >
    <a href="#" class="flex items-center space-x-4">
      <div class="w-10 h-10 rounded-full overflow-hidden">
        <img :src="Image" alt="Avatar" class="object-cover w-full h-full" />
      </div>
      <div>
        <h3 class="text-sm font-semibold text-gray-800">Librarian</h3>
        <p class="text-sm text-gray-600">{{ username }}</p>
        <p class="text-sm text-gray-600">ID : 3245-123</p>
      </div>
    </a>

    <button
      @click="handleLogout"
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-red-600 transition"
    >
      Log Out
    </button>
  </header>
</template>
