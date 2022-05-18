import {Effect, Model, SubscriptionsMapObject} from 'dva-core-ts';
import {Reducer} from 'redux';
import {goBack} from '../utils';
import {Alert} from 'react-native';
import storage, {load} from '@/config/storage';
import {getLoginData} from '../server/user';

export interface IUser {
  name: string;
  avatar: string;
}

export interface UserModelState {
  user?: IUser;
}

interface UserModel extends Model {
  namespace: string;
  state: UserModelState;
  reducers: {
    setState: Reducer<UserModelState>;
  };
  effects: {
    login: Effect;
    logout: Effect;
    loadStorage: Effect;
  };
  subscriptions: SubscriptionsMapObject;
}

const initialState: UserModelState = {
  user: undefined,
};
const userModel: UserModel = {
  namespace: 'user',
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
    *login({payload}, {call, put}) {
      const {data, code, message} = yield call(getLoginData, payload);
      if (code === 0) {
        yield put({
          type: 'setState',
          payload: {user: data},
        });
        storage.save({
          key: 'user',
          data,
        });
        goBack();
      } else {
        console.log(message);
        Alert.alert('这都输不对,回家多读读书吧,别登了');
      }
    },
    *logout({_}, {put}) {
      try {
        yield put({
          type: 'setState',
          payload: {
            user: undefined,
          },
        });
        storage.save({
          key: 'user',
          data: null,
        });
      } catch (e) {
        console.log('退出失败');
      }
    },
    *loadStorage({_}, {call, put}) {
      try {
        const user = yield call(load, {key: 'user'});
        if (user) {
          yield put({
            type: 'setState',
            payload: {
              user,
            },
          });
        }
      } catch (error) {
        console.log('保存用户信息错误', error);
      }
    },
  },
  subscriptions: {
    setup({dispatch}) {
      dispatch({
        type: 'loadStorage',
      });
    },
  },
};

export default userModel;
