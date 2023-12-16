import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import TripScreen from '../screens/Home/TripScreen';
import HotelCityListScreen from '../screens/Home/HotelCityListScreen';
import ProfileScreen from '../screens/Home/ProfileScreen';
import HotelDetailScreen from '../screens/Home/HotelDetailScreen';
import RoomDetailScreen from '../screens/Home/RoomDetailScreen';
import RoomListScreen from '../screens/Home/RoomListScreen';
import PaymentScreen from '../screens/Home/PaymentScreen';
import BillScreen from '../screens/Home/BillScreen';

type HomeScreenProps = {};
type TripScreenProps = {};
type HotelDetailScreenProps = {};
type RoomDetailScreenProps = {};
type HotelCityListScreenProps = {};
type ProfileScreenProps = {};
type RoomListScreenProps = {};
type PaymentScreenProps = {};
type BillScreenProps = {};

export type HomeStackParamList = {
    HomeScreen: HomeScreenProps | undefined;
    TripScreen: TripScreenProps | undefined;
    HotelCityListScreen: HotelCityListScreenProps | undefined;
    ProfileScreen: ProfileScreenProps | undefined;
    HotelDetailScreen: HotelDetailScreenProps | undefined;
    RoomDetailScreen: RoomDetailScreenProps | undefined;
    RoomListScreen: RoomListScreenProps | undefined;
    PaymentScreen: PaymentScreenProps | undefined;
    BillScreen: BillScreenProps | undefined;
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
            <Stack.Screen name="HotelCityListScreen" component={HotelCityListScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="HotelDetailScreen" component={HotelDetailScreen} />
            <Stack.Screen name="RoomDetailScreen" component={RoomDetailScreen} />
            <Stack.Screen name="RoomListScreen" component={RoomListScreen} />
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen name="BillScreen" component={BillScreen} />
        </Stack.Navigator >
    )
}

export default HomeStack
