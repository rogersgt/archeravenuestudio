import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import attachFastClick from 'fastclick';
import ElementUI from 'element-ui';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);

const routes = [
  {
    path: '/',
    component: require('./home/home.vue'),
    name: 'home'
   },
  {
    path: '/gallery',
    component: require('./gallery/gallery.vue'),
    name: 'gallery'
  },
  {
    path: '/engineers',
    component: require('./engineers/engineers.vue'),
    name: 'engineers'
  },
  {
    path: '/contact',
    component: require('./contact/contact.vue'),
    name: 'contact'
  }
];


const router = new VueRouter({
  routes,
  history: true
});

router.push('/');

// router.beforeEach(() => {
//   window.scrollTo(0, 0)
// });

const app = new Vue({
  router
}).$mount('#app');

attachFastClick(document.body);
