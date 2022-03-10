const goods = {
  state: {
    goods: [],
  },
  getters: {
    getProductById: state => id => state.goods.find(item => item.id === +id),
  },
  actions: {
    setGoodsData({ commit }, data) {
      commit('SET_GOODS', data);
    },
  },
  mutations: {
    SET_GOODS: (state, goods) => {
      state.goods = goods;
    },
  },
};

export default goods;
