export const auth = {
    currentUser(state) {
        return state.user;
    },
    isAuthenticated(state) {
        return state.isAuthenticated;
    },
    isSuccessRegistration(state) {
        return state.isSuccessRegistration;
    }
};

export const getTenants = state =>  state.tenants;
