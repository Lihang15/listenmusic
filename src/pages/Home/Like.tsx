import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Image} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../models/all-models';
import {IGuess} from '../../models/home';
// import Touchable from '../../components/Touchable';
const mapStateToProps = ({home}: RootState) => {
  return {
    guess: home.guess,
  };
};
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;

class Like extends React.Component<ModelState> {
  componentDidMount() {
    this.fetch();
  }
  fetch = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/fetchGuess',
    });
  };
  renderItem = ({item}: {item: IGuess}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          Alert.alert('哈哈，我还没开始写这个页面');
        }}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text numberOfLines={2}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    const {guess} = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          numColumns={4}
          data={guess}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 5,
  },
  item: {
    flex: 1,
    marginVertical: 6,
    marginHorizontal: 8,
  },
  image: {
    height: 80,
    width: '100%',
    borderRadius: 8,
    marginBottom: 10,
  },
  list: {
    padding: 10,
  },
});
export default connector(Like);
