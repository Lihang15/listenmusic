import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/all-models';
import * as Yup from 'yup';
const mapStateToProps = ({user, loading}: RootState) => {
  return {
    user: user.user,
    loading: loading.effects['user/login'],
  };
};
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;
interface IProps extends ModelState {}
interface Values {
  account: string;
  password: string;
}
const initialValues: Values = {
  account: '',
  password: '',
};
const validationSchema = Yup.object().shape({
  account: Yup.string().trim().required('请输入用户名=>wanglihang'),
  password: Yup.string().trim().required('请输入密码=>123456'),
});
class Login extends React.Component<IProps> {
  onSubmit = (values: Values) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'user/login',
      payload: values,
    });
  };
  render() {
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        {/* <Text style={styles.logo}>听歌</Text> */}
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={this.onSubmit}>
          {({values, handleChange, handleBlur, handleSubmit, errors}) => {
            return (
              <View>
                <TextInput
                  placeholder="请输入用户名 => wanglihang"
                  style={styles.input}
                  onChangeText={handleChange('account')}
                  onBlur={handleBlur('account')}
                  value={values.account}
                />
                {errors.account && (
                  <View style={styles.errorMsg}>
                    <Text style={styles.errorText}>{errors.account}</Text>
                  </View>
                )}
                <TextInput
                  style={styles.input}
                  placeholder="请输入密码 => 123456"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && (
                  <View style={styles.errorMsg}>
                    <Text style={styles.errorText}>{errors.password}</Text>
                  </View>
                )}
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.loginBtn}>
                  <Text style={styles.loginText}>登录</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    color: '#ff4000',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    marginTop: 40,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderColor: '#ebebeb',
    borderWidth: 1,
    margin: 10,
    borderRadius: 20,
  },
  loginBtn: {
    height: 40,
    borderRadius: 20,
    borderColor: '#ff4000',
    borderWidth: 2,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#ff4000',
  },
  errorText: {
    color: 'red',
  },
  errorMsg: {
    marginHorizontal: 10,
  },
});

export default connector(Login);
