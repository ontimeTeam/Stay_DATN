import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProfileStackParamList } from '../../navigation/ProfileStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type PropsType = NativeStackScreenProps<ProfileStackParamList, 'ForgotPassword'>;
const ForgotPasswordScreen: React.FC<PropsType> = props => {
  const { navigation } = props;
  return (
    <View>
      <Text>ForgotPasswordScreen</Text>
    </View>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({})