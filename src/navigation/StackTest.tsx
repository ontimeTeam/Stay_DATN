import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TripStack from './TripStack';
import BookStack from './BookStack';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';

type HomeScreenProps = {};
type BookScreenProps = {};
type ProfileScreenProps = {};
type TripScreenProps = {};

export type StackParamList = {
    Home: HomeScreenProps | undefined;
    Book: BookScreenProps | undefined;
    Profile: ProfileScreenProps | undefined;
    Trip: TripScreenProps | undefined;
};
const Stack = createStackNavigator<StackParamList>();


const StackTest = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeStack} />
            <Stack.Screen name="Book" component={BookStack} />
            <Stack.Screen name="Profile" component={ProfileStack} />
            <Stack.Screen name="Trip" component={TripStack} />
        </Stack.Navigator >
    )
}

export default StackTest
