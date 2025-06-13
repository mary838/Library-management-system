<script setup>
import Four from '../assets/Lidrary.png';
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-md rounded-lg p-8 flex w-full max-w-4xl">
      <!-- Left side (Image) -->
      <div class="w-1/2 hidden md:flex items-center justify-center">
        <img
          :src="Four"
          alt="Library School"
          class="w-full h-auto object-cover rounded-lg"
        />
      </div>

      <!-- Right side (Form) -->
      <div class="w-full md:w-1/2 px-4">
        <h2 class="text-2xl font-bold text-center text-blue-600 mb-6">
          Welcome To Library School
        </h2>
        <form class="space-y-4">
          <input
            type="email"
            placeholder="Email"
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div class="relative">
            <input
              type="password"
              placeholder="Password"
              class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="remember" class="mr-2" />
            <label for="remember" class="text-sm text-gray-600">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
