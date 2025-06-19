import { createRouter, createWebHistory } from "vue-router";

// Protected pages (only for logged in users)
import Dashboard from "../views/Dashboard.vue";
import Book from "../views/book.vue";
import Borrow from "../views/Borrow.vue";
import Student from "../views/student.vue";

// Public login pages
import LoginBook from "../Auth/login-book.vue";
import Login from "../Auth/login.vue";
import LoginStudent from "../Auth/login-student.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login, // First page
    meta: { layout: "auth" },
  },
  {
    path: "/login-book",
    name: "LoginBook",
    component: LoginBook,
    meta: { layout: "auth" },
  },
  {
    path: "/login-student",
    name: "LoginStudent",
    component: LoginStudent,
    meta: { layout: "auth" },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { layout: "main", requiresAuth: true },
  },
  {
    path: "/book",
    name: "Book",
    component: Book,
    meta: { layout: "main", requiresAuth: true },
  },
  {
    path: "/borrow",
    name: "Borrow",
    component: Borrow,
    meta: { layout: "main", requiresAuth: true },
  },
  {
    path: "/student",
    name: "Student",
    component: Student,
    meta: { layout: "main", requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 🔐 Global Navigation Guard to protect routes
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("token");

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Trying to access protected page without login
    next({ name: "Login" });
  } else if (
    (to.name === "Login" ||
      to.name === "LoginBook" ||
      to.name === "LoginStudent") &&
    isAuthenticated
  ) {
    // If already logged in, redirect away from login
    next({ name: "Dashboard" });
  } else {
    next(); // allow access
  }
});

export default router;
