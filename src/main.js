

var Vue = require('vue');
var VueRouter = require('vue-router');

// var routes = require('./routes.js');

import test from './components/test.vue';

Vue.use(VueRouter);
Vue.config.debug = true;
// Vue.config.delimiters = ['${', '}']; // 把默认的{{ }} 改成ES6的模板字符串 ${ }
Vue.config.devtools = true;

// var App = Vue.extend({});

const Foo = { template: test }

var routes = [
  {
    path: '/',
    component: test
  }
]
var router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app')
// // router.map(require('./routes'));
// router.start(App, '#app');
// router.go({"path":"/"});
