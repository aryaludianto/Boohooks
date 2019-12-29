// import Vue from "vue";
// import Router from "vue-router";

// Vue.use(Router);

// export default new Router({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: () => import("../src/components/Home.vue")
//     },
//     {
//       path: "/bookDetails/:bookDetails",
//       name: "BookDetails",
//       component: () => import("../src/components/BookDetails.vue"),
//       props: true
//     },
//     {
//       path: "/randomPage",
//       name: "RandomPage",
//       component: () => import("../src/components/Random.vue"),
//       props: true
//     }
//   ]
// });

//this is second vue router

// import Vue from "vue";
// Vue.use(Router);
// import VueRouter from "vue-router";
// export const router: VueRouter = new VueRouter({
//   // mode: "history",
  // base: process.env.BASE_URL,
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: () => import("../src/components/Home.vue")
//     },
//     {
//       path: "/bookDetails/:bookDetails",
//       name: "BookDetails",
//       component: () => import("../src/components/BookDetails.vue"),
//       props: true
//     },
//     {
//       path: "/randomPage",
//       name: "RandomPage",
//       component: () => import("../src/components/Random.vue"),
//       props: true
//     }
//   ]
// });




import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const router =  new Router({
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



function getRoutesList(routes, pre) {
  return routes.reduce((array, route) => {
    const path = `${pre}${route.path}`;

    if (route.path !== '*') {
      array.push(path);
    }

    if (route.children) {
      array.push(...getRoutesList(route.children, `${path}/`));
    }

    return array;
  }, []);
}

console.log(getRoutesList(router.options.routes, 'https://test-project-arya.web.app/'));