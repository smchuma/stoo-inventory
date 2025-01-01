<template>
  <div class="p-2 overflow-x-scroll">
    <DataTable :value="products">
      <Column
        v-for="col in columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
      ></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { Column, DataTable } from "primevue";
import { ref } from "vue";

const products = ref([
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "Moderator",
    status: "Active",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 5,
    name: "Chris Brown",
    email: "chris@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 5,
    name: "Chris Brown",
    email: "chris@example.com",
    role: "User",
    status: "Active",
  },
]);

const columns = [
  { field: "id", header: "ID" },
  { field: "name", header: "Name" },
  { field: "email", header: "Email" },
  { field: "role", header: "Role" },
  { field: "status", header: "Status" },
  { field: "status", header: "Status" },
  { field: "status", header: "Status" },
  { field: "status", header: "Status" },
  { field: "status", header: "Status" },
  { field: "status", header: "Status" },
];
</script>
