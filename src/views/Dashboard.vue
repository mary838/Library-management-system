<script setup>
import { ref, onMounted } from "vue";
import Profile from "../components/profile.vue";
import Chart from "../components/StudentChart.vue";

// Reactive state
const dashboardStats = ref({
  total_books: 0,
  total_students: 0,
  total_borrows: 0,
  borrowed_not_returned: 0,
  returned: 0,
});

// Fetch API data with Authorization header
const fetchDashboardStats = async () => {
  try {
    const token = localStorage.getItem("token"); // Get JWT token from localStorage

    const res = await fetch("http://localhost:3000/api/dashboard", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    if (!res.ok) throw new Error("Failed to fetch dashboard data");

    const data = await res.json();
    console.log("Fetched dashboard stats:", data);
    dashboardStats.value = data;
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
  }
};

onMounted(() => {
  fetchDashboardStats();
});
</script>

<template>
  <header class="sticky top-0 z-10 bg-white shadow-md">
    <Profile />
  </header>

  <div
    class="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-2"
  >
    <!-- Students -->
    <a
      href="#"
      class="block p-4 bg-white border rounded-lg shadow-sm hover:bg-gray-100"
    >
      <h5
        class="text-xl font-semibold flex justify-between items-center text-gray-900 mb-1"
      >
        {{ dashboardStats.total_students }}
        <div class="w-8 h-8 bg-blue-500 rounded-full overflow-hidden relative">
          <svg
            class="absolute w-10 h-10 text-red-600 -left-1 p-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill="white"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            />
          </svg>
        </div>
      </h5>
      <p class="text-sm font-medium text-gray-700">Member Student</p>
    </a>

    <!-- Borrowed Books -->
    <a
      href="#"
      class="block p-4 bg-white border rounded-lg shadow-sm hover:bg-gray-100"
    >
      <h5
        class="text-xl font-semibold flex justify-between items-center text-gray-900 mb-1"
      >
        {{ dashboardStats.total_borrows }}
        <div
          class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
        >
          <svg
            class="w-5 h-5 text-white"
            viewBox="0 0 384 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M0 64C0 28.7 28.7 0 64 0L224 0v128c0 17.7 14.3 32 32 32h128v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0l128 128z"
            />
          </svg>
        </div>
      </h5>
      <p class="text-sm font-medium text-gray-700">Borrowed Books</p>
    </a>

    <!-- Total Books -->
    <a
      href="#"
      class="block p-4 bg-white border rounded-lg shadow-sm hover:bg-gray-100"
    >
      <h5
        class="text-xl font-semibold flex justify-between items-center text-gray-900 mb-1"
      >
        {{ dashboardStats.total_books }}
        <div
          class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
        >
          <svg
            class="w-5 h-5 text-white"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M96 0C43 0 0 1 0 96v320c0 53 43 96 96 96h288c17.7 0 32-14.3 32-32v-64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H96zm0 384h256v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
            />
          </svg>
        </div>
      </h5>
      <p class="text-sm font-medium text-gray-700">Total Books</p>
    </a>
  </div>

  <Chart />
</template>

