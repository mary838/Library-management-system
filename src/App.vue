<script setup>
import Navbar from "@/components/Navbar.vue";
// import Header from "./components/Header.vue";
// import profile from "./components/profile.vue";
</script>

<template>
  <div class="h-screen flex">
    <aside class="flex-shrink-0 h-full">
      <Navbar />
    </aside>
    <div class="flex flex-col flex-1 overflow-hidden">
      <!-- <Header /> -->
      <header>
        <profile />
      </header>

      <main class="flex-1 overflow-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>
