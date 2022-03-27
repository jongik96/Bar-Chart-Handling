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
    path: "/barMonth",
    name: "ByMonth",
    component: () => import("@/views/ByMonth.vue"),
  },
  {
    path: "/barDay",
    name: "BarByDay",
    component: () => import("@/views/ByDay.vue"),
    props: true,
  },
  {
    path: "/lineMonth",
    name: "LineMonth",
    component: () => import("@/views/LineMonth.vue"),
  },
  {
    path: "/lineDay",
    name: "LineByDay",
    component: () => import("@/views/LineDay.vue"),
    props: true,
  },
  {
    path: "/mixMonth",
    name: "MixMonth",
    component: () => import("@/views/MixMonth.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
