<script setup>
import { ref, computed } from "vue";
import Avatar from "primevue/avatar";
import { Menu } from "primevue";
import { useRoute } from "vue-router";
import axiosClient from "@/axios";
import router from "@/router";
import useAuth from "@/composables/useAuth";

defineProps({
  onToggleSidebar: {
    type: Function,
    required: true,
  },
});

const menu = ref(null);
const route = useRoute();

const currentRouteName = computed(() => route.name || "Unknown Route");

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

const { logout } = useAuth();
</script>

<template>
  <div class="flex justify-between">
    <div class="flex gap-x-5">
      <button class="block lg:hidden" @click="onToggleSidebar">
        <v-icon name="gi-hamburger-menu" />
      </button>
      <h1 class="font-semibold">{{ currentRouteName }}</h1>
    </div>

    <!-- <div class="flex items-center gap-x-5">
      <v-icon name="io-notifications-outline" />

      <Menu
        ref="menu"
        :model="menuItems"
        popup
        class="bg-gray-1"
        id="overlay_menu"
      />
      <Avatar
        :label="getInitials(authStore.authUser)"
        class="bg-gray-200 border-5 cursor-pointer"
        shape="circle"
        @click="menu.toggle($event)"
      />
    </div> -->
    <button @click="logout">logout</button>
  </div>
</template>
