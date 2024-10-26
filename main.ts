import { createApp } from "vue";
import App from "./app.vue";
import vuetify from "./plugins/vuetify";
import * as mdijs from "@mdi/js";
import { mdiVuejs } from "mdi-vue/v3.js";


const app = createApp(App);
app.use(vuetify, mdiVuejs, {
    icons: { mdijs }
}).mount("#app")