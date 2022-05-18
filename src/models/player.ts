import {Effect, EffectsCommandMap, EffectWithType, Model} from 'dva-core-ts';
import {Reducer} from 'redux';
import {
  getCurrentTime,
  getDuration,
  init,
  pause,
  play,
  stop,
} from '@/config/sound';
// import {useSelector} from 'react-redux';
import {RootState} from './all-models';
import {getMusicData} from '../server/player';

interface PlayerModelState {
  id: string;
  soundUrl: string;
  title: string;
  playState: string;
  currentTime: number;
  duration: number;
  previousId: string;
  nextId: string;
  sounds: {id: string; title: string}[];
  thumbnailUrl: string;
}

interface PlayerModel extends Model {
  namespace: string;
  state: PlayerModelState;
  reducers: {
    setState: Reducer<PlayerModelState>;
  };
  effects: {
    fetchShow: Effect;
    play: Effect;
    pause: Effect;
    watcherCurrentTime: EffectWithType;
    previous: Effect;
    next: Effect;
  };
}

const initialState: PlayerModelState = {
  id: '',
  title: '',
  soundUrl: '',
  playState: 'paused',
  currentTime: 0,
  duration: 0,
  previousId: '',
  nextId: '',
  sounds: [],
  thumbnailUrl: '',
};
const delay = (timeout: number) =>
  new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
function* currentTime({call, put}: EffectsCommandMap) {
  while (true) {
    yield call(delay, 1000);
    const currentTime = yield call(getCurrentTime);
    yield put({
      type: 'setState',
      payload: {
        currentTime,
      },
    });
  }
}
const playModel: PlayerModel = {
  namespace: 'player',
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
    *fetchShow({payload}, {call, put}) {
      yield call(stop);
      const {data} = yield call(getMusicData, payload.id.toString());
      console.log(data);
      yield call(init, data.soundUrl);
      yield put({
        type: 'setState',
        payload: {
          id: data.id,
          soundUrl: data.soundUrl,
          duration: getDuration(),
        },
      });
      yield put({
        type: 'play',
      });
    },
    *play({payload}, {call, put}) {
      yield put({
        type: 'setState',
        payload: {
          playState: 'playing',
        },
      });
      try {
        yield call(play);
      } catch (e) {
        console.log('播放音频失败');
      }

      yield put({
        type: 'setState',
        payload: {
          playState: 'paused',
        },
      });
    },
    *pause({payload}, {call, put}) {
      yield call(pause);
      yield put({
        type: 'setState',
        payload: {
          playState: 'paused',
        },
      });
    },
    watcherCurrentTime: [
      function* (sagaEffects) {
        const {call, take, race} = sagaEffects;
        while (true) {
          yield take('play');
          yield race([call(currentTime, sagaEffects), take('pause')]);
        }
      },
      {type: 'watcher'},
    ],
    *previous({payload}, {call, put, select}) {
      // yield call(stop);
      const {id, sounds} = yield select(({player}: RootState) => player);
      const index = sounds.findIndex(item => item.id === id);
      const currentIndex = index - 1;
      const currentItem = sounds[currentIndex];
      const previousItem = sounds[currentIndex - 1];
      yield put({
        type: 'setState',
        payload: {
          id: currentItem.id,
          title: currentItem.title,
          previousId: previousItem ? previousItem.id : '',
          nextId: id,
          playState: 'paused',
        },
      });
      yield put({
        type: 'fetchShow',
        payload: {
          id: currentItem.id,
        },
      });
    },
    *next({payload}, {call, put, select}) {
      // yield call(stop);
      const {id, sounds} = yield select(({player}: RootState) => player);
      const index = sounds.findIndex(item => item.id === id);
      const currentIndex = index + 1;
      const currentItem = sounds[currentIndex];
      const nextItem = sounds[currentIndex + 1];
      yield put({
        type: 'setState',
        payload: {
          id: currentItem.id,
          title: currentItem.title,
          previousId: id,
          nextId: nextItem ? nextItem.id : '',
          playState: 'paused',
        },
      });
      yield put({
        type: 'fetchShow',
        payload: {
          id: currentItem.id,
        },
      });
    },
  },
};

export default playModel;
