// Plugins
import pinia from "@/stores";
import router from "@/router";
import vuetify from "./vuetify";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import VueCreditCardValidation from "vue-credit-card-validation";

export function registerPlugins(app) {
  app.use(router).use(pinia).use(vuetify).use(VueCreditCardValidation);
  app.component("VueDatePicker", VueDatePicker);
}
