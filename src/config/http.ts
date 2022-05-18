import axios from 'axios';
import Config from 'react-native-config';
axios.defaults.baseURL = Config.API_URL;

//添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    config.headers = {
      token: 'test-token-123456789',
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

//添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);
