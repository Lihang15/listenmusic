/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import Home from '../pages/Home';
import {StyleSheet} from 'react-native';
import TopTabBarWrapper from './TopTabBarWrapper';
import {RootState} from '@/models/all-models';
import {ICategory} from '@/models/category';
import {useSelector} from 'react-redux';
// import Hot from '@/components/Hot';
import Hot from '../components/HeaderTab/Hot';
import Fm from '../components/HeaderTab/Fm';
import Direct from '../components/HeaderTab/Direct';
import Paihang from '../components/HeaderTab/Paihang';
import MusicList from '../components/HeaderTab/MusicList';
import OtherClassify from '../components/HeaderTab/OtherClassify';
export type HomeParamList = {
  [key: string]: {
    namespace: string;
  };
};
const Tab = createMaterialTopTabNavigator<HomeParamList>();
const mapStateToProps = ({category}: RootState) => {
  return category.myCategorys;
};

function HomeTabs() {
  const tabCompontent = (component: string) => {
    switch (component) {
      case '推荐':
        return Home;
      case '热门':
        return Hot;
      case '直播':
        return Direct;
      case 'FM':
        return Fm;
      case '排行':
        return Paihang;
      case '歌单':
        return MusicList;
      default:
        return OtherClassify;
    }
  };
  // 通过useSelector这个hook 拿到状态
  const myCategorys = useSelector(mapStateToProps);
  //自定义顶部菜单拦 用view包起来原始的头组建 topTab标签会显示在在View里
  // 如果只用View 会是一个完全自定定义的头 topTab标签不显示
  const renderTabBar = (props: MaterialTopTabBarProps) => {
    return <TopTabBarWrapper {...props} />;
  };
  const renderScreen = (item: ICategory) => {
    return (
      <Tab.Screen
        key={item.id}
        name={item.name}
        component={tabCompontent(item.name)}
        options={{tabBarLabel: item.name}}
      />
    );
  };
  return (
    <Tab.Navigator
      lazy={true}
      //不设置这个渐变色组件 会被遮挡
      sceneContainerStyle={styles.sceneContainer}
      tabBar={renderTabBar}
      tabBarOptions={{
        scrollEnabled: true,
        tabStyle: {width: 60},
        indicatorStyle: {
          height: 4,
          width: 20,
          marginLeft: 20,
          borderRadius: 2,
          backgroundColor: '#f86442',
        },
        activeTintColor: '#f86442',
        inactiveTintColor: '#333',
      }}>
      {myCategorys.map(renderScreen)}
      {/* <Tab.Screen
        name="Pindao"
        component={Listen}
        options={{tabBarLabel: '频道'}}
      /> */}
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: 'transparent',
  },
});

export default HomeTabs;

// <Tab.Screen
// name="Pindao"
// component={Listen}
// options={{tabBarLabel: '频道'}}
// />
