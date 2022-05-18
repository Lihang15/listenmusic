import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {IChannel} from '../../models/home';
import Icon from '../../assets/iconfont';
interface IProps {
  data: IChannel;
  onPress: (data: IChannel) => void;
}
class ChannelItem extends React.PureComponent<IProps> {
  onPress = () => {
    const {onPress, data} = this.props;
    if (typeof onPress === 'function') {
      onPress(data);
    }
  };
  render() {
    const {data} = this.props;
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.container}>
          <Image source={{uri: data.image}} style={styles.image} />
          <View style={styles.rightContainer}>
            <Text numberOfLines={1} style={styles.title}>
              {data.title}
            </Text>
            <Text numberOfLines={2} style={styles.remark}>
              {data.remark}
            </Text>
            <View style={styles.bottom}>
              <View style={styles.played}>
                <Icon name="icon-tingge" size={20} />
                <Text style={styles.number}>{data.played}</Text>
              </View>
              {/* <View style={styles.playing}>
                <Icon name="icon-tingge" size={20} />
                <Text style={styles.number}>{data.playing}</Text>
              </View> */}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#dedede',
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  remark: {
    backgroundColor: '#f8f8f8',
    padding: 5,
    marginBottom: 5,
  },
  bottom: {
    flexDirection: 'row',
  },
  played: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  playing: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    marginLeft: 5,
  },
});
export default ChannelItem;
