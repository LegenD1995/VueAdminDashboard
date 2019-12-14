import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

// Add Jquery Globally
const $ = require('jquery');
require('jquery-confirm');
window.$ = $;

// Plugins
import VueHead from "vue-head";
import VueSession from "vue-session";
Vue.use(VueHead, VueSession);

// Vuesax
import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css' //Vuesax styles
import Vuesax from 'vuesax';
Vue.use(Vuesax, {
  rtl: true,
  theme:{
    colors:{
      primary:'#537a9a',
      success:'#53998a',
      danger:'rgb(242, 19, 93)',
      warning:'#f5c16e',
      dark:'#456580'
    }
  }
});
import { vsButton, vsSelect, vsPopup } from 'vuesax'
Vue.use(vsButton)
Vue.use(vsSelect)
Vue.use(vsPopup)
Vue.config.productionTip = false;

// Import axios as http
import axios from 'axios';
Vue.prototype.$http = axios

router.beforeEach((to, from, next) => {
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");



/*
* Palette Colors:
* ---------------- Default colors ---------------
* Primary: #537a9a
* Secondary: #dae7f2
* accent: #60b3a1
* orange: #f5c16e
* ---------------- Hovered colors ---------------
* Primary: #456580
* Secondary: #c3cfd9
* accent: #53998a
* orange: #d6a366
* ---------------- Disabled colors ---------------
* Primary: #7aa7cc
* Secondary: #ced4d9
* accent: #98d9cb
* ---------------- Custom Colors ----------------
* white background: #f4f5f9
*/
