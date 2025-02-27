<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center mb-4">Login</h2>
        <form @submit.prevent="handleLogin">
          <input
            type="email"
            v-model="email"
            placeholder="Email"
            class="w-full px-4 py-2 mb-3 border rounded"
            required
          />
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            class="w-full px-4 py-2 mb-3 border rounded"
            required
          />
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useAuthStore } from "@/stores/useAuthStore";
  import { useRouter } from "vue-router";
  
  const email = ref("");
  const password = ref("");
  const authStore = useAuthStore();
  const router = useRouter();
  
  const handleLogin = async () => {
    await authStore.login(email.value, password.value);
    if (authStore.token) {
      router.push("/dashboard");
    }
  };
  </script>
  