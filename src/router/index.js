import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
// import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
