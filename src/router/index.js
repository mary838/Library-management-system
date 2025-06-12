import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Book from "../views/book.vue";
import Borrow from "../views/Borrow.vue";
import Student from "../views/student.vue";
import Login from "../Auth/login-book.vue";


const routes = [
  {
    path: "/book",
    component: Book,
  },
  {
    path: "/Borrow",
    component: Borrow,
  },
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/student",
    component: Student,
  },
    {
    path: "/login-book",
    component: Login ,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
