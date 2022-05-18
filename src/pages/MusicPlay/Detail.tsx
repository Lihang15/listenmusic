import {RootState} from '@/models/all-models';
import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect, ConnectedProps} from 'react-redux';
import {modalStackNavigation, ModalStackParamList} from '../../navigator';
import Icon from '../../assets/iconfont';
import PlaySlider from './PlaySlider';
// import Animated from 'react-native-reanimated';
import {viewportWidth} from '@/utils/index';
import Barrage from './Barrage';

const mapStateToProps = ({player}: RootState) => {
  return {
    id: player.id,
    soundUrl: player.soundUrl,
    playState: player.playState,
    title: player.title,
    previousId: player.previousId,
    nextId: player.nextId,
    thumbnailUrl: player.thumbnailUrl,
  };
};
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;
interface IProps extends ModelState {
  route: RouteProp<ModalStackParamList, 'Detail'>;
  navigation: modalStackNavigation;
}
export interface Message {
  id: number;
  title: string;
}
interface IState {
  barrage: boolean;
  barrageData: Message[];
}
const IMAGE_WIDTH = 230;
const SCALE = viewportWidth / IMAGE_WIDTH;

const data: string[] = ['我是弹幕', '立航哥的弹幕', '立航哥真帅', '呦呦呦'];
function randomIndex(length: number) {
  return Math.floor(Math.random() * length);
}
function getText() {
  return data[randomIndex(data.length)];
}
// 播放歌曲的详情页面
class Detail extends React.Component<IProps, IState> {
  state = {
    barrage: false,
    barrageData: [],
  };
  anim = new Animated.Value(1);
  componentDidMount() {
    const {dispatch, route, navigation, title, id} = this.props;
    if (route.params && route.params.id !== id) {
      dispatch({
        type: 'player/fetchShow',
        payload: {
          id: route.params.id,
        },
      });
    } else {
      dispatch({
        type: 'player/play',
      });
    }
    navigation.setOptions({
      headerTitle: title,
    });
    this.addBarrage();
  }
  componentDidUpdate(prevProps: IProps) {
    if (this.props.title !== prevProps.title) {
      this.props.navigation.setOptions({
        headerTitle: this.props.title,
      });
    }
  }
  toggle = () => {
    const {dispatch, playState} = this.props;
    dispatch({
      type: playState === 'playing' ? 'player/pause' : 'player/play',
    });
  };
  previous = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'player/previous',
    });
  };
  next = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'player/next',
    });
  };
  barrage = () => {
    this.setState({
      barrage: !this.state.barrage,
    });
    Animated.timing(this.anim, {
      toValue: SCALE,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  addBarrage = () => {
    setInterval(() => {
      const {barrage} = this.state;
      if (barrage) {
        const id = Date.now();
        const title = getText();
        this.setState({
          barrageData: [{id, title}],
        });
      }
    }, 500);
  };
  render() {
    const {barrage, barrageData} = this.state;
    const {playState, previousId, nextId, thumbnailUrl} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <TouchableOpacity onPress={this.barrage}>
            <Animated.Image
              source={{uri: thumbnailUrl}}
              style={[styles.image, {transform: [{scale: this.anim}]}]}
            />
          </TouchableOpacity>
        </View>
        {barrage && <Barrage data={barrageData} maxTrack={5} />}
        {/* <TouchableOpacity style={styles.barrageBtn} onPress={this.barrage}>
          <Text style={styles.barrageText}>弹幕</Text>
        </TouchableOpacity> */}
        <PlaySlider />
        <View style={styles.control}>
          <TouchableOpacity
            onPress={this.previous}
            disabled={!previousId}
            style={
              !previousId && nextId ? styles.buttonOpacity : styles.button
            }>
            <Icon
              name={'icon-diyiyeshouyeshangyishou'}
              size={40}
              color="#fff"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggle}>
            <Icon
              name={playState === 'playing' ? 'icon-zanting' : 'icon-yunhang'}
              size={40}
              color="#fff"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.next}
            disabled={!nextId}
            style={
              !nextId && previousId ? styles.buttonOpacity : styles.button
            }>
            <Icon
              name={'icon-zuihouyiyemoyexiayishou'}
              size={40}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
  },
  control: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 50,
  },
  button: {
    marginHorizontal: 10,
  },
  buttonOpacity: {
    marginHorizontal: 10,
    opacity: 0.5,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    borderRadius: 10,
  },
  imageView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: IMAGE_WIDTH,
  },
  barrageBtn: {
    height: 20,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1,
  },
  barrageText: {
    color: '#fff',
  },
});
export default connector(Detail);
