import axios from 'axios';
const CLASSIFYF_URL = 'api/v1/classify';

//获取分类数据
const getClassifyData = (param: any) => {
  return axios.get(CLASSIFYF_URL, {params: param});
};

export {getClassifyData};
