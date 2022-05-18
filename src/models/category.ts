import {Effect, Model, SubscriptionsMapObject} from 'dva-core-ts';
import {Reducer} from 'redux';
import storage, {load} from '@/config/storage';
import {RootState} from './all-models';

import {getClassifyData} from '../server/category';

export interface ICategory {
  id: string;
  name: string;
  classify?: string;
}

interface CategoryModelState {
  categorys: ICategory[];
  myCategorys: ICategory[];
  isEdit: boolean;
}
interface CategoryModel extends Model {
  namespace: string;
  state: CategoryModelState;
  reducers: {
    setState: Reducer<CategoryModelState>;
  };
  effects: {
    loadData: Effect;
    toggle: Effect;
  };
  subscriptions: SubscriptionsMapObject;
}

const initialState = {
  categorys: [],
  myCategorys: [
    {id: 'tuijian', name: '推荐'},
    {id: 'hot', name: '热门'},
    {id: 'zhibo', name: '直播'},
    {id: 'fm', name: 'FM'},
    {id: 'paihang', name: '排行'},
    {id: 'music', name: '歌单'},
  ],
  isEdit: false,
};
const categoryModel: CategoryModel = {
  namespace: 'category',
  state: initialState,
  reducers: {
    setState(state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    // 程序每次加载 保证state里的myCategorys，categorys为本地存储数据（第一次加载myCategorys为本地初始化数据）
    *loadData(_, {call, put}) {
      const myCategorys = yield call(load, {key: 'myCategorys'});
      const categorys = yield call(load, {key: 'categorys'});
      if (myCategorys) {
        yield put({
          type: 'setState',
          payload: {
            categorys,
            myCategorys,
          },
        });
      } else {
        yield put({
          type: 'setState',
          payload: {
            categorys,
          },
        });
      }
    },
    // 如果点了编辑 编辑状态设为true，把最新的myCategorys设置到仓库和本地存储
    // 如果点了完成 编辑状态为false，把最新的myCategorys设置到仓库
    *toggle({payload}, {put, select}) {
      const c = yield select(({category}: RootState) => category);
      yield put({
        type: 'setState',
        payload: {
          isEdit: !c.isEdit,
          myCategorys: payload.myCategorys,
        },
      });
      if (c.isEdit) {
        storage.save({
          key: 'myCategorys',
          data: payload.myCategorys,
        });
      }
    },
  },
  subscriptions: {
    init({dispatch}) {
      // storage.remove({key: 'myCategorys'});
      // storage.remove({key: 'categorys'});
      dispatch({type: 'loadData'});
    },
    asyncStorage() {
      // 如果取storage中数据 没有相应数据，或数据已过期，
      // 则会调用相应的sync方法，返回最新数据
      storage.sync.categorys = async () => {
        const {data} = await getClassifyData({});
        return data;
      };
      storage.sync.myCategorys = async () => {
        return null;
      };
    },
  },
};

export default categoryModel;
