

var Vue = require('vue');

var routes = require('./routes.js');

var VueRouter = require('vue-router');

import topNav from './components/navigation.vue';

Vue.use(VueRouter);

Vue.config.debug = true;
// Vue.config.delimiters = ['${', '}']; // 把默认的{{ }} 改成ES6的模板字符串 ${ }
Vue.config.devtools = true;

// console.log(routes);
var router = new VueRouter({
  routes
});

const app = new Vue({
  // el: '#body',
  router: router,

  components: {

      'hello': topNav
  }
  // router
}).$mount('#app')
// // router.map(require('./routes'));
// router.start(App, '#app');
// router.go({"path":"/"});
