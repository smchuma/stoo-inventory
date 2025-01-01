<script setup>
import { useAuthStore } from "@/stores/auth";
import { onMounted, ref } from "vue";
import Avatar from "primevue/avatar";
import { Menu } from "primevue";

defineProps({
  onToggleSidebar: {
    type: Function,
    required: true,
  },
});

const authStore = useAuthStore();
const menu = ref(null);

onMounted(async () => {
  if (!authStore.authUser && authStore.token) {
    try {
      await authStore.getUser();
    } catch (error) {
      console.log("Error fetching user", error);
      // authStore.logout()
    }
  }
});

const getInitials = (user) => {
  if (user) {
    const firstLetter = user.first_name
      ? user?.first_name.charAt(0).toUpperCase()
      : "";
    const lastLetter = user.last_name
      ? user?.last_name.charAt(0).toUpperCase()
      : "";
    return firstLetter + lastLetter;
  }
};

const menuItems = [
  {
    label: "My Account",
    icon: "pi pi-user",
    command: () => console.log("My Account clicked"),
  },
  {
    label: "Settings",
    icon: "pi pi-cog",
    command: () => console.log("Settings clicked"),
  },
  {
    label: "Logout",
    icon: "pi pi-sign-out",
    command: () => {
      authStore.logout();
    },
  },
];
</script>

<template>
  <div class="flex justify-between">
    <div class="flex gap-x-5">
      <button class="block lg:hidden" @click="onToggleSidebar">
        <v-icon name="gi-hamburger-menu" />
      </button>
      <h1>ss</h1>
    </div>
    <Menu
      ref="menu"
      :model="menuItems"
      popup
      class="bg-gray-1"
      id="overlay_menu"
    />
    <Avatar
      :label="getInitials(authStore.authUser)"
      class="mr-2 bg-gray-200 border-5 cursor-pointer"
      shape="circle"
      @click="menu.toggle($event)"
    />
  </div>
</template>
