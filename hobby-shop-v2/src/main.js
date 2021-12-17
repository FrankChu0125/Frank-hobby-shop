import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTypedJs from 'vue-typed-js';
// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap';

Vue.config.productionTip = false
Vue.use(VueTypedJs);

library.add(fab, far, fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
