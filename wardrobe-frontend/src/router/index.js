import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";
import AddItem from "@/views/AddItem.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/dashboard", component: Dashboard },
  {path: "/add-item", component: AddItem},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
