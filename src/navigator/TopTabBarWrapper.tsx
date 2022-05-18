import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import {
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-animated-gradient-transition';
import {RootState} from './../models/all-models';
import {connect, ConnectedProps} from 'react-redux';
// import {carouselData} from '../pages/Home/Carousel';
import Icon from '../assets/iconfont';
const mapStateToProps = ({home}: RootState) => {
  return {
    linearColors: home.carousel.length
      ? home.carousel[home.activeCarouselIndex].colors
      : undefined,
    gradientVisible: home.gradientVisible,
  };
};
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;

type IProps = MaterialTopTabBarProps & ModelState;
// 自定义 底部标签导航器头组件
class TopTabBarWrapper extends React.Component<IProps> {
  get linearGradient() {
    const {linearColors = ['pink', 'pink'], gradientVisible} = this.props;
    if (!gradientVisible) {
      return null;
    }
    return <LinearGradient colors={linearColors} style={styles.gradient} />;
  }
  goCategory = () => {
    const {navigation} = this.props;
    navigation.navigate('Category');
  };
  onPress = () => {
    Alert.alert('别点了，还没写这个功能');
  };
  onPressHuatong = () => {
    Alert.alert('前面的都没时间写，你是怎么认为这个会写的?');
  };
  render() {
    const {gradientVisible, ...restProps} = this.props;
    let textStyle;
    let activeTintColor = '#333';
    if (gradientVisible) {
      textStyle = styles.whileText;
      activeTintColor = '#f86442';
    } else {
      textStyle = styles.text;
    }
    return (
      <View style={styles.container}>
        {this.linearGradient}
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.search} onPress={this.onPress}>
            <View style={styles.searchLeft}>
              <Icon name="icon-sousuo1" />
              <Text style={textStyle}>搜索</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.history}
            onPress={this.onPressHuatong}>
            {/* <Text style={textStyle}>历史</Text> */}
            <Icon name="icon-huatong" size={22} />
          </TouchableOpacity>
        </View>
        <View style={styles.view}>
          {/* 和原来头标签一致的组建 用view套起来 */}
          <MaterialTopTabBar
            {...restProps}
            style={styles.tab}
            activeTintColor={activeTintColor}
          />
          <TouchableOpacity onPress={this.goCategory}>
            <View style={styles.classify}>
              <Icon name="icon-shouye4" size={14} />
              <Text>定制</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(),
    backgroundColor: '#fff',
    // height: 200,
  },
  tab: {
    flex: 1,
    elevation: 0,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  classify: {
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    paddingHorizontal: 10,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: '#ccc',
  },
  history: {
    marginLeft: 20,
  },
  search: {
    flex: 1,
    paddingLeft: 12,
    height: 25,
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,0.1)',
    // borderColor: 'rgba(0,0,0,0.1)',
    // borderWidth:1,
  },
  searchLeft: {
    flexDirection: 'row',
  },
  bottom: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    height: 230,
  },
  text: {
    color: '#333',
  },
  whileText: {
    color: '#ebebeb',
  },
});
export default connector(TopTabBarWrapper);
