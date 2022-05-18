import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';
import {RootState} from '@/models/all-models';
import {connect, ConnectedProps} from 'react-redux';
import {RouteProp} from '@react-navigation/native';
import {modalStackNavigation, RootStackParamList} from '@/navigator/index';
import coverRight from '@/assets/images/album/bgc.png';
import {BlurView} from '@react-native-community/blur';
import List from './List';
import {IProgram} from '@/models/album';

const mapStateToProps = ({album}: RootState) => {
  return {
    summary: album.summary,
    author: album.author,
    thumbnailUrl: album.thumbnailUrl,
    list: album.list,
  };
};
const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface Iprops extends ModelState {
  headerHeight: number;
  route: RouteProp<RootStackParamList, 'Album'>;
  navigation: modalStackNavigation;
}
// 显示专辑的所有歌单
class Album extends React.Component<Iprops> {
  onItemPress = (data: IProgram, index: number) => {
    const {navigation, dispatch, list, route} = this.props;
    const previousItem = list[index - 1];
    const nextItem = list[index + 1];
    dispatch({
      type: 'player/setState',
      payload: {
        previousId: previousItem ? previousItem.id : '',
        nextId: nextItem ? nextItem.id : '',
        sounds: list.map(item => ({id: item.id, title: item.title})),
        title: data.title,
        thumbnailUrl: route.params.item.image,
      },
    });
    navigation.navigate('Detail', {id: data.id});
  };
  componentDidMount() {
    const {dispatch, route} = this.props;
    const {id} = route.params.item;
    dispatch({
      type: 'album/fetchAlbum',
      payload: {
        id,
      },
    });
  }
  renderHeader = () => {
    const {headerHeight, summary, author, route, thumbnailUrl} = this.props;
    const {title, image} = route.params.item;
    return (
      <View style={[styles.header, {paddingTop: headerHeight}]}>
        <BlurView
          blurType="light"
          blurAmount={10}
          style={StyleSheet.absoluteFillObject}
        />
        <Image source={coverRight} style={styles.bgc} />
        <View style={styles.leftView}>
          <Image
            source={{uri: thumbnailUrl ? thumbnailUrl : image}}
            style={styles.thumbnail}
          />
          {/* <Image source={coverRight} style={styles.coverRight} /> */}
        </View>
        <View style={styles.rightView}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.summary}>
            <Text numberOfLines={1}>{summary}</Text>
          </View>
          <View style={styles.author}>
            <Image
              source={{uri: author.avatar ? author.avatar : image}}
              style={styles.avatar}
            />
            <Text style={styles.name}>{author.name}</Text>
          </View>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <List onItemPress={this.onItemPress} />
        {/* <Tab /> */}
      </View>
    );
  }
}
function Wrapper(props: Iprops) {
  const headerHeight = useHeaderHeight();
  return <Album headerHeight={headerHeight} {...props} />;
}

export default connector(Wrapper);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 260,
    flexDirection: 'row',
    paddingHorizontal: 20,
    // backgroundColor: 'pink',
  },
  bgc: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#eee',
    height: 260,
  },
  leftView: {
    marginRight: 26,
  },
  thumbnail: {
    width: 98,
    height: 98,
    borderColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  coverRight: {
    height: 90,
    position: 'absolute',
    right: -25,
  },
  rightView: {
    flex: 1,
  },
  summary: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 5,
    marginVertical: 10,
    borderRadius: 4,
  },
  avatar: {
    height: 26,
    width: 26,
    borderRadius: 13,
    marginRight: 8,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    // color: '#fff',
  },
  title: {
    // color: '#fff',
    fontSize: 18,
  },
});
