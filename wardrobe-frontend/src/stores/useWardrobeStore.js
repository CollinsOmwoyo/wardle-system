import axios from "axios";
import { defineStore } from "pinia";

export const useWardrobeStore = defineStore("wardrobe", {
  state: () => ({
    items: [],
  }),
  actions: {
    async fetchItems() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/clothing", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        this.items = response.data;
      } catch (error) {
        console.error("Failed to fetch items:", error.response?.data);
      }
    },

    async addItem(newItem) {
      try {
        await axios.post("http://127.0.0.1:8000/api/clothing", newItem, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        this.fetchItems();
      } catch (error) {
        console.error("Failed to add item:", error.response?.data);
      }
    },

    async deleteItem(itemId) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/clothing/${itemId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        this.fetchItems();
      } catch (error) {
        console.error("Failed to delete item:", error.response?.data);
      }
    },
  },
});
