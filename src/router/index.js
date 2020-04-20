import Vue from "vue";
import Router from "vue-router";
import Login from "../views/Login";
import Register from "../views/Register";
import Dashboard from "../views/Dashboard";

Vue.use(Router);

export default new Router({
  routes: [
    {
        name: "login",
        path: "/login",
        component: Login
    },
    {
        name: "register",
        path: "/register",
        component: Register
    },
    {
        name: "dashboard",
        path: "/dashboard",
        component: Dashboard,
        meta: {
          requiresAuth: true
        }
    }

  ]
});
