
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../src/components/Home.vue")
    },
    {
      path: "/bookDetails/:bookDetails",
      name: "BookDetails",
      component: () => import("../src/components/BookDetails.vue"),
      props: true
    },
    {
      path: "/randomPage",
      name: "RandomPage",
      component: () => import("../src/components/Random.vue"),
      props: true
    }
  ]
});
