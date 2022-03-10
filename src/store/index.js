import Vue from 'vue';
import Vuex from 'vuex';
import links from './links';
import bestsellers from './bestsellers';
import coffee from './coffee';
import goods from './goods';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    item: null,
  },
  actions: {
    setItem({ commit }, data) {
      commit('SET_ITEM', data);
    },
  },
  mutations: {
    SET_ITEM: (state, data) => {
      state.item = data;
    },
  },
  modules: {
    links,
    bestsellers,
    coffee,
    goods,
  },
});

export default store;
