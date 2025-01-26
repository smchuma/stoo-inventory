<script setup>
import axiosClient from "@/axios";
import { Button } from "primevue";

const fetchUsers = async () => {
  const response = await axiosClient.get("/auth/user");
  console.log(response.data);
};

fetchUsers();
</script>

<template>
  <main class="mt-2 flex justify-between mb-5 items-center">
    <div class="flex flex-col">
      <div class="flex items-center">
        <v-icon name="hi-solid-users" class="w-6 h-6 mr-2" />
        <h1 class="font-semibold text-xl">Internal Users</h1>
      </div>
      <p class="text-gray-500 mt-1">
        Manage your employees and their accounts here
      </p>
    </div>
    <Button
      icon="pi pi-plus"
      v-tooltip="{ value: 'Add New User' }"
      rounded
      aria-label="Filter"
      class="text-white !bg-gray-600 !hover:bg-gray-900"
    />
  </main>
</template>
