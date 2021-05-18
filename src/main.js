import { createApp } from "vue";

import App from "./App.vue";
import primeVueInit from "@/helper/prime.helper.js";
import router from "./router";
// import { auth } from "@/firebase/config";
import store from "./store";
import "@/assets/global.css";
// import { mapMutations } from "vuex";
let app = createApp(App)
  .use(router)
  .use(store);

// app = new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// });
primeVueInit(app);
app.config.productionTip = false;

app.mount("#app");
