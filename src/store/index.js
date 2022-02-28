import Vue from 'vue';
import Vuex from 'vuex';
import links from './links';
import bestsellers from './bestsellers';
import goods from './coffee';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    links,
    bestsellers,
    goods
  },
});

export default store;
