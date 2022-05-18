/* eslint-disable react-native/no-inline-styles */
import {RootState} from '@/models/all-models';
import {ICategory} from '@/models/category';
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ConnectedProps, connect} from 'react-redux';
import _ from 'lodash';
import Item, {itemHeight, itemWidth, margin, parentWidth} from './Item';
import {RootStackNavation} from '@/navigator/index';
import HeaderRightBtn from './HeaderRightBtn';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DragSortableView} from 'react-native-drag-sort';

const mapStateToProps = ({category}: RootState) => ({
  categorys: category.categorys,
  myCategorys: category.myCategorys,
  isEdit: category.isEdit,
});
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;
interface IState {
  myCategorys: ICategory[];
}
const fixdItems = [0, 1, 2, 3, 4, 5];
// const fixdId = ['tuijian', 'hot'];
interface Iprops extends ModelState {
  navigation: RootStackNavation;
}
class Category extends React.Component<Iprops, IState> {
  // const {categorys,myCategorys,isEdit} = useSelector(mapStateToProps,shallowEqual);
  state = {
    myCategorys: this.props.myCategorys,
  };
  constructor(props: Iprops) {
    super(props);
    props.navigation.setOptions({
      headerRight: () => <HeaderRightBtn onSubmit={this.onSubmit} />,
    });
  }
  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'category/setState',
      payload: {
        isEdit: false,
      },
    });
  }
  onSubmit = () => {
    const {dispatch, navigation, isEdit} = this.props;
    const {myCategorys} = this.state;
    dispatch({
      type: 'category/toggle',
      payload: {
        myCategorys,
      },
    });
    if (isEdit) {
      navigation.goBack();
    }
  };
  onLongPress = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'category/setState',
      payload: {
        isEdit: true,
      },
    });
  };
  onPress = (item: ICategory, index: number, selected: boolean) => {
    const {isEdit} = this.props;
    const {myCategorys} = this.state;
    if (isEdit) {
      if (selected) {
        const disabled = fixdItems.indexOf(index) > -1;
        // const disabled = fixdId.includes(item.id) || fixdId.includes(item.id);
        if (disabled) {
          return;
        }
        this.setState({
          myCategorys: myCategorys.filter(
            selectedItem => selectedItem.id !== item.id,
          ),
        });
      } else {
        this.setState({
          myCategorys: myCategorys.concat([item]),
        });
      }
    }
  };
  renderItem = (item: ICategory, index: number) => {
    const {isEdit} = this.props;
    const disabled = fixdItems.indexOf(index) > -1;
    return (
      <Item
        key={item.id}
        data={item}
        disabled={disabled}
        isEdit={isEdit}
        selected
      />
    );
  };
  renderUnselectItem = (item: ICategory, index: number) => {
    const {isEdit} = this.props;
    return (
      <TouchableOpacity
        key={item.id}
        onLongPress={this.onLongPress}
        onPress={() => {
          this.onPress(item, index, false);
        }}>
        <Item data={item} isEdit={isEdit} selected={false} />
      </TouchableOpacity>
    );
  };
  onDataChange = (data: ICategory[]) => {
    this.setState({
      myCategorys: data,
    });
  };
  onClickItem = (data: ICategory[], item: ICategory) => {
    this.onPress(item, data.indexOf(item), true);
  };
  render() {
    const {categorys, isEdit} = this.props;
    //用户选择的
    const {myCategorys} = this.state;
    const classifyGroup = _.groupBy(categorys, item => item.classify);
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.classifyName}>我的分类</Text>
        <View style={styles.calssifyView}>
          <DragSortableView
            dataSource={myCategorys}
            renderItem={this.renderItem}
            sortable={isEdit}
            keyExtractor={item => item.id}
            onDataChange={this.onDataChange}
            fixedItems={fixdItems}
            parentWidth={parentWidth}
            childrenWidth={itemWidth}
            childrenHeight={itemHeight}
            marginChildrenTop={margin}
            onClickItem={this.onClickItem}
          />
        </View>
        <View>
          {Object.keys(classifyGroup).map(classify => {
            return (
              <View key={classify}>
                <Text style={styles.classifyName}>{classify}</Text>
                <View style={styles.calssifyView}>
                  {classifyGroup[classify].map((item, index) => {
                    if (
                      myCategorys.find(
                        selectedItem => selectedItem.id === item.id,
                      )
                    ) {
                      return null;
                    }
                    return this.renderUnselectItem(item, index);
                  })}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f6f6',
  },
  classifyName: {
    fontSize: 16,
    marginTop: 14,
    marginBottom: 8,
    marginLeft: 10,
  },
  calssifyView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
});
export default connector(Category);
