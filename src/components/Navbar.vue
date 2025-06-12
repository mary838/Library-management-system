<script setup>
import { useRoute } from "vue-router";
import { LayoutDashboard, BookOpen, Users, TrendingUp } from "lucide-vue-next";
import Image from "../assets/Lidrary.png";

const route = useRoute();

const isActive = (path) => {
  return route.path === path
    ? "bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-white"
    : "text-gray-500 hover:text-blue-600 dark:text-gray-300";
};

const menuItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Your BooK", path: "/book", icon: BookOpen },
  { name: "Your Student", path: "/student", icon: Users },
  { name: "Borrow", path: "/borrow", icon: TrendingUp },
];
</script>

<template>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Sidebar -->
    <aside
      class="w-64 bg-white dark:bg-gray-800 shadow-lg p-6 flex flex-col justify-between"
    >
      <div>
        <img :src="Image" alt="Avatar" class="object-cover w-42 h-18 p-3" />
        <nav class="space-y-3">
          <router-link
            v-for="item in menuItems"
            :key="item.name"
            :to="item.path"
            class="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200"
            :class="isActive(item.path)"
          >
            <component :is="item.icon" class="w-5 h-5" />
            <span class="text-sm font-medium">{{ item.name }}</span>
          </router-link>
        </nav>
      </div>
    </aside>

    <!-- Main Content -->
    <!-- <main class="flex-1 overflow-y-auto p-6">
      <router-view />
    </main> -->
  </div>
</template>
