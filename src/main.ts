import { createApp } from "vue";
import App from "./App.vue";
import { setupStore } from "./store";
import { setupRouter } from "./router";
import { registerComponents } from "@/utils/register-components.js";

const app = createApp(App);
setupStore(app);
setupRouter(app);
registerComponents(app);

app.mount("#app");
