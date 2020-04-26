import Vue from "vue";
import Vuex from "vuex";

import * as getters from './getters';

import auth from "./auth";
import tenants from "./modules/tenants";

Vue.use(Vuex);

export default new Vuex.Store({

  getters,
  
  modules: {
    auth,
    tenants
  }
});
