import {IFound} from '@/models/found';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import VideoControls from 'react-native-video-custom-controls';

interface Iprop {
  data: IFound;
  paused: boolean;
  setCurrentId: (id: string) => void;
}
class Item extends React.Component<Iprop> {
  state = {
    disablePlayPause: true,
  };
  onPlay = () => {
    const {data, setCurrentId} = this.props;
    setCurrentId(data.id);
  };
  onPause = () => {
    const {setCurrentId} = this.props;
    setCurrentId('');
  };
  onEnd = () => {
    this.onPause();
  };
  onEnterFullscreen = () => {
    this.setState({
      disablePlayPause: true,
    });
  };

  render() {
    const {data, paused} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text} numberOfLines={2}>
          {data.title}
        </Text>
        <VideoControls
          // controls={true}
          showOnStart={false}
          repeat={false}
          toggleResizeModeOnFullscreen={false}
          disableVolume
          isFullscreen={false}
          onPlay={this.onPlay}
          onPause={this.onPause}
          onEnd={this.onEnd}
          paused={paused}
          // tapAnywhereToPause={true}
          source={{
            uri: data.videoUrl,
          }}
          style={styles.video}
        />
      </View>
    );
  }
}

export default Item;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  video: {
    height: 220,
    borderRadius: 10,
  },
  text: {
    fontWeight: '700',
  },
});
