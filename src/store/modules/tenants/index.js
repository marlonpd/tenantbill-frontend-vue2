import {
    TenantsService,
} from "@/apis/services/tenants";
import ApiService from "@/apis/api";

import {
    FETCH_TENANTS, GET_IS_CREATE_NEW_TENANT, CREATE_NEW_TENANT, ADD_NEW_TENANT
} from "@/store/actions.type";

import { SET_TENANTS, SET_IS_CREATE_NEW_TENANT, APPEND_TENANT } from "@/store/mutations.type";
  
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
        console.log(data.tenants);
        context.commit(SET_TENANTS, data.tenants);
        return data;
    }, 
    async [ADD_NEW_TENANT](context,  name ) {
        ApiService.setHeader();
        const { data } = await TenantsService.create(name);
        context.commit(APPEND_TENANT, data.tenant);
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
        state.tenants = JSON.parse(tenants);
        //state.tenants.push(state.tenants, tenants);
    },
    [APPEND_TENANT](state, tenant) {
        console.log(tenant);
        //state.tenants = [{id:1 , name: 'numbawan'}];
        state.tenants.push({"id": tenant.id , "name": tenant.name});
        //state.tenants = Object.assign({}, tenant);
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
