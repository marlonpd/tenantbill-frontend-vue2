import ApiService from "@/apis/api";
import JwtService from "@/apis/jwt";
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  UPDATE_USER
} from "./actions.type";
import { SET_AUTH, PURGE_AUTH, SET_ERROR, SET_SUCCESS_REGISTRATION } from "./mutations.type";

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken(),
  isSuccessRegistration: false
};

const getters = {
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

const actions = {
    [LOGIN](context, payload) {
      return new Promise(resolve => {      
        ApiService.post("/api/login",  payload )
          .then(({ data }) => {
            console.log(data);
            context.commit(SET_AUTH, data);
            resolve(data);
          })
          .catch(({ response }) => {
            context.commit(SET_ERROR, [response.data.error]);
          });
      });
    },
    [LOGOUT](context) {
      context.commit(PURGE_AUTH);
    },
    [REGISTER](context, payload) {
      return new Promise(() => {
        ApiService.post("/api/register", payload)
          .then(() => {
            context.commit(SET_ERROR, "");
            context.commit(SET_SUCCESS_REGISTRATION);
          })
          .catch(({ response }) => {
            context.commit(SET_ERROR, response.data.error);
          });
      });
    },
    [CHECK_AUTH](context) {
      if (JwtService.getToken()) {
        ApiService.setHeader();
        /*ApiService.get("user")
          .then(({ data }) => {
            context.commit(SET_AUTH, data.user);
          })
          .catch(({ response }) => {
            context.commit(SET_ERROR, response.data.errors);
          });*/
      } else {
        context.commit(PURGE_AUTH);
      }
    },
    [UPDATE_USER](context, payload) {
      const { email, username, password, image, bio } = payload;
      const user = {
        email,
        username,
        bio,
        image
      };
      if (password) {
        user.password = password;
      }
  
      return ApiService.put("user", user).then(({ data }) => {
        context.commit(SET_AUTH, data.user);
        return data;
      });
    }
  };


const mutations = {
    [SET_ERROR](state, error) {
        state.errors = error;
    },
    [SET_AUTH](state, data) {
        state.isAuthenticated = true;
        state.user = data.user;
        state.errors = {};
        JwtService.saveToken(data.token);
        console.log('tok' + JwtService.getToken());
    },
    [SET_SUCCESS_REGISTRATION](state) {
        state.isSuccessRegistration = true;
    }, 
    [PURGE_AUTH](state) {
        state.isAuthenticated = false;
        state.user = {};
        state.errors = {};
        JwtService.destroyToken();
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
