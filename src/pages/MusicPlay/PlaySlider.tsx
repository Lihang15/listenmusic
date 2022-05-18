import {RootState} from '@/models/all-models';
import {formatTime} from '@/utils/index';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from 'react-native-slider-x';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({player}: RootState) => {
  return {
    currentTime: player.currentTime,
    duration: player.duration,
  };
};
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;
interface IProps extends ModelState {}
class PlaySlider extends React.Component<IProps> {
  renderThumb = () => {
    const {currentTime, duration} = this.props;
    return (
      <View>
        <Text style={styles.text}>
          {formatTime(currentTime)}/{formatTime(duration)}
        </Text>
      </View>
    );
  };
  render() {
    const {currentTime, duration} = this.props;
    return (
      <View style={styles.container}>
        <Slider
          value={currentTime}
          maximumValue={duration}
          maximumTrackTintColor="rgba(255,255,255,0.3)"
          minimumTrackTintColor="white"
          renderThumb={this.renderThumb}
          thumbStyle={styles.thumbStyle}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  thumbStyle: {
    backgroundColor: '#fff',
    width: 76,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
  },
  container: {
    margin: 10,
    marginTop: 200,
  },
});
export default connector(PlaySlider);
