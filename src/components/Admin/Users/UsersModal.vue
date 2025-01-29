<script setup>
import { Button, Dialog, InputText } from "primevue";
import { ref } from "vue";

const visible = ref(false);
</script>
<template>
  <div class="card flex justify-center">
    <Button
      @click="visible = true"
      icon="pi pi-plus"
      v-tooltip="{ value: 'Add New User' }"
      rounded
      aria-label="Filter"
      class="text-white !bg-gray-600 !hover:bg-gray-900"
    />
    <Dialog
      v-model:visible="visible"
      modal
      header="Create New User"
      :style="{ width: '40rem' }"
    >
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="flex flex-col">
          <label for="first_name" class="mb-2">First Name</label>
          <InputText
            placeholder="Enter First Name"
            id="first_name"
            class="placeholder:text-gray-100"
          />
        </div>
        <div class="flex flex-col">
          <label for="first_name" class="mb-2">Last Name</label>
          <InputText
            placeholder="Enter Last Name"
            id="last_name"
            class="placeholder:text-gray-100"
          />
        </div>
        <div class="flex flex-col">
          <label for="email" class="mb-2">Email</label>
          <InputText
            placeholder="Enter Email"
            id="email"
            class="placeholder:text-gray-100"
          />
        </div>
        <div class="flex flex-col">
          <label for="phone_number" class="mb-2">Phone Number</label>
          <InputText
            placeholder="Enter Last Name"
            id="phone_number"
            class="placeholder:text-gray-100"
          />
        </div>
        <div class="flex flex-col">
          <label for="role" class="mb-2">Role</label>
          <InputText
            placeholder="Enter Role"
            id="last_name"
            class="placeholder:text-gray-100"
          />
        </div>
      </div>

      <div class="flex justify-end gap-2">
        <Button
          type="button"
          label="Cancel"
          severity="secondary"
          @click="visible = false"
        ></Button>
        <Button
          type="button"
          label="Create User"
          class="!bg-gray-600 hover:scale-105"
          @click="visible = false"
        ></Button>
      </div>
    </Dialog>
  </div>
</template>
