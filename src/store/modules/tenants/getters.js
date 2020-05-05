const getters = {
    allTenats(state) {
        return state.tenants;
    },
    tenant(state) {
        return state.tenant;
    }
};

export default getters;