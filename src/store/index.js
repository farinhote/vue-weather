/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'
import client from 'api-client';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    main: {},
    secondary: {},
  },
  mutations: {
    setMainWeather(state, [name, main, weather]) {
      const { main: currentState, description } = weather;
      const {
        humidity,
        pressure,
        temp,
        temp_max: tempMax,
        temp_min: tempMin,
        feels_like: feelsLike
      } = main;

      state.main = {
        name,
        currentState,
        description,
        humidity,
        pressure,
        temp,
        tempMax,
        tempMin,
        feelsLike
      };
    },
    setSecondaryWeather(state, { main, sys, wind }) {
      const { humidity, pressure } = main;
      const { sunrise, sunset } = sys;
      const { speed: windSpeed } = wind;

      state.secondary = {
        humidity,
        pressure,
        sunrise,
        sunset,
        windSpeed
      };
    }
  },
  actions: {
    getWeatherByCoords({ commit }, coord) {
      client.getWeather(coord)
        .then((response) => {
          const {
            main,
            name,
            coord,
            weather,
            sys,
            visibility,
            wind,
            rain
          } = response;
          // Store actions are async by default
          const { lat, lon } = coord;
          this.dispatch('getWeatherOneCall', { lat, lon });

          commit("setMainWeather", [name, main, weather[0]]);
          commit("setSecondaryWeather", { main, sys, wind });
        })
        .catch((error) => {
          console.log(error.statusText);
        });
    },
    getWeatherOneCall({ commit }, coord) {
      return client.getOneCallWeather(coord).then((response) => {
        console.log(response);
      })
        .catch((error) => {
          console.log(error.statusText);
        });
    },
  },
  modules: {
  }
})
