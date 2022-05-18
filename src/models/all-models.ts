import home from './home';
import category from './category';
import {DvaLoadingState} from 'dva-loading-ts';
import album from './album';
import found from './found';
import player from './player';
import user from './user';
const models = [home, category, album, found, player, user];
export type RootState = {
  home: typeof home.state;
  category: typeof category.state;
  album: typeof album.state;
  player: typeof player.state;
  user: typeof user.state;
  loading: DvaLoadingState;
};
export default models;
