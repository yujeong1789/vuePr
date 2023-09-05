import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

const app = createApp(App);
app.use(store);

// mitt 라이브러리 설정
import mitt from "mitt";

// script setup 방식에선 this 에 접근할 수 없으므로 provide inject 패턴 tkdyd
app.provide("$emitter", mitt());

/*
app.config.globalProperties.$emitter = mitt();
 */

app.mount("#app");
