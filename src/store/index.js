import Vue from 'vue'
import Vuex from 'vuex'
import client from 'api-client';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    forecast: [],
    history: [],
    main: {},
    secondary: {}
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
    },
    setForecast(state, forecast) {
      state.forecast = forecast
    },
    setHistoryDay(state, [daily, index]) {
      state.history[index] = daily;
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
          commit("setForecast", response.daily);
        })
        .catch((error) => {
          console.log(error.statusText);
        });
    },
    getHistorical({ commit }, coord) {
      for (let index = 0; index < 5; index++) {
        const date = new Date();
        date.setDate(date.getDate() - index - 1)

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
