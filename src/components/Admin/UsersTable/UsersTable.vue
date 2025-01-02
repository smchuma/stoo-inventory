<script setup>
import { ref, onMounted } from "vue";
import { FilterMatchMode } from "@primevue/core/api";
import { CustomerService } from "@/service/CustomerService";
import {
  Column,
  DataTable,
  IconField,
  InputIcon,
  InputText,
  Select,
  Tag,
} from "primevue";

defineProps({
  users: {
    type: Array,
    required: true,
  },
});

const customers = ref();

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  first_name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  last_name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  phone_number: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  role: { value: null, matchMode: FilterMatchMode.EQUALS },
});

const roles = ref(["admin", "salesperson"]);
const loading = ref(true);

onMounted(() => {
  CustomerService.getCustomersMedium().then((data) => {
    customers.value = getCustomers(data);
    loading.value = false;
  });
});

const getCustomers = (data) => {
  return [...(data || [])].map((d) => {
    d.date = new Date(d.date);

    return d;
  });
};
const getSeverity = (role) => {
  switch (role) {
    case "salesperson":
      return "info";

    case "admin":
      return "danger";
  }
};
</script>

<template>
  <div class="overflow-x-auto">
    <DataTable
      v-model:filters="filters"
      :value="customers"
      paginator
      :rows="10"
      dataKey="id"
      filterDisplay="row"
      :loading="loading"
      :globalFilterFields="['first_name', 'last_name', 'phone_number', 'role']"
      class="w-full h- border-r-2 border-l-2 border-gray-200"
    >
      <template #header>
        <div class="flex justify-end">
          <IconField>
            <InputIcon>
              <i class="pi pi-search" />
            </InputIcon>
            <InputText
              v-model="filters['global'].value"
              placeholder="Keyword Search"
            />
          </IconField>
        </div>
      </template>
      <template #empty> No Users found. </template>
      <template #loading> Loading users data. Please wait. </template>
      <Column field="first_name" header="First Name" style="min-width: 12rem">
        <template #body="{ data }">
          {{ data.first_name }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            type="text"
            @input="filterCallback()"
            placeholder="Search by first name"
          />
        </template>
      </Column>

      <Column field="last_name" header="Last Name" style="min-width: 12rem">
        <template #body="{ data }">
          {{ data.last_name }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            type="text"
            @input="filterCallback()"
            placeholder="Search by last name"
          />
        </template>
      </Column>

      <Column
        field="phone_number"
        header="Phone Number"
        style="min-width: 12rem"
      >
        <template #body="{ data }">
          {{ data.phone_number }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            type="text"
            @input="filterCallback()"
            placeholder="Search by phone name"
          />
        </template>
      </Column>

      <Column
        field="role"
        header="Role"
        :showFilterMenu="false"
        style="min-width: 12rem"
      >
        <template #body="{ data }">
          <Tag :value="data.role" :severity="getSeverity(data.role)" />
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <Select
            v-model="filterModel.value"
            @change="filterCallback()"
            :options="roles"
            placeholder="Select One"
            style="min-width: 12rem"
            :showClear="true"
          >
            <template #option="slotProps">
              <Tag
                :value="slotProps.option"
                :severity="getSeverity(slotProps.option)"
              />
            </template>
          </Select>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
