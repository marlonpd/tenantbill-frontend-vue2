import ApiService from "@/apis/api";
import { TenantsService } from "@/apis/services/tenants";
import { SET_TENANTS, SET_TENANT, SET_IS_CREATE_NEW_TENANT, APPEND_TENANT, TENANT_REMOVE } from "@/store/mutations.type";
import { FETCH_TENANTS, FETCH_TENANT, CREATE_NEW_TENANT, ADD_NEW_TENANT, DELETE_TENANT } from "@/store/actions.type";

export default {
    async [FETCH_TENANTS](context) {
        ApiService.setHeader();
        const { data } = await TenantsService.getAll();
        context.commit(SET_TENANTS, data.tenants);
        return data;
    }, 
    async [FETCH_TENANT](context, tenantId) {
        ApiService.setHeader();
        const { data } = await TenantsService.get(tenantId);
        context.commit(SET_TENANT, data.tenant);
        return data;
    }, 
    async [DELETE_TENANT](context, tenantId) {
        ApiService.setHeader();
        await TenantsService.destroy(tenantId);
        context.commit(TENANT_REMOVE, tenantId);
    },     
    async [ADD_NEW_TENANT](context,  name ) {
        ApiService.setHeader();
        const { data } = await TenantsService.create(name);
        context.commit(APPEND_TENANT, data.tenant);
        return data;
    }, 

    [CREATE_NEW_TENANT](context) {
        context.commit(SET_IS_CREATE_NEW_TENANT);
    }

};