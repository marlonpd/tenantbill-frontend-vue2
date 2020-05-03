import Vue from "vue";
import Router from "vue-router";
import Login from "../views/Login";
import Register from "../views/Register";
import Dashboard from "../views/Dashboard";
import Profile from "../views/Profile";
import PowerRates from "../views/PowerRates";
import MeterReading from "../views/MeterReading";

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
        component: Dashboard
    },
    {
        name: "profile",
        path: "/profile",
        component: Profile
    },
    {
        name: "power-rates",
        path: "/power-rates",
        component: PowerRates
    },
    {
        name: "meter.reading",
        path: "/meter-reading/:tenantId",
        component: MeterReading
    }

  ]
});
