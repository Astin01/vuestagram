import { createStore } from "vuex";
import userData from "./data";

const store = createStore({
  state() {
    return {
      userData: userData,
    };
  },
  mutations: {
    Pluslikes(state, payload) {
      state.userData[payload].likes += 1;
    },
    Minuslikes(state, payload) {
      state.userData[payload].likes -= 1;
    },
  },
});

export default store;
