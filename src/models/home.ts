import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';
import {RootState} from './all-models';
import {Alert} from 'react-native';
import {
  getCarouselData,
  getRecommendData,
  getGuessData,
  getChannelData,
} from '../server/home';

export interface ICarousel {
  image: string;
  colors: string[];
}
export interface IRecommend {
  id: string;
  image: string;
  title: string;
}
export interface IGuess {
  id: string;
  image: string;
  title: string;
}
export interface IChannel {
  id: string;
  image: string;
  title: string;
  remark: string;
  played: number;
  playing: number;
}
export interface IPagenation {
  pageNo: number;
  pageSize: number;
  count: number;
  hasMore: boolean;
}
interface HomeState {
  carousel: ICarousel[];
  recommend: IRecommend[];
  guess: IGuess[];
  channels: IChannel[];
  pagination: IPagenation;
  activeCarouselIndex: number;
  gradientVisible: boolean;
}
interface HomeModel extends Model {
  namespace: string;
  state: HomeState;
  reducers: {
    setState: Reducer<HomeState>;
  };
  effects: {
    fetchCarousel: Effect;
    fetchRecommend: Effect;
    fetchGuess: Effect;
    fetchChannels: Effect;
  };
}

const initialState = {
  carousel: [],
  recommend: [],
  guess: [],
  channels: [],
  pagination: {
    pageNo: 1,
    pageSize: 10,
    count: 0,
    hasMore: true,
  },
  gradientVisible: true,
  activeCarouselIndex: 0,
};
const homeModel: HomeModel = {
  namespace: 'home',
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
    *fetchCarousel(_, {call, put}) {
      const {data} = yield call(getCarouselData, {});
      yield put({
        type: 'setState',
        payload: {
          carousel: data,
        },
      });
    },
    *fetchRecommend(_, {call, put}) {
      const {data} = yield call(getRecommendData, {});
      yield put({
        type: 'setState',
        payload: {
          recommend: data,
        },
      });
    },
    *fetchGuess(_, {call, put}) {
      const {data} = yield call(getGuessData, {});
      yield put({
        type: 'setState',
        payload: {
          guess: data,
        },
      });
    },
    *fetchChannels({callback, payload}, {call, put, select}) {
      const {channels, pagination} = yield select(
        (state: RootState) => state.home,
      );
      let pageNo = 1;
      if (payload && payload.loadMore) {
        pageNo = parseInt(pagination.pageNo) + 1;
      }
      const {data, code} = yield call(getChannelData, {pageNo});
      if (code === 500) {
        Alert.alert('慢点刷忙着投胎呢?');
      }
      let newChannels = data.results;
      if (payload && payload.loadMore) {
        let channelIds = [];
        for (const channel of channels) {
          channelIds.push(channel.id);
        }
        for (const newChannel of newChannels) {
          if (!channelIds.includes(newChannel.id)) {
            newChannels = channels.concat(newChannel);
          }
        }
      }

      yield put({
        type: 'setState',
        payload: {
          channels: newChannels,
          pagination: {
            pageNo: data.pagination.pageNo,
            pageSize: data.pagination.pageSize,
            hasMore: data.pagination.hasMore,
          },
        },
      });
      if (typeof callback === 'function') {
        callback();
      }
    },
  },
};

export default homeModel;
