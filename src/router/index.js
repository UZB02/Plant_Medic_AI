import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AppLayout from "../layouts/AppLayout/Main.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: AppLayout,
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
      ],
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../layouts/User/register.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../layouts/User/login.vue"),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
