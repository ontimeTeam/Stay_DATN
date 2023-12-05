import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProfileStackParamList } from '../../navigation/ProfileStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type PropsType = NativeStackScreenProps<ProfileStackParamList, 'RuleScreen'>;
const RuleScreen: React.FC<PropsType> = props => {
    const { navigation } = props;
    return (
        <View>
            <Text>RuleScreen</Text>
        </View>
    )
}

export default RuleScreen

const styles = StyleSheet.create({})