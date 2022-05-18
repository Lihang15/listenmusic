import axios from 'axios';
const PLAYER_URL = '/api/album/channel/music';

//获取分类数据
const getMusicData = (path: any) => {
  return axios.get(PLAYER_URL + '/' + path);
};

export {getMusicData};
