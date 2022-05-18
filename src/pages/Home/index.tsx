import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RootStackNavation} from '../../navigator';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/all-models';
import Carousel from './Carousel';
import Guess from './Guess';
import {IChannel, IGuess} from '@/models/home';
import ChannelItem from './ChannelItem';
import {sideheight} from './Carousel';
import Recommend from './Recommend';
//{这里解构出来的home 必须和models里定义的namespace一样}
const mapStateToProps = ({home, loading}: RootState) =>
  // {route}: {route: RouteProp<HomeParamList, string>},
  {
    // const {} = route.params.namespace;
    return {
      channels: home.channels,
      loading: loading.effects['home/fetchChannels'],
      hasMore: home.pagination.hasMore,
      gradientVisible: home.gradientVisible,
    };
  };
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;
interface IProps extends ModelState {
  navigation: RootStackNavation;
}
interface IState {
  refreshing: boolean;
}
class Home extends React.Component<IProps, IState> {
  state = {
    refreshing: false,
  };
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/fetchChannels',
    });
  }
  goAlbum = (data: IChannel | IGuess) => {
    const {navigation} = this.props;
    navigation.navigate('Album', {item: data});
    console.log(data);
  };
  key = (item: IChannel) => {
    return item.id;
  };
  //下拉刷新
  onFresh = () => {
    const {dispatch} = this.props;
    //修改刷新状态
    this.setState({
      refreshing: true,
    });
    //获取数据
    dispatch({
      type: 'home/fetchChannels',
      callback: () => {
        this.setState({
          refreshing: false,
        });
      },
    });
  };
  //下拉到一定程度加载更多
  onEndReached = () => {
    const {dispatch, loading, hasMore} = this.props;
    if (loading || !hasMore) {
      return;
    }
    //获取数据
    dispatch({
      type: 'home/fetchChannels',
      payload: {
        loadMore: true,
      },
    });
  };

  renderItem = ({item}: ListRenderItemInfo<IChannel>) => {
    return <ChannelItem data={item} onPress={this.goAlbum} key={item.id} />;
  };
  get header() {
    return (
      <View>
        <Carousel />
        <Recommend goAlbum={this.goAlbum} />
        <Guess goAlbum={this.goAlbum} />
      </View>
    );
  }
  get footer() {
    const {hasMore, loading, channels} = this.props;
    if (!hasMore) {
      return (
        <View style={styles.end}>
          <Text>别刷了哟,无了</Text>
        </View>
      );
    }
    if (loading && hasMore && channels.length > 0) {
      return (
        <View style={styles.loading}>
          <Text>正在加载中</Text>
        </View>
      );
    }
  }
  get empty() {
    // const {loading} = this.props;
    // if (loading) {
    //   return;
    // }
    return (
      <View style={styles.empty}>
        <Text>暂无数据～～</Text>
      </View>
    );
  }
  onScroll = ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = nativeEvent.contentOffset.y;
    const {dispatch, gradientVisible} = this.props;
    //下拉的偏移量如果比轮播图高度小 就是true能显示渐变
    let newGradientVisible = offset < sideheight;
    // 当仓库中控制状态和新状态不一致时候 更新仓库状态
    if (gradientVisible !== newGradientVisible) {
      dispatch({
        type: 'home/setState',
        payload: {gradientVisible: newGradientVisible},
      });
    }
  };
  render() {
    const {channels} = this.props;
    const {refreshing} = this.state;
    return (
      <FlatList
        listKey="root"
        ListEmptyComponent={this.empty}
        ListFooterComponent={this.footer}
        ListHeaderComponent={this.header}
        data={channels}
        renderItem={this.renderItem}
        keyExtractor={this.key}
        refreshing={refreshing}
        onRefresh={this.onFresh}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={0.2}
        onScroll={this.onScroll}
      />
    );
  }
}
const styles = StyleSheet.create({
  end: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  loading: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  empty: {
    alignItems: 'center',
    paddingVertical: 100,
  },
});
export default connector(Home);
