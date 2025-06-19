<script setup>
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    <div class="grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-5xl">
      
      <!-- Left Side Image -->
      <div class="hidden md:block">
        <img
          src="../assets/image.png"
          alt="Side Image"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Right Side Form -->
      <div class="flex flex-col justify-center p-8 md:p-12 space-y-6">
        <!-- Small Logo inside form -->
        <div class="flex justify-center">
          <img
            src="../assets/pngtree-creative-idea-bulb-library-bookshelf-png-image_2095898-removebg-preview.png"
            alt="Logo"
            class="w-24 h-24 object-contain"
          />
        </div>

        <!-- Heading -->
        <h1 class="text-2xl font-bold text-center text-blue-600">
          Login to Your Account
        </h1>

        <!-- Form -->
        <form class="space-y-5">
          <!-- Name -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
