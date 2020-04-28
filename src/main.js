import Vue from 'vue';
import App from './App.vue';
import router from './router';
import JwtService from "@/apis/jwt";
import store from "./store";
import FlashMessage from '@smartweb/vue-flash-message'
import ApiService from "@/apis/api";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUser, faLock, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ErrorFilter from "./common/filter/error";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/app.css'

library.add(faUserSecret)
library.add(faUser)
library.add(faLock)
library.add(faSignOutAlt);
Vue.use(FlashMessage);
Vue.filter("error", ErrorFilter);
Vue.component('font-awesome-icon', FontAwesomeIcon)

ApiService.init();
Vue.config.productionTip = false



// Ensure we checked auth before each page load.
router.beforeEach((to, from, next) => {

  console.log('token-' +JwtService.getToken() );
  console.log('to.path-' +to.path );
  console.log('from.path-' +from.path);

  if ( (to.path === '/login' || from.path === 'login') && (JwtService.getToken() !== null) ) {
    console.log('hihihi');
    return next({
      path: '/dashboard',
    }); 
  }

  if ( (to.path === '/dashboard' || from.path === 'dashboard') && (JwtService.getToken() === null) ) {
    console.log('guugugugu');
    return next({
      path: '/login',
    }); 
  }


  if (to.path === '/' ) {
    return next({
      path: '/login',
    }); 
  }
 
  next();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
