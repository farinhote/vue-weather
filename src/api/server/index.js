import axios from 'axios';

const API_URL = 'https://api.openweathermap.org/data/2.5/';
const WEATHER = 'weather';
const ONECALL = 'onecall';
const TIMEMACHINE = 'timemachine';

axios.defaults.params = {};
axios.defaults.params['APPID'] = process.env.VUE_APP_API_KEY;

function get(url, params) {
  return axios
    .get(url, { params })
    .then((response) => response.data);
}

export default {
  getWeather(params) {
    return get(`${API_URL}${WEATHER}`, params);
  },
  getOneCallWeather(params) {
    return get(`${API_URL}${ONECALL}`, params);
  },
  getHistoricalOneCallWeather(params) {
    return get(`${API_URL}${ONECALL}/${TIMEMACHINE}`, params);
  },
};
