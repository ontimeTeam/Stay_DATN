import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginStackParamList } from '../../navigation/LoginStack';
import Background from '../../components/background/Background';
import { BG_LOGIN, IMG_OTP, LOGO } from '../../../assets';
import Button from '../../components/button/Button';
import { AppContext } from '../../resources/context/AppContext';

type PropsType = NativeStackScreenProps<LoginStackParamList, 'OTPScreen'>;

const OTPScreen: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const { isLoggedIn, setLoggedIn } = React.useContext(AppContext);
  const goLoginScreen = () => {
    console.log('goLoginScreen');
    setLoggedIn(true);
    navigation.navigate('LoginScreen');
  };
  return (
    <Background source={BG_LOGIN}>
      <SafeAreaView style={styles.container}>
        <View style={styles.containerChidren}>
          <Image source={IMG_OTP} style={styles.ImgOTP} />
          <Text style={styles.title}>Xác nhận OTP</Text>
          <Button
            title="Xác nhận "
            onPress={goLoginScreen}
          />
        </View>
      </SafeAreaView>
    </Background>

  )
}

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
    marginBottom: 60,
  },
  ImgOTP: {
    width: 220,
    height: 220,
    marginTop: 40,
    marginBottom: 80,
  }
})