import ApiService from "@/apis/api";
import { PowerRateService } from "@/apis/services/powerRate";
import { FETCH_POWER_RATES, FETCH_POWER_RATE, ADD_NEW_POWER_RATE } from "@/store/actions.type";
import { SET_POWER_RATES, SET_POWER_RATE, APPEND_POWER_RATE } from "@/store/mutations.type";

export default {
    async [FETCH_POWER_RATES](context, tenantId) {
        ApiService.setHeader();
        const { data } = await PowerRateService.getAll(tenantId);
        context.commit(SET_POWER_RATES, data.rates);
        return data;
    }, 
    async [FETCH_POWER_RATE](context, tenantId) {
        ApiService.setHeader();
        const { data }  = await PowerRateService.get(tenantId);
        context.commit(SET_POWER_RATE, data.rate);
        return data;
    }, 
    async [ADD_NEW_POWER_RATE](context,  name ) {
        ApiService.setHeader();
        const { data } = await PowerRateService.create(name);
        context.commit(APPEND_POWER_RATE, data.powerRate);
        return data;
    }, 
}