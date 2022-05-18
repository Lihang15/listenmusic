import React from 'react';
import Navigation from '@/navigator/index';
import MyTabs from './src/navigator/BottomTabs';
export default class App extends React.Component {
  render() {
    return <Navigation />;
    // return <MyTabs />;
  }
}
