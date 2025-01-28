import "./assets/main.css";
import "./axios";
import "primeicons/primeicons.css";

import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

import Tooltip from "primevue/tooltip";

import App from "./App.vue";
import router from "./router";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  GiHamburgerMenu,
  HiSolidUsers,
  MdCategoryRound,
  MdProductionquantitylimits,
  FaUsers,
  MdDashboardcustomize,
  IoNotificationsOutline,
} from "oh-vue-icons/icons";

import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";
import axiosClient from "./axios";
import { useAuthStore } from "./store/auth";

addIcons(
  GiHamburgerMenu,
  HiSolidUsers,
  MdCategoryRound,
  MdProductionquantitylimits,
  FaUsers,
  MdDashboardcustomize,
  IoNotificationsOutline
);
const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false || "none",
    },
  },
});

app.directive("tooltip", Tooltip);
app.use(pinia);

const queryClient = new QueryClient();

app.component("v-icon", OhVueIcon);

const authStore = useAuthStore();

async function prefetchUser() {
  try {
    const response = await axiosClient.get("/auth/user");

    if (response.data.user) {
      const user = response.data.user;
      authStore.setAuthenticated(!!user);
    }
  } catch (error) {
    console.log("Failed to fetch the user data", error);
    authStore.setAuthenticated(false);
  }
}

prefetchUser().then(() => {
  app.use(router);
  app.use(VueQueryPlugin, {
    queryClient,
  });
  app.mount("#app");
});
