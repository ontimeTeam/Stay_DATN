import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginStackParamList } from '../../navigation/LoginStack';
import Background from '../../components/background/Background';
import { BG_LOGIN, IC_BACK, LOGO } from '../../../assets';
import Button from '../../components/button/Button';
import Header from '../../components/header/Header';


type PropsType = NativeStackScreenProps<LoginStackParamList, 'RegisterScreen'>;

const RegisterScreen: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const goLoginScreen = () => {
    console.log('goLoginScreen');
    navigation.navigate('LoginScreen');
  };
  const onLOGO = () => {
    console.log('onLOGO');
  }
  const goOTPScreen = () => {
    console.log('goOTPScreen');
    navigation.navigate('OTPScreen');
  }
  return (
    <Background source={BG_LOGIN}>
      <SafeAreaView style={styles.container}>
        <Header
          iconLeft={LOGO}
          styleIconLeft={{ width: 80, height: 80 }}
          eventLeft={onLOGO}
        />
        <View style={styles.containerChidren}>
          <Text style={styles.title}>Đăng Ký</Text>
          <Button
            title="Đăng ký"
            onPress={goOTPScreen}
          />
          <Button
            title="Đăng nhập"
            onPress={goLoginScreen}
          />
        </View>
      </SafeAreaView>
    </Background>

  )
}

export default RegisterScreen

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
})