import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { createVuestic } from "vuestic-ui";

const pinia = createPinia();

const app = createApp(App);
app.use(createVuestic());
app.use(pinia);
app.use(router);
app.mount("#app");
