import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { ProfileStackParamList } from '../../navigation/ProfileStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type PropsType = NativeStackScreenProps<ProfileStackParamList, 'EditProfile'>;
const EditProfileScreen: React.FC<PropsType> = props => {
    const { navigation } = props;
    return (
        <View>
            <Text>EditProfileScreen</Text>

        </View>
    )
}

export default EditProfileScreen

const styles = StyleSheet.create({})