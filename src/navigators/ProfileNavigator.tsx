import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfileScreen from '../screens/EditProfileScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const ProfileNavigator = ({ navigation }: { navigation: any }) => {
    return (
        <Stack.Navigator initialRouteName='ProfileScreen'>
            <Stack.Screen name='Profile' component={ProfileScreen} />
            <Stack.Screen name='Edit' component={EditProfileScreen} />
        </Stack.Navigator>
    )
}

export default ProfileNavigator

const styles = StyleSheet.create({})