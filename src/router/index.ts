import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "home",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/home",
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "/employee",
        name: "employee",
        component: () => import("../views/EmployeeView.vue"),
      },
      {
        path: "/department",
        // name: "department",
        component: () => import("../views/DepartmentView.vue"),
      }
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
