import './assets/main.css'
import "flowbite";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from "aos";
import "aos/dist/aos.css";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Rating from "primevue/rating";
import Dialog from "primevue/dialog";

import ScrollPanel from "primevue/scrollpanel";

AOS.init();

const app = createApp(App)
app.component("Button", Button);
app.component('Rating', Rating);
app.component('Dialog', Dialog);
app.component('ScrollPanel', ScrollPanel);

app.use(router)
app.use(PrimeVue, {
  unstyled: true,
});

app.mount('#app')
