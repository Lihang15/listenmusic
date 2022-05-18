import {Effect, Model} from 'dva-core-ts';

import {getFoundData} from '../server/found';
export interface IFound {
  id: string;
  title: string;
  videoUrl: string;
}
interface FoundModel extends Model {
  namespace: string;
  effects: {
    fetchList: Effect;
  };
}

const foundModel: FoundModel = {
  namespace: 'found',
  state: {},
  effects: {
    *fetchList({callback}, {call}) {
      const {data} = yield call(getFoundData, {});
      console.log(data.list);
      if (typeof callback === 'function') {
        callback(data.list);
      }
    },
  },
};

export default foundModel;
