import Vue from 'vue';
import App from './App.vue';
import VueFinancialInput from '../packages/index';
Vue.config.productionTip = false;

Vue.use(VueFinancialInput);
new Vue({
  render: (h) => h(App),
}).$mount('#app');
