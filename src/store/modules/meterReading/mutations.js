import { SET_METER_READINGS, APPEND_METER_READING } from "@/store/mutations.type";

export default {
    [SET_METER_READINGS](state, meterReadings) {
        state.meterReadings = JSON.parse(meterReadings);
    },
    [APPEND_METER_READING](state, meterReading) {
        state.meterReadings.unshift({"rate": meterReading.rate, "created": meterReading.created.date});
    }
}