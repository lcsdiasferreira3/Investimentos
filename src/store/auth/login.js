import authService from "../../services/auth_service";

export default {
  state: {
    loading: false,
  },
  mutations: {
    loading(state, bool) {
      state.loading = bool;
    },
  },
  actions: {
    login({ commit }, { email, password }) {
      commit("loading", true);
      authService
        .login(email, password)
        .then((data) => {
          commit("loading", false);
          console.log(data);
        })
        .catch((err) => {
          commit("loading", false);
          console.log(err);
        });
    },
  },
};
