import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../src/components/Home.vue";
import BookDetails from "../src/components/BookDetails.vue";
import Random from "../src/components/Random.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home,
      name: "home"
    },
    {
      path: "/bookDetails/:bookDetails",
      component: BookDetails,
      name: "BookDetails",
      props: true
    },
    {
      path: "/randomPage",
      name: "RandomPage",
      component: Random,
      props: true
    }
  ]
});
