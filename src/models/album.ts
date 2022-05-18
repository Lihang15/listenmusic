import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';
import {getAlbumData} from '../server/album';

export interface IProgram {
  id: string;
  title: string;
  playVolume: number;
  duration: string;
  createdAt: string;
}
interface IAuthor {
  name: string;
  avatar: string;
}
interface IAlbumModelState {
  id: string;
  title: string;
  summary: string;
  thumbnailUrl: string;
  instroduction: string;
  author: IAuthor;
  list: IProgram[];
}

interface AlbumModel extends Model {
  namespace: string;
  state: IAlbumModelState;
  reducers: {
    setState: Reducer<IAlbumModelState>;
  };
  effects: {
    fetchAlbum: Effect;
  };
}

const initialState: IAlbumModelState = {
  id: '',
  title: '',
  summary: '',
  thumbnailUrl: '',
  instroduction: '',
  author: {name: '', avatar: ''},
  list: [],
};
const albumModel: AlbumModel = {
  namespace: 'album',
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
    *fetchAlbum({payload}, {call, put}) {
      const {data} = yield call(getAlbumData, payload.id.toString());
      console.log(data);
      yield put({
        type: 'setState',
        payload: data,
      });
    },
  },
};

export default albumModel;
