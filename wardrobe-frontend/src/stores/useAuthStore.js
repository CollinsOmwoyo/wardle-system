import axios from "axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: localStorage.getItem("token") || "",
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/login", {
          email,
          password,
        });
        this.token = response.data.token;
        localStorage.setItem("token", this.token);
      } catch (error) {
        console.error("Login failed:", error.response.data);
      }
    },
    logout() {
      this.token = "";
      localStorage.removeItem("token");
    },
  },
});
