<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Your Wardrobe</h1>

    <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded">Logout</button>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
      <div v-for="item in wardrobeStore.items" :key="item.id" class="border p-4 rounded">
        <p class="font-semibold">{{ item.name }}</p>
        <p class="text-gray-500">{{ item.category }}</p>
        <button @click="deleteItem(item.id)" class="bg-red-500 text-white px-2 py-1 rounded mt-2">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/useAuthStore'
import { useWardrobeStore } from '@/stores/useWardrobeStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const wardrobeStore = useWardrobeStore()
const router = useRouter()

const logout = () => {
  authStore.logout()
  router.push('/login')
}

const deleteItem = (id) => {
  wardrobeStore.deleteItem(id)
}

onMounted(() => {
  wardrobeStore.fetchItems()
})
</script>
