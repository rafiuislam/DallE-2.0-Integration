import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
// import About from "../views/About.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/create-post",
      name: "CreatePost",
      component: () => import("../views/CreatePost.vue"),
    },
  ],
});

export default router;
