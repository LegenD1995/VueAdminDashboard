import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
      path: '/',
      component: () => import('./views/dashboard.vue'),
      children: [{
        path: '',
        name: 'home',
        component: () => import('./views/home/home.vue'),
      }, {
        path: '/department/employee',
        name: 'employee',
        component: () => import('./views/department/employee.vue')
      }, {
        path: '/customers',
        name: 'customers',
        component: () => import('./views/customers/customers.vue')
      }, {
        path: '/customers/order',
        name: 'order',
        component: () => import('./views/customers/order.vue')
      }]
    }],

});
