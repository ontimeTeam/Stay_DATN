import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/Login/SplashScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Login/RegisterScreen';
import OTPScreen from '../screens/Login/OTPScreen';

type SplashScreenProps = {};
type LoginScreenProps = {};
type RegisterScreenProps = {};
type OTPScreenProps = {};

export type LoginStackParamList = {
    SplashScreen: SplashScreenProps | undefined;
    LoginScreen: LoginScreenProps | undefined;
    RegisterScreen: RegisterScreenProps | undefined;
    OTPScreen: OTPScreenProps | undefined;
};

const Stack = createNativeStackNavigator<LoginStackParamList>();

const LoginStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="OTPScreen" component={OTPScreen} />
        </Stack.Navigator >
    )
}

export default LoginStack

const styles = StyleSheet.create({})