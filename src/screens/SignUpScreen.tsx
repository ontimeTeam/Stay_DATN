import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONT_FAMILY } from '../themes/theme';
import PhoneInput from 'react-native-phone-number-input';
import eyeIcon from '../../assets/images/eye_off.png';
import eyeSlashIcon from '../../assets/images/eye_off.png';

const TestFont = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistration = () => {
    // Xử lý logic đăng kí ở đây
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/LogoApp_Transparent1.png')} style={styles.logo} />
      <Text style={styles.header}>Đăng kí</Text>
      <Text style={styles.testFont}>Họ và Tên</Text>
      <TextInput style={styles.input} placeholder="Tên" />
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.testFont}>Số điện thoại</Text>
          <PhoneInput
            defaultCode="VN"
            codeTextStyle={styles.dfcode}
            placeholder="xxxxxxx"
            containerStyle={styles.phoneInputContainer}
            textInputStyle={styles.phoneInputText}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.testFont}>Email</Text>
          <TextInput style={styles.input} placeholder="abc@gmail.com" keyboardType="email-address" />
        </View>
      </View>
      <Text style={styles.testFont}>Ngày, tháng, năm sinh</Text>
      <TextInput style={styles.input} placeholder="DD/MM/YYYY" />
      <Text style={styles.testFont}>Mật khẩu</Text>
      <View style={styles.passwordInputContainer}>
        <TextInput style={styles.passwordInput} placeholder="Nhập mật khẩu" secureTextEntry={!showPassword} />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image source={showPassword ? eyeIcon : eyeSlashIcon} style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Đăng kí</Text>
      </TouchableOpacity>

      <Text style={styles.testEnd}>
        <Text>Đã có tài khoản?</Text> <Text style={{ color: 'blue' }}>Đăng nhập</Text>
      </Text>
    </View>
  );
};

export default TestFont;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Blue_BG,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    right: 10,
  },
  inputContainer: {
    flex: 1,
    marginLeft: 10,
  },
  header: {
    fontFamily: FONT_FAMILY.exo2_bold,
    fontSize: 32,
    textAlign: 'center',
    color: COLORS.Black,
  },
  testFont: {
    fontFamily: FONT_FAMILY.exo2_medium,
    fontSize: 16,
    color: '#111111',
    lineHeight: 19.2,
    fontWeight: '500',
    marginTop: 15,
    width: 250,
    height: 19,
  },
  testEnd: {
    fontFamily: FONT_FAMILY.exo2_medium,
    fontSize: 16,
    color: '#111111',
    lineHeight: 19.2,
    fontWeight: '500',
    marginTop: 100,
    textAlign: 'center',
    height: 19,
    marginBottom: 10,
  },
  logo: {
    borderRadius: 15,
    marginTop: 20,
    left: 0,
    width: 80,
    height: 80,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 40,
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#7157C5',
    marginTop: 30,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  //phone-input
  phoneInputContainer: {
    height: 40, // Điều chỉnh chiều cao theo ý muốn
    width: 170, // Điều chỉnh chiều rộng theo ý muốn
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  phoneInputText: {
    fontSize: 14, // Điều chỉnh kích thước phông chữ theo ý muốn
    marginBottom: -1,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: -20,
  },
  dfcode: {
    marginTop: 10,
    marginRight: -40,
  },
});
