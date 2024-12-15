import Vue from 'vue';

import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import {
  GC_USER_NAME, GC_PICTURE, GC_USER_EMAIL,
} from './constants/settings';
import './registerServiceWorker';

Vue.config.productionTip = false;

const name = localStorage.getItem(GC_USER_NAME);
const email = localStorage.getItem(GC_USER_EMAIL);
const picture = localStorage.getItem(GC_PICTURE);

new Vue({
  router,
  data: {
    name,
    email,
    picture,
  },
  render: (h) => h(App),
}).$mount('#app');
