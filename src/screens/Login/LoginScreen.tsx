import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginStackParamList } from '../../navigation/LoginStack';
import Background from '../../components/background/Background';
import { BG_LOGIN, LOGO } from '../../../assets';
import Button from '../../components/button/Button';
import Header from '../../components/header/Header';
import { AppContext } from '../../resources/context/AppContext';

type PropsType = NativeStackScreenProps<LoginStackParamList, 'LoginScreen'>;

const LoginScreen: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const { isLoggedIn, setLoggedIn } = React.useContext(AppContext);

  const goHome = () => {
    console.log('goHome');
    setLoggedIn(true);
    console.log('isLoggedIn', isLoggedIn);
  };
  const onLOGO = () => {
    console.log('onLOGO');
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
          <Text style={styles.title}>Đăng Nhập</Text>
          <Button
            title="Đăng nhập"
            onPress={goHome}
          />
          <Button
            title="Đăng nhập với Google"
            onPress={goHome}
          />
          <Button
            title="Đăng ký"
            onPress={() => navigation.navigate('RegisterScreen')}
          />
        </View>
      </SafeAreaView>
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