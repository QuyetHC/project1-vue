import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import LoginView from "../views/LoginView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/",
    name: "home",
    component: () => import("../components/HomeView.vue"),
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem("username") == null) next({ name: "login" });
      else next();
    },
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
