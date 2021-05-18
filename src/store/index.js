import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    loginUser(state, payload) {
      console.log("PAYLOAD", payload);
      state.user = payload;
    },
  },
  actions: {},
  modules: {},
});
