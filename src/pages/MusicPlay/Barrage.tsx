import React from 'react';
import {StyleSheet, View} from 'react-native';
import BarrageItem from './BarrageItem';
import {Message} from './Detail';

interface IProps {
  data: Message[];
  maxTrack: number;
}
export interface IBarrage extends Message {
  trackIndex: number;
  isFree?: boolean;
}
interface IState {
  data: Message[];
  list: IBarrage[][]; //一个一维数组表示弹幕的一行
}
// 添加弹幕
function addBarrage(data: Message[], maxTrack: number, list: IBarrage[][]) {
  for (let i = 0; i < data.length; i++) {
    const trackIndex = getTrackIndex(list, maxTrack);
    if (trackIndex < 0) {
      continue;
    }
    if (!list[trackIndex]) {
      list[trackIndex] = [];
    }
    const barrage = {
      ...data[i],
      trackIndex,
    };
    list[trackIndex].push(barrage);
  }
  return list;
}

// 获取弹幕轨道下标
function getTrackIndex(list: IBarrage[][], maxTrack: number) {
  for (let i = 0; i < maxTrack; i++) {
    const barragesOfTrack = list[i];
    if (!barragesOfTrack || barragesOfTrack.length === 0) {
      return i;
    }
    const lastBarragesofTrack = barragesOfTrack[barragesOfTrack.length - 1];
    if (lastBarragesofTrack.isFree) {
      return i;
    }
  }
  return -1;
}
export default class Barrage extends React.Component<IProps, IState> {
  state = {
    data: this.props.data,
    list: [this.props.data.map(item => ({...item, trackIndex: 0}))],
  };
  outside = (data: IBarrage) => {
    const {list} = this.state;
    const newList = list.slice();
    if (newList.length > 0) {
      const {trackIndex} = data;
      newList[trackIndex] = newList[trackIndex].filter(
        item => item.id !== data.id,
      );
      this.setState({
        list: newList,
      });
    }
  };
  static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    const {data, maxTrack} = nextProps;
    if (data !== prevState.data) {
      return {
        data,
        list: addBarrage(data, maxTrack, prevState.list),
      };
    }
    return null;
  }
  renderItem = (item: IBarrage[]) => {
    return item.map(barrage => {
      return (
        <BarrageItem data={barrage} key={barrage.id} outside={this.outside} />
      );
    });
  };
  render() {
    const {list} = this.state;
    return <View style={[styles.container]}>{list.map(this.renderItem)}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 100,
  },
});
