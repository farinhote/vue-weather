import Vue from 'vue'
import Vuex from 'vuex'
import client from 'api-client';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    // eslint-disable-next-line no-unused-vars
    getWeatherByCoords({ commit }, coords) {
      client.getWeather(coords);
    },
  },
  actions: {
  },
  modules: {
  }
})
