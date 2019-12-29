<template>
  <div class="footer">
    <h2 class="title">Boohooks</h2>
    <div class="sitemap">
      <h3>Site Map</h3>
      <ul class="site" v-for="value in siteMap" :key="value">
        <li class="site-detail" v-if="value.slice(-2) != 'ls'">
          <a
            :href="value"
            class="link-detail"
          >{{ value.slice(-2) == "//" ? "Home Page" : "Random Page" }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { router } from "../router";

export default Vue.extend({
  name: "Footer",
  props: {},
  data() {
    return {
      siteMap: null
    };
  },
  created() {
    this.siteMap = this.getRoutesSitemap();
  },
  methods: {
    getRoutesList(routes, pre) {
      return routes.reduce((array, route) => {
        const path = `${pre}${route.path}`;
        if (route.path !== "*") {
          array.push(path);
        }
        if (route.children) {
          array.push(...this.getRoutesList(route.children, `${path}/`));
        }
        return array;
      }, []);
    },
    getRoutesSitemap() {
      const list = this.getRoutesList(
        router.options.routes,
        "https://test-project-arya.web.app/"
      );
      return list;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  margin-left: 2%;
  color: #41b883;
}

.footer {
  margin-bottom: 0;
  width: 100%;
  height: 200px;
  background-color: white;
  box-shadow: 8px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: row;
  align-items: center;
}

.site {
  height: 100%;
  text-align: left;
  font-size: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 0;
}
.site-detail {
  margin: auto 20% auto;
  font-size: 80%;
  width: 100%;
}

a.link-detail {
  text-decoration: none;
  color: #41b883;
  transition: margin 0.5s;
}

a.link-detail:hover {
  margin-left: 10px;
}

.sitemap {
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 100%;
  /* flex-grow: 1; */
  margin: auto;
}

.sitemap h3 {
  font-size: 100%;
  margin: auto;
}

.site {
  text-align: left;
  font-size: 100%;
  margin: auto;
}
</style>
