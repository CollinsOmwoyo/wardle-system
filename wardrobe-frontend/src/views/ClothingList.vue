<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold">Your Wardrobe</h1>
  
      <button @click="openModal()" class="bg-green-500 text-white px-4 py-2 my-4 rounded">
        + Add Item
      </button>
  
      <div v-if="loading">Loading...</div>
      <div v-else-if="items.length === 0">No clothing items found.</div>
      <div v-else>
        <ul>
          <li v-for="item in items" :key="item.id" class="flex justify-between p-2 border">
            <span>{{ item.name }} - {{ item.category }}</span>
            <div>
              <button @click="editItem(item)" class="text-blue-500">Edit</button> |
              <button @click="deleteItem(item.id)" class="text-red-500">Delete</button>
            </div>
          </li>
        </ul>
      </div>
  
      <ClothingForm v-if="showModal" :item="selectedItem" @close="closeModal" @saved="fetchItems" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import ClothingService from "@/services/ClothingService";
  import ClothingForm from "@/components/ClothingForm.vue";
  
  const items = ref([]);
  const loading = ref(true);
  const showModal = ref(false);
  const selectedItem = ref(null);
  
  onMounted(fetchItems);
  
  function fetchItems() {
    loading.value = true;
    ClothingService.getAll()
      .then((response) => (items.value = response.data))
      .finally(() => (loading.value = false));
  }
  
  function deleteItem(id) {
    if (confirm("Are you sure?")) {
      ClothingService.delete(id).then(fetchItems);
    }
  }
  
  function openModal(item = null) {
    selectedItem.value = item;
    showModal.value = true;
  }
  
  function closeModal() {
    showModal.value = false;
  }
  </script>
  