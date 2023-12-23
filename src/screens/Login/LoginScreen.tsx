import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Image, Alert, Dimensions } from 'react-native'
import React, { useState, useContext } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginStackParamList } from '../../navigation/LoginStack';
import Background from '../../components/background/Background';
import { BG_LOGIN, ICON_EYE, ICON_EYE_CLOSE, LOGO } from '../../../assets';
import Header from '../../components/header/Header';
import { COLORS, FONT_FAMILY } from '../../themes/theme';
import LinearGradient from 'react-native-linear-gradient';
import { AppContext } from '../../resources/context/AppContext';

type PropsType = NativeStackScreenProps<LoginStackParamList, 'LoginScreen'>;

const LoginScreen: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const [valuePassword, setValuePassword] = useState(""); // valuePassword là giá trị mật khẩu mà người dùng nhập
  const [isActiceEye, setIsActiceEye] = useState(false); // isActiceEye là giá trị boolean để hiện icon mở mắt hoặc đóng mắt
  const { isLoggedIn, setLoggedIn } = useContext(AppContext);
  const goHome = async () => {
    setLoggedIn(true);
    console.log('goHome');
  };
  const handleIconPress = () => {
    setIsActiceEye(!isActiceEye);
  }
  const handleInputChangePassword = (textPass: string) => {
    setValuePassword(textPass);
  }
  return (
    <Background source={BG_LOGIN}>
      <ScrollView style={styles.container}>
        <Header
          iconLeft={LOGO}
          styleIconLeft={{ width: 80, height: 80, marginTop: 60 }}
        />
        <View style={styles.containerChidren}>
          <Text style={styles.title}>Đăng Nhập</Text>
          <Text style={styles.titleMini}>Số điện thoại</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại"
            keyboardType="numeric"
          />
          <Text style={styles.titleMini}>Mật khẩu</Text>
          <View style={styles.viewOld}>
            <TextInput
              style={styles.input}
              placeholder="Nhập mật khẩu"
              onChangeText={(valuePassword) => handleInputChangePassword(valuePassword)}
              value={valuePassword}
              secureTextEntry={!isActiceEye} // khi isActiceEye = true thì hiện mật khẩu, false thì ẩn mật khẩu
            />
            <Pressable onPress={handleIconPress}>
              <Image source={isActiceEye ? ICON_EYE : ICON_EYE_CLOSE} style={styles.iconEye} />
              {/* khi isActiceEye = true thì hiện icon mở mắt, false thì hiện icon đóng mắt */}
            </Pressable>
          </View>
          <LinearGradient
            colors={['#E14058', '#4461F2']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={styles.btnLinear}
          >
            <Pressable
              onPress={() => goHome()}>
              <Text style={styles.titlebtn}>Đăng Nhập</Text>
            </Pressable>
          </LinearGradient>
          <View style={styles.viewBottom}>
            <Text style={styles.titleBottom}>Chưa có tài khoản? </Text>
            <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={styles.titleLogin}>Đăng ký</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

    </Background>

  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerChidren: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: "Exo2-Bold",
    color: 'black',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 60,
  },
  titleMini: {
    fontSize: 16,
    fontFamily: "Exo2-SemiBold",
    color: COLORS.Black,
    marginBottom: 8,
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: COLORS.White,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 15,
    fontFamily: FONT_FAMILY.exo2_regular,
    color: "black",
    marginBottom: 20,
  },
  viewOld: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconEye: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: 20,
    top: -22
  },
  btnLinear: {
    width: '90%',
    height: 55,
    paddingVertical: 14,
    borderRadius: 24,
    backgroundColor: '#4461F2',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 20,
  },
  titlebtn: {
    fontSize: 18,
    letterSpacing: -0.2,
    lineHeight: 25.2,
    fontFamily: "Exo2-Bold",
    color: 'white',
    textAlign: "center",
  },
  viewBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height / 2.6,
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  titleBottom: {
    fontSize: 20,
    fontFamily: "Exo2-Regular",
    color: COLORS.Black,
    textAlign: "center",
  },
  titleLogin: {
    fontSize: 20,
    fontFamily: "Exo2-Bold",
    color: COLORS.MainBlue,
    textAlign: "center",
  },
})