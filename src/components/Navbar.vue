<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-vue-next";
import Image from "../assets/Lidrary.png"; // Ensure this path is correct

const route = useRoute();
const isCollapsed = ref(false);

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

const isActive = (path) => {
  return route.path === path
    ? "bg-blue-100 text-blue-700"
    : "text-gray-600 hover:text-blue-600";
};

const menuItems = [
  { name: "Dashboard", path: "/Dashboard", icon: LayoutDashboard },
  { name: "Book", path: "/books", icon: BookOpen },
  { name: "Students", path: "/student", icon: Users },
  { name: "Borrow", path: "/borrow", icon: TrendingUp },
];
</script>

<template>
  <aside
    :class="[
      'bg-white shadow-lg p-4 h-screen flex flex-col justify-between transition-all duration-300',
      isCollapsed ? 'w-20' : 'w-64',
    ]"
  >
    <!-- Top Section -->
    <div>
      <!-- Logo and Toggle -->
      <div class="flex justify-between ms-6 items-center mb-8">
        <img
          v-if="!isCollapsed"
          :src="Image"
          alt="Logo"
          class="object-cover w-36 h-14"
        />
        <button
          @click="toggleSidebar"
          class="p-1 text-gray-600 hover:text-blue-600"
        >
          <component
            :is="isCollapsed ? ChevronRight : ChevronLeft"
            class="w-5 h-5"
          />
        </button>
      </div>

      <!-- Nav Links -->
      <nav class="space-y-2">
        <router-link
          v-for="item in menuItems"
          :key="item.name"
          :to="item.path"
          class="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors"
          :class="isActive(item.path)"
        >
          <component :is="item.icon" class="w-5 h-5" />
          <span v-if="!isCollapsed" class="text-sm font-medium">
            {{ item.name }}
          </span>
        </router-link>
      </nav>
    </div>

    <!-- Bottom Padding or Future Content -->
    <div v-if="!isCollapsed" class="text-xs text-gray-400 text-center pt-6">
      &copy; 2025 Your App
    </div>
  </aside>
</template>
