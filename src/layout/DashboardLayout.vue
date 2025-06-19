<template>
  <div class="min-h-screen flex bg-gray-100">
    <!-- Sidebar or navigation here -->
    <aside class="w-64 bg-white shadow-md">
      <!-- Sidebar content -->
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-6">
      <router-view />
    </main>
  </div>
</template>

<script setup>
// You can import useRoute or useUserStore if needed
</script>

<style scoped>
/* Optional: styles */
</style>
