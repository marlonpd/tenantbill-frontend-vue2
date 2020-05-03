import Vue from "vue";
import Vuex from "vuex";

import * as getters from './getters';

import auth from "./auth";
import tenants from "./modules/tenants";
import powerRate from "./modules/powerRate";
import meterReading from "./modules/meterReading";

Vue.use(Vuex);

export default new Vuex.Store({

  getters,
  
  modules: {
    auth,
    tenants,
    powerRate,
    meterReading
  },

  strict: true,
});
