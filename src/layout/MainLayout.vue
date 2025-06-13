<template>
  <div class="h-screen flex">
    <aside class="flex-shrink-0 h-full">
      <Navbar />
    </aside>
    <div class="flex flex-col flex-1 overflow-hidden">
      <main class="flex-1 overflow-y-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Profile from "../components/profile.vue";
</script>
