<script setup>
import { computed, defineProps, ref } from "vue";
import { Column, DataTable } from "primevue";

const props = defineProps({
  users: {
    type: Array,
    required: true,
  },
});

const searchQuery = ref("");

const filteredUsers = computed(() => {
  return props.users.filter((user) => {
    return (
      user.first_name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.last_name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.phone_number
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
});
</script>

<template>
  <div class="p-4 bg-white rounded-xl">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search.."
      class="w-1/2 md:w-1/4 p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <DataTable :value="filteredUsers" paginator :rows="10" class="w-full">
      <Column field="first_name" header="First Name" sortable></Column>
      <Column field="last_name" header="Last Name" sortable></Column>
      <Column field="email" header="Email" sortable></Column>
      <Column field="phone_number" header="Phone Number" sortable></Column>
      <Column field="role" header="Role" sortable></Column>
    </DataTable>
  </div>
</template>
