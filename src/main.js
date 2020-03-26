import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store";
import FlashMessage from '@smartweb/vue-flash-message'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/app.css'

library.add(faUserSecret)
library.add(faUser)
library.add(faLock)
Vue.use(FlashMessage);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

router.push({
  name: 'login'
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
