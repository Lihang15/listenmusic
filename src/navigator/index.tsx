import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
  NavigationState,
  RouteProp,
} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';

import Detail from '../pages/MusicPlay/Detail';
import BottomTabs from '../navigator/BottomTabs';
import Category from '@/pages/Category';
import {Animated, Platform, StatusBar, StyleSheet} from 'react-native';
import Album from '@/pages/Album';
import Icon from '../assets/iconfont';
import PlayView from './PlayView';
import {navigationRef} from '../utils';
import Login from '@/pages/User/Login';

// 根导航器
export type RootStackParamList = {
  //后面的参数为路由接收的参数
  BottomTabs: {screen: string};
  Detail: {id: number};
  Category: undefined;
  Album: {
    item: {
      id: string;
      title: string;
      image: string;
    };
  };
};

export type RootStackNavation = StackNavigationProp<RootStackParamList>;
// 如果要传入interface 需要知道键的类型
// interface RootStackParamList {
//   [Home: string]: undefined;
// }
const Stack = createStackNavigator<RootStackParamList>();
function getAlbumOptons({
  route,
}: {
  route: RouteProp<RootStackParamList, 'Album'>;
}) {
  return {
    headerTitle: route.params.item.title,
    headerTransparent: true,
    headerTitleStyle: {
      opacity: 0,
    },
    headerBackground: () => {
      return <Animated.View style={styles.headerBackground} />;
    },
  };
}

export type ModalStackParamList = {
  Root: undefined;
  Detail: {id: string};
  Login: undefined;
};
const ModalStack = createStackNavigator<ModalStackParamList>();
export type modalStackNavigation = StackNavigationProp<ModalStackParamList>;

function ModalStackScreen() {
  return (
    <ModalStack.Navigator
      mode="modal"
      headerMode="screen"
      screenOptions={{
        headerTitleAlign: 'center',
        gestureEnabled: true,
        headerBackTitleVisible: false,
        headerTintColor: '#333',
        // ...TransitionPresets.ModalSlideFromBottomIOS,
      }}>
      <ModalStack.Screen
        name="Root"
        component={RootStackScreen}
        options={{headerShown: false}}
      />
      <ModalStack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
          headerTitle: '',
          headerTransparent: true,
          cardStyle: {backgroundColor: '#4F4F4F'},
          headerBackImage: ({tintColor}) => (
            <Icon
              name="icon-xiangxia"
              size={25}
              color={tintColor}
              style={styles.headerBackImage}
            />
          ),
        }}
      />
      <ModalStack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: '登录',
        }}
      />
    </ModalStack.Navigator>
  );
}
function RootStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: '#333',
        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        ...Platform.select({
          android: {
            headerStatusBarHeight: StatusBar.currentHeight,
          },
        }),
      }}>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{headerTransparent: true, headerTitle: ''}}
      />
      {/* <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerTitle: '详情'}}
      /> */}
      <Stack.Screen
        name="Category"
        component={Category}
        options={{headerTitle: '定制'}}
      />
      <Stack.Screen name="Album" component={Album} options={getAlbumOptons} />
    </Stack.Navigator>
  );
}

export default class Navigation extends React.Component {
  state = {
    routeName: 'BottomTabs',
  };
  onStateChange = (state: NavigationState | undefined) => {
    if (typeof state !== 'undefined') {
      const route = state.routes[state.index];
      const routeName = getFocusedRouteNameFromRoute(route)
        ? getFocusedRouteNameFromRoute(route)
        : 'undefined';
      console.log(routeName);
      this.setState({
        routeName,
      });
    }
  };
  render() {
    return (
      <NavigationContainer
        ref={navigationRef}
        onStateChange={this.onStateChange}>
        <ModalStackScreen />
        <PlayView routeName={this.state.routeName} />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: '#fff',
    flex: 1,
    opacity: 0,
  },
  headerBackImage: {
    marginVertical: 5,
    marginHorizontal: Platform.OS === 'android' ? 0 : 8,
  },
});
