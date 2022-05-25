import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: HomeView,
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/HomePage.vue"),
      },
      {
        path: "/employee",
        name: "employee",
        component: () => import("../views/EmployeeView.vue"),
      },
      {
        path: "/employee/:id",
        name: "Employee",
        component: () => import("../views/DetailEmployee.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
