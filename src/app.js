import Vue from 'vue';
import VueResource from 'vue-resource';
// import attachFastClick from 'fastclick';
import ElementUI from 'element-ui';
import $ from 'jquery';
import FileUpload from 'v-file-upload';
import VModal from 'vue-js-modal';

// require(`${__dirname}/assets/logo.png`);

// router
import router from './router';

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

new Vue({
  router
}).$mount('#app');

// attachFastClick(document.body);
