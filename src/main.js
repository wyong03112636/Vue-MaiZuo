import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'assets/reset.css';
import 'assets/animation.css';
// import 'assets/fade.css'
Vue.config.productionTip = false;
console.log(process.env);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
