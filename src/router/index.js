import { createRouter, createWebHistory } from "vue-router";
import adminRoutes from "./adminRoutes";
import learnRoutes from "./learnRoutes";
import clientRoutes from "./clientRoutes";

const routes = [...adminRoutes, ...clientRoutes, ...learnRoutes];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
