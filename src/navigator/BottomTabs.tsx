import Account from '@/pages/User/Account';
import Found from '@/pages/Video/Found';
import Listen from '@/pages/Radio/RadioStation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
} from '@react-navigation/native';
import {RootStackNavation, RootStackParamList} from '.';
import Icon from '../assets/iconfont';
import TopTabs from './TopTabs';
import Play from './Play';

export type BottomTabParamsList = {
  Home: undefined;
  Account: undefined;
  Found: undefined;
  Listen: undefined;
  Play: undefined;
};
const Tab = createBottomTabNavigator<BottomTabParamsList>();
type Route = RouteProp<RootStackParamList, 'BottomTabs'>;
// type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
//   state: NavigationState;
// };
interface IProps {
  navigation: RootStackNavation;
  route: Route;
}

export default class BottomTabs extends React.PureComponent<IProps> {
  //动态显示堆栈导航器头部标题
  componentDidUpdate() {
    const {navigation, route} = this.props;
    const routeName = getFocusedRouteNameFromRoute(route);
    let headerTitle = '';
    switch (routeName) {
      case 'Home':
        headerTitle = '首页';
        break;
      case 'Listen':
        headerTitle = '电台';
        break;
      case 'Found':
        headerTitle = '看点';
        break;
      case 'Account':
        headerTitle = '账号';
        break;
      default:
        headerTitle = '';
    }
    if (headerTitle === '首页') {
      navigation.setOptions({
        headerTransparent: true,
        headerTitle: '',
      });
    } else {
      navigation.setOptions({
        headerTitle: headerTitle,
        headerTransparent: false,
      });
    }
  }
  render() {
    return (
      <Tab.Navigator tabBarOptions={{activeTintColor: '#f86442'}}>
        <Tab.Screen
          name="Home"
          component={TopTabs}
          options={{
            tabBarLabel: '首页',
            tabBarIcon: ({color, size}) => (
              <Icon name="icon-shouye3" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Listen"
          component={Listen}
          options={{
            tabBarLabel: '电台',
            tabBarIcon: ({color, size}) => (
              <Icon name="icon-diantai" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={'Play'}
          component={Play}
          options={({navigation}) => ({
            tabBarButton: () => {
              return <Play onPress={() => navigation.navigate('Detail')} />;
            },
          })}
        />
        <Tab.Screen
          name="Found"
          component={Found}
          options={{
            // cardStyle: {backgroundColor: '#4F4F4F'},
            tabBarLabel: '看点',
            tabBarIcon: ({color, size}) => (
              <Icon name="icon-shipin" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: '账号',
            tabBarIcon: ({color, size}) => (
              <Icon name="icon-wode" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
