import axios from 'axios';
import {API_URL, API_KEY} from '@env';

const api = axios.create({
  baseURL: API_URL,
  params: {appid: API_KEY, units: 'metric'},
});

export default api;
