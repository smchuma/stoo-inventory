<script setup>
import AdminNav from "@/components/Admin/AdminNav/AdminNav.vue";
import AdminSidebar from "@/components/Admin/AdminSidebar/AdminSidebar.vue";
import { ref } from "vue";
import { RouterView } from "vue-router";

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <main class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <AdminSidebar
      class="bg-gray-600 text-white fixed top-0 left-0 h-full w-64 transition-transform transform lg:translate-x-0"
      :class="{ '-translate-x-full': !isSidebarOpen }"
    />

    <!-- Main Content -->
    <div class="flex flex-col flex-1 lg:ml-64">
      <!-- Navbar -->
      <AdminNav
        @toggle-sidebar="toggleSidebar"
        class="shadow-md w-full px-4 py-4 lg:left-64 fixed top-0 lg:w-[calc(100%-16rem)] z-10"
      />
      <main class="mt-16 flex-1 p-4 overflow-y-auto">
        <RouterView />
      </main>
    </div>
  </main>
</template>
