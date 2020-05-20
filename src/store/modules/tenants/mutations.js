import { SET_TENANTS, SET_TENANT, APPEND_TENANT, TENANT_REMOVE } from "@/store/mutations.type";
  
export default {
    [SET_TENANTS](state, tenants) {
        state.tenants = tenants;
    },
    [SET_TENANT](state, tenant) {
        state.tenant = tenant;//{"id": tenant.id , "name": tenant.name , "meterNumber": tenant.meterNumber, "meterInitialReading": tenant.meterInitialReading };
    },
    [TENANT_REMOVE](state, id) {
        state.tenants.filter(function (tenant) { return tenant.id != id});
    },
    [APPEND_TENANT](state, tenant) {
        state.tenants.push({"id": tenant.id , "name": tenant.name , "meterNumber": tenant.meterNumber});
    }
};