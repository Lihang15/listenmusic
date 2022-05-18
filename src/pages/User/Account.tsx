import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import coverRight from '@/assets/images/album/bgc.png';
import {modalStackNavigation} from '@/navigator/index';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/all-models';

const mapStateToProps = ({user}: RootState) => {
  return {
    user: user.user,
  };
};
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: modalStackNavigation;
}
class Account extends React.Component<IProps> {
  onPress = () => {
    const {navigation} = this.props;
    navigation.navigate('Login');
  };
  logout = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'user/logout',
    });
  };
  render() {
    const {user} = this.props;
    if (user) {
      return (
        <View>
          <View style={styles.loginView}>
            <Image source={{uri: user.avatar}} style={styles.image} />
            <View style={styles.right}>
              <TouchableOpacity style={[styles.loginBtn]} onPress={this.logout}>
                <Text style={styles.loginBtnText}>退出登录</Text>
              </TouchableOpacity>
              <Text>{user.name}</Text>
            </View>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.loginView}>
        <Image source={coverRight} style={styles.image} />
        <View style={styles.right}>
          <TouchableOpacity style={styles.loginBtn} onPress={this.onPress}>
            <Text style={styles.loginBtnText}>立即登录</Text>
          </TouchableOpacity>
          <Text style={styles.tip}>登录后可以看到更多内容呦</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginView: {
    flexDirection: 'row',
    margin: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  right: {
    flex: 1,
    marginLeft: 15,
  },
  loginBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 76,
    height: 26,
    borderRadius: 13,
    borderColor: '#f86442',
    borderWidth: 1,
    marginBottom: 10,
  },
  loginBtnText: {
    color: '#f86442',
    fontWeight: '900',
  },
  tip: {
    color: '#999',
  },
});
export default connector(Account);
