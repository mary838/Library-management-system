import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "@/views/Dashboard.vue";
import Book from "@/views/book.vue";
import Borrow from "@/views/Borrow.vue";
import Student from "@/views/student.vue";
import Login from "@/Auth/login-book.vue";
import Hero from "../Auth/login.vue";
import Newstudent from "../Auth/login-student.vue";


const routes = [
  {
    path: "/login-book",
    component: Login,
    meta: { layout: "auth" },
  },
  {
    path: "/dashboard",
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
    path: "/",
    component: Hero,
    meta: { layout: "auth" },
  },
  {
     path: "/login-student",
    component: Newstudent,
  
    meta: { layout: "auth" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
