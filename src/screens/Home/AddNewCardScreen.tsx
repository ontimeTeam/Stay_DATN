import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProfileStackParamList } from '../../navigation/ProfileStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type PropsType = NativeStackScreenProps<ProfileStackParamList, 'AddNewCardScreen'>;
const AddNewCardScreen: React.FC<PropsType> = props => {
  const { navigation } = props;
  return (
    <View>
      <Text>AddNewCardScreen</Text>
    </View>
  )
}

export default AddNewCardScreen

const styles = StyleSheet.create({})