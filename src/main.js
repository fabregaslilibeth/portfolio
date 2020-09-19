import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import routes from "./routes";

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
