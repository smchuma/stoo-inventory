import AdminLayout from "@/layouts/AdminLayout.vue";
import Category from "@/views/Admin/Category.vue";
import Product from "@/views/Admin/Product.vue";
import Supplier from "@/views/Admin/Supplier.vue";
import Users from "@/views/Admin/Users.vue";
import Login from "@/views/Login.vue";
import Home from "@/views/Salesperson/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin/users",
    component: AdminLayout,
    children: [
      {
        path: "/admin/users",
        component: Users,
      },

      {
        path: "/admin/category",
        component: Category,
      },
      {
        path: "/admin/suppliers",
        component: Supplier,
      },
      {
        path: "/admin/products",
        component: Product,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
