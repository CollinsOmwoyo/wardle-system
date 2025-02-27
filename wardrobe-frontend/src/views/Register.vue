<template>
    <div class="flex min-h-screen items-center justify-center bg-gray-100">
      <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center text-gray-700">Register</h2>
  
        <form @submit.prevent="register">
          <div class="mt-4">
            <label class="block text-sm">Name</label>
            <input v-model="name" type="text" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring" />
          </div>
  
          <div class="mt-4">
            <label class="block text-sm">Email</label>
            <input v-model="email" type="email" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring" />
          </div>
  
          <div class="mt-4">
            <label class="block text-sm">Password</label>
            <input v-model="password" type="password" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring" />
          </div>
  
          <button type="submit" class="w-full mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
            Register
          </button>
        </form>
  
        <p v-if="errorMessage" class="mt-2 text-red-500">{{ errorMessage }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import axios from "axios";
  
  const router = useRouter();
  const name = ref("");
  const email = ref("");
  const password = ref("");
  const errorMessage = ref("");
  
  const register = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name: name.value,
        email: email.value,
        password: password.value,
      });
  
      localStorage.setItem("token", response.data.token);
      router.push("/dashboard");
    } catch (error) {
      errorMessage.value = "Registration failed. Please check your details.";
    }
  };
  </script>
  