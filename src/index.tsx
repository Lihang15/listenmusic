import React from 'react';
import {Provider} from 'react-redux';
import Navigator from './navigator';
import store from './config/dva';
import {StatusBar, LogBox} from 'react-native';
import './config/http';

LogBox.ignoreLogs([
  "exported from 'deprecated-react-native-prop-types'.",
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
        {/* // 状态栏 就是 时间和 手机电量那一排 安卓默认是灰色的，改成透明 */}
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent
        />
      </Provider>
    );
  }
}
