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
import {IChannel, IGuess} from '../../models/home';
// import Touchable from '../../components/Touchable';
import Icon from '../../assets/iconfont';
const mapStateToProps = ({home}: RootState) => {
  return {
    guess: home.guess,
  };
};
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;
interface Iprops extends ModelState {
  goAlbum: (item: IGuess | IChannel) => void;
}
class Guess extends React.Component<Iprops> {
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
    const {goAlbum} = this.props;
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          goAlbum(item);
          // Alert.alert('哈哈，我还没开始写这个页面');
        }}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text numberOfLines={2}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  more = () => {
    Alert.alert('没得更多骗人的,请点换一批');
  };
  render() {
    const {guess} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerRight}>
            <Icon name="icon-xihuan1" />
            <Text style={styles.headerTitle}>猜你喜欢</Text>
          </View>
          <TouchableOpacity onPress={this.more}>
            <View style={styles.headerLeft}>
              <Text style={styles.moreText}>更多</Text>
              <Icon name="icon-right" />
            </View>
          </TouchableOpacity>
        </View>
        <FlatList
          listKey="guess"
          style={styles.list}
          numColumns={4}
          data={guess}
          renderItem={this.renderItem}
        />
        <TouchableOpacity style={styles.changeGuess} onPress={this.fetch}>
          <Icon name="icon-shuaxin" />
          <Text style={styles.changeGuessText}>换一批</Text>
        </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: '#efefef',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    marginLeft: 5,
    color: '#333',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreText: {
    color: '#6f6f6f',
  },
  changeGuess: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  changeGuessText: {
    marginRight: 5,
  },
  list: {
    padding: 10,
  },
});
export default connector(Guess);
