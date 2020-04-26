import {
    TenantsService,
} from "@/apis/services/tenants";
import ApiService from "@/apis/api";

import {
    FETCH_TENANTS, GET_IS_CREATE_NEW_TENANT, CREATE_NEW_TENANT
} from "@/store/actions.type";

import { SET_TENANTS, SET_IS_CREATE_NEW_TENANT } from "@/store/mutations.type";
  
const state = {
    tenants: {},
    isCreateNewTenant: false
};

const getters = {
    allTenats(state) {
        return state.tenants;
    },
    isCreateNewTenant(state) {
        return state.isCreateNewTenant;
    },
};

const actions = {
    async [FETCH_TENANTS](context) {
        ApiService.setHeader();
        const { data } = await TenantsService.getAll();
        context.commit(SET_TENANTS, data.tenants);
        return data;
    }, 
    [CREATE_NEW_TENANT](context) {
        context.commit(SET_IS_CREATE_NEW_TENANT);
    },
    [GET_IS_CREATE_NEW_TENANT]() {
        return state.isCreateNewTenant;
    },

};

const mutations = {
    [SET_TENANTS](state, tenants) {
        state.tenants = tenants;
    },
    [SET_IS_CREATE_NEW_TENANT](state) {
        state.isCreateNewTenant = state.isCreateNewTenant ? false : true;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
