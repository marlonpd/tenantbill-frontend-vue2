const getters = {
    allTenats(state) {
        return state.tenants;
    },
    currentTenant(state) {
        return state.tenant;
    }
};

export default getters;