<script setup>
import UsersModal from "../Users/UsersModal.vue";
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
    <UsersModal />
  </main>
</template>
