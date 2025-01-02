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

app.use(pinia);
app.use(router);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false || "none",
    },
  },
});

app.directive("tooltip", Tooltip);

app.component("v-icon", OhVueIcon);

app.mount("#app");
