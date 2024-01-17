import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TripScreen from '../screens/Home/TripScreen';
import RoomListScreen from '../screens/Home/RoomListScreen';
import BillScreen from '../screens/Home/BillScreen';
import BookScreen from '../screens/Home/BookScreen';
import BillScreenget from '../screens/Home/BillScreentget';

type TripScreenProps = {};
type RoomListScreenProps = {};
type BillScreenProps = {};
type BookScreenProps = {};
type BillScreengetProps = {};

export type TripStackParamList = {
    TripScreen: TripScreenProps | undefined;
    RoomListScreen: RoomListScreenProps | undefined;
    BillScreen: BillScreenProps | undefined;
    BookScreen: BookScreenProps | undefined;
    BillScreenget: BillScreengetProps | undefined;
};

const Stack = createNativeStackNavigator<TripStackParamList>();

const TripStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="TripScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="TripScreen" component={TripScreen} />
            <Stack.Screen name="RoomListScreen" component={RoomListScreen} />
            <Stack.Screen name="BillScreen" component={BillScreen} />
            <Stack.Screen name="BookScreen" component={BookScreen} />
            <Stack.Screen name="BillScreenget" component={BillScreenget} />
        </Stack.Navigator >
    )
}

export default TripStack
