import axios from 'axios';
const FOUND_URL = 'api/v1/video/all';

//获取视频数据
const getFoundData = (param: any) => {
  return axios.get(FOUND_URL, {params: param});
};

export {getFoundData};
