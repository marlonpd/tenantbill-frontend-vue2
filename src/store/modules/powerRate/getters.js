const getters ={
    allPowerRates(state) {
        return state.powerRates;
    },
    powerRate(state) {
        return state.rate;
    }
};

export default getters;