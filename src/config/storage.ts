import AsyncStorage from '@react-native-community/async-storage';
import Storage, {LoadParams} from 'react-native-storage';
const storage = new Storage({
  size: 1000, //最大容量
  storageBackend: AsyncStorage, //数据引擎
  defaultExpires: 1000 * 3600 * 24 * 7, //过期时间
  enableCache: true,
  sync: {}, //处理函数
});
//套一层，避免dva调用this指向错误
export const load = (params: LoadParams) => {
  return storage.load(params);
};

export default storage;
