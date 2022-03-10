const coffee = {
  state: {
    coffee: [],
    searchValue: '',
    sortValue: '',
  },
  getters: {
    getCoffeeById: state => id => state.coffee.find(item => item.id === +id),
    getCoffee: state =>
      state.coffee
        .filter(item =>
          item.name.toLowerCase().includes(state.searchValue.toLowerCase())
        )
        .filter(item =>
          item.country.toLowerCase().includes(state.sortValue.toLowerCase())
        ),
  },
  actions: {
    setCoffeeData({ commit }, data) {
      commit('SET_COFFEE', data);
    },
    setSearchValue({ commit }, searchValue) {
      commit('SET_SEARCH_VALUE', searchValue);
    },
    setSortValue({ commit }, value) {
      commit('SET_SORT_VALUE', value);
    },
  },
  mutations: {
    SET_COFFEE: (state, coffee) => {
      state.coffee = coffee;
    },
    SET_SEARCH_VALUE: (state, value) => {
      state.searchValue = value;
    },
    SET_SORT_VALUE: (state, value) => {
      state.sortValue = value;
    },
  },
};

export default coffee;
