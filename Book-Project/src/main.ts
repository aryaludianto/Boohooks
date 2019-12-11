import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueRouter);
// Vue.prototype.$log = console.log.bind(console);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
