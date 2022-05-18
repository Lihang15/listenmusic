import {RootState} from '@/models/all-models';
import Progress from '@/pages/MusicPlay/Progress';
import React from 'react';
import {Animated, Easing, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect, ConnectedProps} from 'react-redux';
import Icon from '../assets/iconfont';
const mapStateToProps = ({player}: RootState) => {
  return {
    thumbnailUrl: player.thumbnailUrl,
    playState: player.playState,
  };
};
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;
interface IProps extends ModelState {
  onPress: () => void;
}
// 底部标签导航器 播放按钮
class Play extends React.Component<IProps> {
  anim = new Animated.Value(0);
  rotate: Animated.AnimatedInterpolation;
  timing: Animated.CompositeAnimation;
  constructor(props: IProps) {
    super(props);
    this.timing = Animated.loop(
      Animated.timing(this.anim, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      {iterations: -1},
    );
    this.rotate = this.anim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
  }
  componentDidMount() {
    const {playState} = this.props;
    if (playState === 'playing') {
      this.timing.start();
    }
  }
  componentDidUpdate() {
    const {playState} = this.props;
    if (playState === 'playing') {
      this.timing.start();
    } else if (playState === 'paused') {
      this.timing.stop();
    }
  }
  onPress = () => {
    const {onPress, thumbnailUrl} = this.props;
    if (thumbnailUrl && onPress) {
      onPress();
    }
  };
  render() {
    const {thumbnailUrl} = this.props;
    return (
      <TouchableOpacity style={styles.play} onPress={this.onPress}>
        <Progress>
          <Animated.View style={[{transform: [{rotate: this.rotate}]}]}>
            {thumbnailUrl ? (
              <Image source={{uri: thumbnailUrl}} style={[styles.image]} />
            ) : (
              <Icon name="icon-circle-play" color="#ebebeb" size={38} />
            )}
          </Animated.View>
        </Progress>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  play: {marginTop: 4},
  image: {
    height: 38,
    width: 38,
    borderRadius: 15,
  },
});

export default connector(Play);
