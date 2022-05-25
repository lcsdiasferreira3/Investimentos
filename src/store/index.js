import Vue from "vue";
import Vuex from "vuex";
import login from "./auth/login";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
  },
});
