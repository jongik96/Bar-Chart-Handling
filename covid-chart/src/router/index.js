import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Info.vue"),
  },
  {
    path: "/info",
    name: "Info",
    component: () => import("@/views/Info.vue"),
  },
  {
    path: "/month",
    name: "ByMonth",
    component: () => import("@/views/ByMonth.vue"),
  },
  {
    path: "/day",
    name: "ByDay",
    component: () => import("@/views/ByDay.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
