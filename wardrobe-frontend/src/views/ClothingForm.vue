<template>
    <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 class="text-xl font-bold mb-4">{{ item ? "Edit Item" : "Add Item" }}</h2>
  
        <form @submit.prevent="saveItem">
          <label>Name:</label>
          <input v-model="form.name" type="text" required class="w-full border px-2 py-1 rounded mb-2" />
  
          <label>Category:</label>
          <select v-model="form.category" required class="w-full border px-2 py-1 rounded mb-2">
            <option value="tops">Tops</option>
            <option value="bottoms">Bottoms</option>
            <option value="shoes">Shoes</option>
          </select>
  
          <div class="flex justify-between mt-4">
            <button type="button" @click="$emit('close')" class="bg-gray-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits, watch } from "vue";
  import ClothingService from "@/stores/ClothingService";
  
  const props = defineProps(["item"]);
  const emit = defineEmits(["close", "saved"]);
  const form = ref({ name: "", category: "" });
  
  watch(
    () => props.item,
    (newItem) => {
      form.value = newItem ? { ...newItem } : { name: "", category: "" };
    },
    { immediate: true }
  );
  
  async function saveItem() {
    if (props.item) {
      await ClothingService.update(props.item.id, form.value);
    } else {
      await ClothingService.create(form.value);
    }
    emit("saved");
    emit("close");
  }
  </script>
  