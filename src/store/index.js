import Vue from 'vue'
import Vuex from 'vuex'
import client from 'api-client';
import { weatherStateHelper } from "@/helpers/weatherStateHelper.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    forecast: [],
    history: [],
    main: {},
    secondary: {},
    look: {},
    filter: ""
  },
  mutations: {
    setMainWeather(state, [name, main, weather]) {
      const { main: currentState, description, icon } = weather;
      const {
        temp,
        feels_like: feelsLike
      } = main;

      state.main = {
        name,
        currentState,
        description,
        icon,
        temp,
        feelsLike
      };
      state.look = weatherStateHelper[icon];
    },
    setSecondaryWeather(state, { main, sys, wind }) {
      const { humidity, pressure } = main;
      const { sunrise, sunset } = sys;

      state.secondary = {
        humidity,
        pressure,
        sunrise,
        sunset,
        wind
      };
    },
    setForecast(state, forecast) {
      state.forecast = forecast;
    },
    setHistoryDay(state, [daily, index]) {
      state.history[index] = daily;
    },
    setFilter(state, filter) {
      state.filter = filter;
    },
    setCurrentMinMax(state, currentDay) {
      const { min: tempMin, max: tempMax } = currentDay;

      state.main = { ...state.main, tempMin, tempMax };
    },
    resetAll(state) {
      state.main = {};
      state.look = {};
      state.secondary = {};
      state.forecast = [];
      state.history = [];
    }
  },
  actions: {
    getWeather({ commit }, coord) {
      commit("resetAll");
      client.getWeather(coord)
        .then((response) => {
          const {
            main,
            name,
            coord,
            weather,
            sys,
            wind
          } = response;
          // Store actions are async by default
          const { lat, lon } = coord;
          this.dispatch('getForecast', { lat, lon });
          this.dispatch('getHistorical', { lat, lon });

          commit("setMainWeather", [name, main, weather[0]]);
          commit("setSecondaryWeather", { main, sys, wind });
        })
        .catch((error) => {
          console.log(error.statusText);
        });
    },
    getForecast({ commit }, coord) {
      client.getOneCallWeather(coord)
        .then((response) => {
          const currentDay = response.daily.shift();

          commit("setForecast", response.daily);
          commit("setCurrentMinMax", currentDay.temp);
        })
        .catch((error) => {
          console.log(error.statusText);
        });
    },
    getHistorical({ commit }, coord) {
      for (let index = 0; index < 5; index++) {
        const date = new Date();
        date.setDate(date.getDate() - index - 1);

        const timestamp = Math.floor(date.getTime() / 1000);

        client.getHistoricalOneCallWeather({ ...coord, dt: timestamp })
          .then((response) => {
            commit("setHistoryDay", [response.current, index]);
          })
          .catch((error) => {
            console.log(error.statusText);
          });
      }
    },
  },
  modules: {
  }
})