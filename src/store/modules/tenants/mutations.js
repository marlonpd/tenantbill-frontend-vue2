import { SET_TENANTS, SET_TENANT, APPEND_TENANT } from "@/store/mutations.type";
  
export default {
    [SET_TENANTS](state, tenants) {
        state.tenants = JSON.parse(tenants);
    },
    [SET_TENANT](state, tenant) {
        state.tenant = tenant;//{"id": tenant.id , "name": tenant.name , "meterNumber": tenant.meterNumber, "meterInitialReading": tenant.meterInitialReading };
    },
    [APPEND_TENANT](state, tenant) {
        state.tenants.push({"id": tenant.id , "name": tenant.name , "meterNumber": tenant.meterNumber});
    }
};