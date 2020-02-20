import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

router.push({
  name: 'login'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
