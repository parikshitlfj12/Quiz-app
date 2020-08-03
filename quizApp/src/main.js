import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
