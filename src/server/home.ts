import axios from 'axios';

const CAROUSEL_URL = '/api/album/carousel';
const RECOMMEND_URL = '/api/album/recommend';
const GUESS_URL = '/api/album/guess';
const CHANNEL_URL = '/api/album/channel';

//轮播图
const getCarouselData = (param: any) => {
  return axios.get(CAROUSEL_URL, {params: param});
};

//推荐
const getRecommendData = (param: any) => {
  return axios.get(RECOMMEND_URL, {params: param});
};

//猜你喜欢
const getGuessData = (param: any) => {
  return axios.get(GUESS_URL, {params: param});
};
//专辑列表
const getChannelData = (param: any) => {
  return axios.get(CHANNEL_URL, {params: param});
};
export {getCarouselData, getRecommendData, getGuessData, getChannelData};
