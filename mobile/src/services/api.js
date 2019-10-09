import axios from 'axios';

const api = axios.create({
  baseURL: '<URL_EXPO>',
});

export default api;