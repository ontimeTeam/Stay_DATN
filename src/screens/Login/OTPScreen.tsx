import { Image, SafeAreaView, StyleSheet, Text, View, Dimensions, Pressable, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginStackParamList } from '../../navigation/LoginStack';
import Background from '../../components/background/Background';
import { BG_LOGIN, IMG_OTP } from '../../../assets';
import TextViewBold from '../../components/textViewBold/TextViewBold';
import LinearGradient from 'react-native-linear-gradient';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { COLORS } from '../../themes/theme';

type PropsType = NativeStackScreenProps<LoginStackParamList, 'OTPScreen'>;
interface RouteParams {
  phoneNumber: string;
}
const OTPScreen: React.FC<PropsType> = (props) => {
  const { navigation, route } = props;
  const phoneNumber = route.params as RouteParams;
  console.log(phoneNumber);
  const textPhone = "Nhập mã OTP gửi đến số điện thoại " + phoneNumber.phoneNumber;
  const phone = phoneNumber.phoneNumber + "";
  const boleTextPhone: string[] = [phone];

  const [display, setDisplay] = useState<"flex" | "none" | undefined>("flex");
  const [displayReSendOPT, setDisplayReSendOPT] = useState<
    "flex" | "none" | undefined
  >("none");
  const [colorOTP, setColorOTP] = useState<string>();
  const [borderColorOTP, setBorderColorOTP] = useState<string>();

  const codeOTP = "384503";
  const [code, setCode] = useState<string>("");
  const handleCheckOTP = () => {
    if (code !== codeOTP) {
      setDisplay("none");
      setColorOTP("red");
      setBorderColorOTP("red");
      setDisplayReSendOPT("flex");
      return false;
    } else {
      Alert.alert("Đăng ký tài khoản thành công")
      navigation.navigate("LoginScreen");
    }
  };
  const handleReSendOTP = () => {
    setCode("");
    setDisplay("flex");
    setDisplayReSendOPT("none");
    setColorOTP("black");
    setBorderColorOTP("#AEB1B5");
  };
  return (
    <Background source={BG_LOGIN}>
      <ScrollView style={styles.container}>
        <View style={styles.containerChidren}>
          <Image source={IMG_OTP} style={styles.ImgOTP} />
          <Text style={styles.title}>Xác nhận OTP</Text>
          <TextViewBold
            boldTexts={boleTextPhone}
            text={textPhone}
            styleView={{ marginBottom: 80 }}
          />
          <View style={styles.viewOTP}>
            <OTPInputView
              style={{ width: "100%", height: 50 }}
              pinCount={6}
              autoFocusOnLoad={false} // tự động focus vào ô nhập đầu tiên, false là không tự động focus
              codeInputFieldStyle={StyleSheet.flatten([
                styles.underlineStyleBase,
                { color: colorOTP, borderColor: borderColorOTP },
              ])}
              code={code}
              onCodeChanged={(code) => {
                setCode(code);
              }}
              onCodeFilled={(code) => {
                setCode(code);
              }}
              placeholderCharacter="*" //ký tự hiển thị
              editable={true} // có thể chỉnh sửa hay không
            />
          </View>
          <LinearGradient
            colors={['#E14058', '#4461F2']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={styles.btnLinear}
          >
            <Pressable
              onPress={handleCheckOTP}>
              <Text style={styles.titlebtn}>Xác nhận</Text>
            </Pressable>
          </LinearGradient>
          <Text style={StyleSheet.flatten([
            styles.textReSendOTP,
            { display: displayReSendOPT },
          ])}
            onPress={handleReSendOTP}>
            Gửi lại mã OTP
          </Text>
        </View>
      </ScrollView>
    </Background>
  )
};
export default OTPScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerChidren: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontFamily: "Exo2-Bold",
    color: 'black',
    marginTop: 16,
    marginBottom: 30,
  },
  ImgOTP: {
    width: 220,
    height: 220,
    marginVertical: 80,
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
  viewOTP: {
    marginHorizontal: Dimensions.get("window").width * 0.1,
  },

  underlineStyleBase: {
    width: 44,
    height: 44,
    borderWidth: 1,
    borderColor: "#AEB1B5",
    color: "#AEB1B5",
    fontSize: 20,
    fontWeight: "700",
    borderRadius: 10,
  },

  underlineStyleHighLighted: {
    borderColor: "#AEB1B5",
  },

  textReSendOTP: {
    textTransform: "none",
    fontFamily: 'Exo2-Regular',
    fontSize: 13,
    textDecorationLine: "underline",
    color: COLORS.MainBlue,
    marginTop: 10,
    textAlign: "center",
    display: "none",
  },
})