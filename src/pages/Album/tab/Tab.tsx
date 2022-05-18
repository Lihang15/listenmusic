import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SceneRendererProps, TabBar, TabView} from 'react-native-tab-view';
import Introduction from './Introduction';
import List from '../List/index';

interface IRoute {
  key: string;
  title: string;
}
interface IState {
  routes: IRoute[];
  index: number;
}
interface Iprops {}
export default class Tab extends React.Component<Iprops, IState> {
  state = {
    index: 1,
    routes: [
      {key: 'introduction', title: '简介'},
      {key: 'albums', title: '列表'},
    ],
  };
  onIndexChange = (index: number) => {
    this.setState({
      index,
    });
  };
  renderTabBar = (props: SceneRendererProps & {navigation: IState}) => {
    return (
      <TabBar
        {...props}
        scrollEnabled
        labelStyle={styles.labelS}
        tabStyle={styles.tab}
        style={styles.tabbar}
        indicatorStyle={styles.indicator}
      />
    );
  };
  renderScene = ({route}: {route: IRoute}) => {
    switch (route.key) {
      case 'introduction':
        return <Introduction />;
      case 'albums':
        return <List />;
    }
  };
  render() {
    return (
      <TabView
        navigationState={this.state}
        onIndexChange={this.onIndexChange}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
      />
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    width: 80,
    height: 40,
  },
  labelS: {
    color: '#333',
  },
  tabbar: {
    backgroundColor: '#fff',
  },
  indicator: {
    backgroundColor: '#eb6d48',
    borderLeftWidth: 20,
    borderRightWidth: 15,
    borderColor: '#fff',
  },
});
