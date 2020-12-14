import axios from 'axios';

const API_URL = 'https://api.openweathermap.org/data/2.5/';
const WEATHER = 'weather';
const ONECALL = 'onecall';

axios.defaults.params = {};
axios.defaults.params['APPID'] = process.env.VUE_APP_API_KEY;

export default {
  getWeather(params) {
    return axios
      .get(`${API_URL}${WEATHER}`, { params })
      .then((response) => response.data);
  },
  getOneCallWeather(params) {
    return axios
      .get(`${API_URL}${ONECALL}`, { params })
      .then((response) => response.data);
  },
};
