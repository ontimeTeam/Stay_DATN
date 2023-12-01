import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import TripScreen from '../screens/Home/TripScreen';

type HomeScreenProps = {};
type TripScreenProps = {};

export type HomeStackParamList = {
    HomeScreen: HomeScreenProps | undefined;
    TripScreen: TripScreenProps | undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();
const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="TripScreen" component={TripScreen} />
        </Stack.Navigator >
    )
}

export default HomeStack
