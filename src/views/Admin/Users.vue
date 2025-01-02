<script setup>
import Header from "@/components/Admin/Header/Header.vue";
import UsersTable from "@/components/Admin/UsersTable/UsersTable.vue";
import { useAuthStore } from "@/stores/auth";
import { onMounted, ref } from "vue";

const { getAllUsers, token } = useAuthStore();

const users = ref(null);

onMounted(async () => {
  if (token) {
    try {
      const data = await getAllUsers();
      users.value = data;
    } catch (error) {
      console.log("Error fetching user", error);
    }
  }
});
</script>

<template>
  <Header />
  <UsersTable :users="users" />
</template>
