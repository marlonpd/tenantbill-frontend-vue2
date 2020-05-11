import { SET_POWER_RATES, SET_POWER_RATE, APPEND_POWER_RATE } from "@/store/mutations.type";

export default {
    [SET_POWER_RATES](state, rates) {
        state.powerRates = JSON.parse(rates);
    },
    [SET_POWER_RATE](state, rate) {
        state.powerRate = JSON.parse(rate);
    },
    [APPEND_POWER_RATE](state, powerRate) {
        state.powerRates.unshift({"rate": powerRate.rate, "created": powerRate.created.date});
    }
}