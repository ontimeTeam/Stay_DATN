import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../navigation/ProfileStack';

type PropsType = NativeStackScreenProps<ProfileStackParamList, 'MyCardScreen'>;
const MyCardScreen: React.FC<PropsType> = props => {
  const { navigation } = props;
  return (
    <View>
      <Text>MyCardScreen</Text>
    </View>
  )
}

export default MyCardScreen

const styles = StyleSheet.create({})