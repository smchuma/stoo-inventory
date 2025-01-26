import AdminLayout from "@/layouts/AdminLayout.vue";
import Category from "@/views/Admin/Category.vue";
import Product from "@/views/Admin/Product.vue";
import Supplier from "@/views/Admin/Supplier.vue";
import Users from "@/views/Admin/Users.vue";
import Login from "@/views/Login.vue";
import Home from "@/views/Salesperson/Home.vue";
import { createRouter, createWebHistory } from "vue-router";
import middlewarePipeline from "./middlewarePipeline";
import redirectIfGuest from "@/middlewares/redirectIfGuest";
import redirectIfAuthenticated from "@/middlewares/redirectIfAuthenticated";
import redirectIfAdmin from "@/middlewares/redirectIfAdmin";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { middleware: [redirectIfGuest, redirectIfAdmin] },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { middleware: [redirectIfAuthenticated] },
  },
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "users",
        name: "users",
        component: Users,
      },

      {
        path: "category",
        name: "Category",
        component: Category,
      },
      {
        path: "suppliers",
        name: "Suppliers",
        component: Supplier,
      },
      {
        path: "products",
        name: "Products",
        component: Product,
      },
    ],
    meta: { middleware: [redirectIfGuest] },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }

  const middleware = to.meta.middleware;

  const context = { to, from, next };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
