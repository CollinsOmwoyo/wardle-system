<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
      <h1 class="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">Register</h1>

      <form @submit.prevent="register" class="space-y-4">
        <div>
          <label class="block text-gray-700 dark:text-gray-300">Name</label>
          <input 
            type="text" 
            v-model="name" 
            class="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
            required
          />
        </div>

        <div>
          <label class="block text-gray-700 dark:text-gray-300">Email</label>
          <input 
            type="email" 
            v-model="email" 
            class="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
            required
          />
        </div>

        <div>
          <label class="block text-gray-700 dark:text-gray-300">Password</label>
          <input 
            type="password" 
            v-model="password" 
            class="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
            required
          />
        </div>

        <button 
          type="submit" 
          class="w-full py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    register() {
      console.log("Registering:", this.name, this.email, this.password);
      // Handle registration logic here
    },
  },
};
</script>
