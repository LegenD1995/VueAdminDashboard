import Vue from "vue";
import Vuex from "vuex";
import { axios } from './modules/axios';
import { user, website, directoryFile } from './config';
Vue.use(Vuex);

export default new Vuex.Store({
  state: { user, website, directoryFile },
  modules: { axios }
});
