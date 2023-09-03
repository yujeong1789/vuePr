import { createApp } from "vue";
import mitt from "mitt";
import App from "./App.vue";
import store from "./store";

const app = createApp(App);

app.use(store);
app.provide("$emitter", mitt());

app.mount("#app");
