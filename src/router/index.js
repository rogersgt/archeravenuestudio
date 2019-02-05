import Vue from 'vue';
import VueRouter from 'vue-router';

import home from '../components/home/home.vue';
import gallery from '../components/gallery/gallery.vue';
import engineers from '../components/engineers/engineers.vue';
import blog from '../components/blog/blog.vue';
import contact from '../components/contact/contact.vue';
import admin from '../components/admin/admin.vue';
import login from '../components/admin/login.vue';
import editEngineer from '../components/admin/editEngineer.vue';

Vue.use(VueRouter);

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
    path: '/edit-engineer/:lastName/:firstName',
    component: editEngineer,
    name: 'edit-engineer'
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
  const protectedPages = ['admin', 'editEngineer'];

  if (protectedPages.includes(name)) {
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

export default router;
