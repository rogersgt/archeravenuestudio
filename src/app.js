import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// import attachFastClick from 'fastclick';
import ElementUI from 'element-ui';
import $ from 'jquery';
import FileUpload from 'v-file-upload';
import VModal from 'vue-js-modal';

// require(`${__dirname}/assets/logo.png`);
import home from './components/home/home.vue';
import gallery from './components/gallery/gallery.vue';
import engineers from './components/engineers/engineers.vue';
import blog from './components/blog/blog.vue';
import contact from './components/contact/contact.vue';
import admin from './components/admin/admin.vue';
import login from './components/admin/login.vue';
import editEngineer from './components/admin/editEngineer.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(() => { window.$ = window.jQuery = $; });
Vue.use(FileUpload);
Vue.use(VModal);

Vue.http.headers.common['x-api-key'] = process.env.API_KEY;

Vue.http.interceptors.push((request, next) => {
  const token = localStorage.getItem(process.env.TOKEN_NAME);
  if (!!token) {
    request.headers.set('Authorization', `Bearer ${token}`);
  }
  request.headers.set('Accept', 'application/json');
  next();
});

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
  },
  {
    path: '/admin',
    component: admin,
    name: 'admin'
  },
  {
    path: '/admin/:lastName',
    component: editEngineer,
    name: 'edit'
  },
  {
    path: '/login',
    component: login,
    name: 'login'
  },
  {
    path: '*',
    redirect: '/'
  }
];


const router = new VueRouter({
  routes,
  ...(process.env.NODE_ENV === 'production') && { mode: 'history' }
});

// router.push('/');

router.beforeEach((to, from, next) => {
  const { name } = to;
  if (name === 'admin') {
    const { TOKEN_NAME = 'token' } = process.env;
    const token = window.localStorage.getItem(TOKEN_NAME);
    if (!token) {
      next({
        name: 'login',
      });
    }
  }
  next();
});

new Vue({
  router
}).$mount('#app');

// attachFastClick(document.body);
