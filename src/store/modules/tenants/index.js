import {
    TenantsService,
} from "@/apis/services/tenants";
import ApiService from "@/apis/api";

import {
    FETCH_TENANTS
} from "@/store/actions.type";

import { SET_TENANTS } from "@/store/mutations.type";
  
const state = {
    tenants: {}
};

const getters = {
    allTenats(state) {
        return state.tenants;
    }
};

const actions = {
    async [FETCH_TENANTS](context) {
        ApiService.setHeader();
        const { data } = await TenantsService.getAll();
        context.commit(SET_TENANTS, data.tenants);
        return data;
    }
};

const mutations = {
    [SET_TENANTS](state, tenants) {
        state.tenants = tenants;
    },
};

export default {
    state,
    actions,
    mutations,
    getters
};
