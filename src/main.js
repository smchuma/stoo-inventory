import "./assets/main.css";
import "./axios";
import "primeicons/primeicons.css";

import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";

import App from "./App.vue";
import router from "./router";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  GiHamburgerMenu,
  HiSolidUsers,
  MdCategoryRound,
  MdProductionquantitylimits,
  FaUsers,
} from "oh-vue-icons/icons";
import { useAuthStore } from "./stores/auth";

addIcons(
  GiHamburgerMenu,
  HiSolidUsers,
  MdCategoryRound,
  MdProductionquantitylimits,
  FaUsers
);
const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia);
app.use(router);

app.use(PrimeVue, {
  theme: "none",
});
app.component("v-icon", OhVueIcon);

// const authStore = useAuthStore();
// authStore.getUser();

app.mount("#app");
