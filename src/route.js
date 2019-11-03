import Vue from "vue";

import Router from "vue-router";
import axios from "axios";

// views for render
import About from "./views/About";
import Home from "./views/Home";

Vue.use(Router, axios);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/about",
      component: About
    }
  ]
});
