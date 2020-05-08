import ApiService from "@/apis/api";
import { MeterReadingService } from "@/apis/services/meterReading";
import { FETCH_METER_READINGS, ADD_NEW_METER_READING } from "@/store/actions.type";
import { SET_METER_READINGS, APPEND_METER_READING } from "@/store/mutations.type";

export default {
    async [FETCH_METER_READINGS](context, tenantId) {
        ApiService.setHeader();
        const { data } = await MeterReadingService.getAll(tenantId);
        context.commit(SET_METER_READINGS, data.meterReadings);
        return data;
    }, 
    async [ADD_NEW_METER_READING](context,  name ) {
        ApiService.setHeader();
        const { data } = await MeterReadingService.create(name);
        context.commit(APPEND_METER_READING, data.meterReading);
        return data;
    }
}