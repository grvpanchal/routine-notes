import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */'./views/About.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */'./views/About.vue'),
    },
    {
      path: '/progress',
      name: 'progress',
      component: () => import(/* webpackChunkName: "about" */'./views/About.vue'),
    },
    {
      path: '/settings',
      name: 'routine',
      component: () => import(/* webpackChunkName: "about" */'./views/About.vue'),
    },
    {
      path: '/goals',
      name: 'goals',
      component: () => import(/* webpackChunkName: "about" */'./views/About.vue'),
    },
  ],
});
