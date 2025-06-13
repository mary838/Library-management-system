<template>
  <!-- Show layout only if not on login page -->
  <div v-if="!isLoginPage" class="h-screen flex">
    <aside class="flex-shrink-0 h-full">
      <Navbar />
    </aside>
    <div class="flex flex-col flex-1 overflow-hidden">
      <main class="flex-1 overflow-y-auto">
        <router-view />
      </main>
    </div>
  </div>

  <!-- Show only login view -->
  <div v-else class="h-screen">
    <router-view />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Navbar from "./components/Navbar.vue";

const route = useRoute();

const isLoginPage = computed(() =>
  ["/login-book", "/login"].includes(route.path)
);
</script>
