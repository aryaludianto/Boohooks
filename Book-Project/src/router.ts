import Vue from "vue";
import Router from "vue-router";
import Home from "../src/components/Home.vue";
import BookDetails from "../src/components/BookDetails.vue";
import Random from "../src/components/Random.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/bookDetails/:bookDetails",
      name: "BookDetails",
      // component: () => import("../src/components/BookDetails.vue"),
      component: BookDetails,
      props: true
    },
    {
      path: "/randomPage",
      name: "RandomPage",
      // component: () => import("../src/components/Random.vue"),
      component: Random,
      props: true
    }
  ]
});
