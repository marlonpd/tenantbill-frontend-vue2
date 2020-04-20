import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import tenants from "./modules/tenants";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    tenants
  }
});
