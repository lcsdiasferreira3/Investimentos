import authService from "../../services/auth_service";

export default {
  state: {
    loading: false,
    data: [],
  },
  mutations: {
    loading(state, bool) {
      state.loading = bool;
    },
    data(state, data) {
      state.data = data;
    },
  },
  actions: {
    login({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        commit("loading", true);
        authService
          .login(email, password)
          .then((data) => {
            resolve(data);
            commit("loading", false);
            console.log(data);
          })
          .catch((err) => {
            reject(err);
            commit("loading", false);
            commit("data", err);
          });
      });
    },
  },
};
