import {NavigationContainerRef} from '@react-navigation/native';
import React from 'react';
import {Dimensions} from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

//根据百分比获取宽度
function widthPercentage(percentage: number) {
  const value = viewportWidth * (percentage / 100);
  return Math.round(value);
}

//根据百分比获取高度
function heightPercentage(percentage: number) {
  const value = viewportHeight * (percentage / 100);
  return Math.round(value);
}

function formatTime(seconds: number) {
  const m = parseInt((seconds % (60 * 60)) / 60 + '', 10);
  const s = parseInt((seconds % 60) + '', 10);
  return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
}

const navigationRef = React.createRef<NavigationContainerRef>();
// 播放音频后部分底部显示的播放按钮 拿不到navigation对象，通过ref拿到
function navigate(name: string, parames?: any) {
  navigationRef.current?.navigate(name, parames);
}
function goBack() {
  navigationRef.current?.goBack();
}
export {
  viewportWidth,
  viewportHeight,
  widthPercentage,
  heightPercentage,
  formatTime,
  navigationRef,
  navigate,
  goBack,
};
