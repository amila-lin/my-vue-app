import { createRouter, createWebHistory } from "vue-router";
import TheContainer from "@/containers/TheContainer.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    redirect: "/home",
    component: TheContainer,
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/about",
        name: "About",
        component: () => import("@/views/About.vue"),
      },
      {
        path: "/education/math",
        name: "MathPage",
        component: () => import("@/views/education/MathPage.vue"),
      },
      {
        path: "/life/health",
        name: "HealthPage",
        component: () => import("@/views/life/HealthPage.vue"),
      },
      {
        path: "/life/hobbies",
        name: "HobbiesPage",
        component: () => import("@/views/life/HobbiesPage.vue"),
      },
      {
        path: "/life/finance",
        name: "FinancePage",
        component: () => import("@/views/life/FinancePage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/my-vue-app/"), // 👈 和 vite.config.ts 的 base 保持一致
  routes,
});

export default router;
