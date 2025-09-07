import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Login/LoginView.vue"),
      meta: { layout: "empty" },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login/LoginView.vue"),
      meta: { layout: "empty" },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/views/Dashboard/DashboardView.vue"),
    },
    {
      path: "/users",
      name: "users",
      component: () => import("@/views/User/UserView.vue"),
    },
  ],
});

export default router;
