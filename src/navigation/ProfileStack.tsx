import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/Home/ProfileScreen';
import EditProfileScreen from '../screens/Home/EditProfileScreen';
import ForgotPasswordScreen from '../screens/Home/ForgotPasswordScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import MyCardScreen from '../screens/Home/MyCardScreen';
import AddNewCardScreen from '../screens/Home/AddNewCardScreen';
import RuleScreen from '../screens/Home/RuleScreen';

type ProfileScreenProps = {};
type EditProfileScreenProps = {};
type ForgotPasswordScreenProps = {};
type LoginStackProps = {};
type MyCardScreenProps = {};
type AddNewCardScreenProps = {};
type RuleScreenProps = {};

export type ProfileStackParamList = {
    ProfileScreen: ProfileScreenProps | undefined;
    EditProfile: EditProfileScreenProps | undefined;
    ForgotPassword: ForgotPasswordScreenProps | undefined;
    LoginScreen: LoginStackProps | undefined;
    MyCardScreen: MyCardScreenProps | undefined;
    AddNewCardScreen: AddNewCardScreenProps | undefined;
    RuleScreen: RuleScreenProps | undefined;
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
            <Stack.Screen name="MyCardScreen" component={MyCardScreen} />
            <Stack.Screen name="AddNewCardScreen" component={AddNewCardScreen} />
            <Stack.Screen name="RuleScreen" component={RuleScreen} />
        </Stack.Navigator >
    )
}

export default ProfileStack
