import axios from 'axios';
const ALBUM_URL = '/api/album/channel';

//获取专辑全部音乐列表
const getAlbumData = (path: string) => {
  return axios.get(ALBUM_URL + '/' + path);
};

export {getAlbumData};
