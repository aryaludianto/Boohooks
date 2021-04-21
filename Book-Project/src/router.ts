import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../src/components/Home.vue";
import BookDetails from "../src/components/BookDetails.vue";
import Random from "../src/components/Random.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/bookDetails/:bookDetails",
    name: "BookDetails",
    component: BookDetails,
    props: true
  },
  {
    path: "/randomPage",
    name: "RandomPage",
    component: Random,
    props: true
  }
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
