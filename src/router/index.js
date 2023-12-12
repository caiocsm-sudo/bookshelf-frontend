import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/views/HomeView.vue";
import AuthVue from "@/views/authentication/AuthView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeVue,
  },
  {
    path: "/auth",
    name: "authenticate",
    component: () => AuthVue,
  },
  {
    path: "/book/:id",
    name: "selected-book",
    component: () => import("@/views/books/BookView.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
