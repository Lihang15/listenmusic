import axios from 'axios';

const httpGet = (url: string, param: any) => {
  return axios.get(url, param);
};

const httpPost = (url: string, param: any) => {
  return axios.post(url, param);
};

export {httpGet, httpPost};
