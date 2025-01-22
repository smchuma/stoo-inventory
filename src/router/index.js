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
    name: "home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "users",
        name: "Users",
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
    meta: { requiresAuth: true, roles: ["admin"] },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   const authStore = useAuthStore();

//   if (to.meta.requiresAuth) {
//     if (!authStore.token) {
//       return next("/login");
//     }
//   }
//   next();
// });

export default router;
