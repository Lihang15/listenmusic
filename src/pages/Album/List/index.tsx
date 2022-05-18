import {IProgram} from '@/models/album';
import {RootState} from '@/models/all-models';
import React from 'react';
import {
  ListRenderItemInfo,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import Item from './Item';
const mapStateToProps = ({album}: RootState) => {
  return {
    list: album.list,
  };
};
const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;
interface Iprops extends ModelState {
  onItemPress: (data: IProgram, index: number) => void;
}
class List extends React.Component<Iprops> {
  get header() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>单曲</Text>
      </View>
    );
  }
  keyExtractor = (item: IProgram) => {
    return item.id;
  };
  onPress = (data: IProgram, index: number) => {
    // Alert.alert(data.toString());
    const {onItemPress} = this.props;
    // navigation.navigate('Detail');
    if (typeof onItemPress === 'function') {
      onItemPress(data, index);
    }
  };
  renderItem = ({item, index}: ListRenderItemInfo<IProgram>) => {
    return (
      <Item data={item} index={index} key={index} onPress={this.onPress} />
    );
  };
  render() {
    const {list} = this.props;
    return (
      <FlatList
        ListHeaderComponent={this.header}
        style={styles.container}
        data={list}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

export default connector(List);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontWeight: '900',
  },
});
