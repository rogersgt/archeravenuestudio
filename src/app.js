import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import attachFastClick from 'fastclick';
import ElementUI from 'element-ui';
import $ from 'jquery';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(() => { window.$ = window.jQuery = $; });

const routes = [
  {
    path: '/',
    component: require('./components/home/home.vue'),
    name: 'home'
   },
  {
    path: '/gallery',
    component: require('./components/gallery/gallery.vue'),
    name: 'gallery'
  },
  {
    path: '/engineers',
    component: require('./components/engineers/engineers.vue'),
    name: 'engineers'
  },
  {
    path: '/blog',
    component: require('./components/blog/blog.vue'),
    name: 'blog'
  },
  {
    path: '/contact',
    component: require('./components/contact/contact.vue'),
    name: 'contact'
  }
];


const router = new VueRouter({
  routes,
  history: true
});

// router.push('/');

// router.beforeEach(() => {
//   window.scrollTo(0, 0)
// });

const app = new Vue({
  router
}).$mount('#app');

attachFastClick(document.body);
