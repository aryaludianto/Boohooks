import VueRouterSitemap from "vue-router-sitemap";
import path from "path";
// const path = require('path')

import { router } from "./router";
// import App from "./App.vue";


export const sitemapMiddleware = () => {
  return (req, res) => {
    res.set("Content-Type", "application/xml");

    const staticSitemap = path.resolve("dist/static", "sitemap.xml");

    const filterConfig = {
      isValid: false,
      rules: [/\/example-page/, /\*/]
    };

    new VueRouterSitemap(router)
      .filterPaths(filterConfig)
      .build("http://example.com")
      .save(staticSitemap);

    return res.sendFile(staticSitemap);
  };
};

app.get("/sitemap.xml", sitemapMiddleware());
