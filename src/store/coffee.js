const coffee = {
  state: {
    coffee: [],
  },
  getters: {
    getCoffeeById: state => id => state.coffee.find(item => item.id === +id),
  },
  actions: {
    setCoffeeData({ commit }, data) {
      commit('SET_COFFEE', data);
    },
  },
  mutations: {
    SET_COFFEE: (state, coffee) => {
      state.coffee = coffee;
    },
  },
};

export default coffee;
