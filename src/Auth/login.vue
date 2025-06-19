<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref("");
const password = ref("");
const errorMessage = ref("");

const handleSubmit = async (e) => {
  e.preventDefault();
  errorMessage.value = "";

  try {
    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    });

    if (!res.ok) {
      throw new Error("Invalid username or password");
    }

    const data = await res.json();

    // Assuming your API returns a token in data.token
    localStorage.setItem("token", data.token);

    // Redirect to dashboard after successful login
    router.push("/dashboard");
  } catch (error) {
    errorMessage.value = error.message || "Login failed";
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    <div
      class="grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-5xl"
    >
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

        <!-- Show error message if any -->
        <p v-if="errorMessage" class="text-red-600 text-center">
          {{ errorMessage }}
        </p>

        <!-- Form -->
        <form class="space-y-5" @submit="handleSubmit">
          <!-- Username -->
          <div>
            <label
              for="username"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              v-model="username"
              type="text"
              id="username"
              placeholder="Enter your username"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <!-- Password -->
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              v-model="password"
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
