<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Add New Clothing Item</h1>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <input v-model="name" type="text" placeholder="Item Name" class="w-full p-2 border rounded" required />
        <input v-model="category" type="text" placeholder="Category" class="w-full p-2 border rounded" required />
        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded">Add Item</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useWardrobeStore } from "@/stores/useWardrobeStore";
  import { useRouter } from "vue-router";
  
  const name = ref("");
  const category = ref("");
  const wardrobeStore = useWardrobeStore();
  const router = useRouter();
  
  const handleSubmit = async () => {
    await wardrobeStore.addItem({ name: name.value, category: category.value });
    router.push("/dashboard");
  };
  </script>
  