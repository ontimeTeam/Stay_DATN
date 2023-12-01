import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/Home/ProfileScreen';
import EditProfileScreen from '../screens/Home/EditProfileScreen';
import ForgotPasswordScreen from '../screens/Home/ForgotPasswordScreen';
import LoginScreen from '../screens/Login/LoginScreen';

type ProfileScreenProps = {};
type EditProfileScreenProps = {};
type ForgotPasswordScreenProps = {};
type LoginStackProps = {};

export type ProfileStackParamList = {
    ProfileScreen: ProfileScreenProps | undefined;
    EditProfile: EditProfileScreenProps | undefined;
    ForgotPassword: ForgotPasswordScreenProps | undefined;
    LoginScreen: LoginStackProps | undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="ProfileScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator >
    )
}

export default ProfileStack
