
var VueRouter = require('vue-router');

var Vue = require('vue');

import test from './components/test.vue';

import foo from './components/foo.vue';

module.exports = [
    {
      path: '/',
      component: test
    },
    {
      path: '/foo',
      component: foo
    }
]
