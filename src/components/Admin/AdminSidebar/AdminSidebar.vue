<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const navItems = [
  {
    name: "Dashboard",
    path: "",
    icon: "md-dashboardcustomize",
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: "hi-solid-users",
  },
  {
    name: "Category",
    path: "/admin/category",
    icon: "md-category-round",
  },
  {
    name: "Products",
    path: "/admin/products",
    icon: "md-productionquantitylimits",
  },
  {
    name: "Suppliers",
    path: "/admin/suppliers",
    icon: "fa-users",
  },
];

const isActive = (path) => route.path === path;
</script>

<template>
  <main class="">
    <h1 class="lobster text-4xl text-center text-white my-8">stoo</h1>

    <div class="mt-8">
      <RouterLink
        v-for="item in navItems"
        :to="{ path: item.path }"
        :key="item.path"
        class="flex gap-x-2 w-full px-5 py-2 items-center mb-3"
        :class="{
          'bg-gray-500 border-b-2 border-b-gray-400': isActive(item.path),
        }"
      >
        <div class="flex">
          <v-icon :name="item.icon" class="w-6 h-6 mr-2" />
          <p>
            {{ item.name }}
          </p>
        </div>
      </RouterLink>
    </div>
  </main>
</template>
