<script setup>
import Header from "@/components/Admin/Header/Header.vue";
import UsersTable from "@/components/Admin/Users/UsersTable.vue";
import { useUser } from "@/composables/useUser";

const { users, isLoading, isError } = useUser();
</script>

<template>
  <Header />
  <p v-if="isLoading">Loading...</p>
  <p v-else-if="isError">Error fetching data</p>
  <UsersTable v-else="!isLoading" :users="users" />
</template>
