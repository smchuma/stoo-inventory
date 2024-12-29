import AdminLayout from "@/layouts/AdminLayout.vue";
import Category from "@/views/Admin/Category.vue";
import Supplier from "@/views/Admin/Supplier.vue";
import Users from "@/views/Admin/Users.vue";
import Home from "@/views/Salesperson/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin/users",
    component: AdminLayout,
    children: [
      {
        path: "/admin/users",
        name: "Users",
        component: Users,
      },

      {
        path: "/admin/category",
        name: "Category",
        component: Category,
      },
      {
        path: "/admin/supplier",
        name: "Suppliers",
        component: Supplier,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
