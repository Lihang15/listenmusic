import axios from 'axios';
const USER_LOGIN = '/api/user/login';

//获取分类数据
const getLoginData = (param: any) => {
  return axios.post(USER_LOGIN, param);
};

export {getLoginData};
