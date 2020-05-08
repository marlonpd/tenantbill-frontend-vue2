const getters ={
    allMeterReadings (state) {
        return state.meterReadings;
    },
    ratePerKwh (state) {
        return state.ratePerKwh;
    }
};

export default getters;