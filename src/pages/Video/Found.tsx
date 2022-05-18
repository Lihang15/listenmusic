import {IFound} from '@/models/found';
import {RootStackNavation} from '@/navigator/index';
import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import Item from './Item';

const connector = connect();
type ModelState = ConnectedProps<typeof connector>;
interface Iprops extends ModelState {
  navigation: RootStackNavation;
}
interface IState {
  list: IFound[];
  currentId: string;
}
class Found extends React.Component<Iprops, IState> {
  state = {
    list: [],
    currentId: '',
  };
  setCurrentId = (id: string) => {
    this.setState({
      currentId: id,
    });
    //播放视频时候暂停音频
    if (id) {
      const {dispatch} = this.props;
      dispatch({
        type: 'player/pause',
      });
    }
  };
  renderItem = ({item}: ListRenderItemInfo<IFound>) => {
    const paused = item.id !== this.state.currentId;
    return (
      <Item
        key={item.id}
        data={item}
        paused={paused}
        setCurrentId={this.setCurrentId}
      />
    );
  };
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'found/fetchList',
      callback: (data: IFound[]) => {
        this.setState({
          list: data,
        });
      },
    });
  }
  render() {
    const {list} = this.state;
    return (
      <FlatList
        data={list}
        renderItem={this.renderItem}
        extraData={this.state.currentId}
      />
    );
  }
}

export default connector(Found);
