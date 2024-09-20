import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import DataV from '@jiaminghi/data-view'
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/chart-bar.js';
import 'vue-awesome/icons/chart-area.js';
import 'vue-awesome/icons/chart-pie.js';
import 'vue-awesome/icons/chart-line.js';
import 'vue-awesome/icons/align-left.js';
Vue.use(VueAxios, axios)
Vue.use(Antd)
Vue.use(DataV)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
Vue.component('icon', Icon);
Vue.prototype.$apiBaseUrl = 'http://localhost:8081';
// Vue.prototype.$apiBaseUrl = 'http://10.209.0.239:89';
//Vue.prototype.$apiBaseUrl = 'http://106.14.30.10:8081';