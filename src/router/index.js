import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "@/views/Dashboard.vue";
import Book from "@/views/book.vue";
import Borrow from "@/views/Borrow.vue";
import Student from "@/views/student.vue";
import Login from "@/Auth/login-book.vue";
import Hero from "../Auth/login.vue";

const routes = [
  {
    path: "/login-book",
    component: Login,
    meta: { layout: "auth" },
  },
  {
    path: "/",
    component: Dashboard,
    meta: { layout: "main" },
  },
  {
    path: "/book",
    component: Book,
    meta: { layout: "main" },
  },
  {
    path: "/borrow",
    component: Borrow,
    meta: { layout: "main" },
  },
  {
    path: "/student",
    component: Student,
    meta: { layout: "main" },
  },
  {
    path: "/login-book",
    component: Login,
  },
  {
    path: "/login",
    component: Hero,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
