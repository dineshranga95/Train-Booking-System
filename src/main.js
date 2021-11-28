import Vue from 'vue'
import App from './App.vue'
import Router from './router.js'
import VeeValidate from 'vee-validate';
import VueResource from 'vue-resource';

const config = {  
  errorBagName: 'errors', // change if property conflicts
  events: 'input|blur', 
};

Vue.use(VeeValidate, config);
Vue.use(VueResource);
new Vue({
  render: h => h(App),
  router:Router
}).$mount('#app')
