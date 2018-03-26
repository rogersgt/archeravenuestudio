import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// import attachFastClick from 'fastclick';
import ElementUI from 'element-ui';
import $ from 'jquery';

// require(`${__dirname}/assets/logo.png`);
import home from './components/home/home.vue';
import gallery from './components/gallery/gallery.vue';
import engineers from './components/engineers/engineers.vue';
import blog from './components/blog/blog.vue';
import contact from './components/contact/contact.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(() => { window.$ = window.jQuery = $; });

Vue.http.headers.common['x-api-key'] = process.env.API_KEY;

const routes = [
  {
    path: '/',
    component: home,
    name: 'home'
   },
  {
    path: '/gallery',
    component: gallery,
    name: 'gallery'
  },
  {
    path: '/engineers',
    component: engineers,
    name: 'engineers'
  },
  {
    path: '/blog',
    component: blog,
    name: 'blog'
  },
  {
    path: '/contact',
    component: contact,
    name: 'contact'
  }
];


const router = new VueRouter({
  routes,
  history: true
});

// router.push('/');

const app = new Vue({
  router
}).$mount('#app');

// attachFastClick(document.body);
