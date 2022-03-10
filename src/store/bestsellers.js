const bestsellers = {
  state: {
    bestsellers: []
  },

  actions: {
    setBestsellersData({ commit }, data) {
      commit('SET_BESTSELLERS', data);
    },
  },
  mutations: {
    SET_BESTSELLERS: (state, coffee) => {
      state.bestsellers = coffee;
    },
  },
};

export default bestsellers;
