import { StyleSheet, Text, View, Image } from 'react-native';
import { BG_SPLASH } from '../../../assets';
import React, { useEffect } from 'react';
import { COLORS, FONT_FAMILY } from '../../themes/theme';
import { LoginStackParamList } from '../../navigation/LoginStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type PropsType = NativeStackScreenProps<LoginStackParamList, 'SplashScreen'>;

const SplashScreen: React.FC<PropsType> = (props) => {
  const { navigation } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
      <View style={styles.container}>
        <Image style={{ width: '100%', height: '100%' }} source={BG_SPLASH} />
      </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.Blue_BG,
  },
});