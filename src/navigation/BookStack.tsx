import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookScreen from '../screens/Home/BookScreen';
import PaymentScreen from '../screens/Home/PaymentScreen';
import RoomListScreen from '../screens/Home/RoomListScreen';
import RoomDetailScreen from '../screens/Home/RoomDetailScreen';
import HotelDetailScreen from '../screens/Home/HotelDetailScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import BillScreen from '../screens/Home/BillScreen';

type BookScreenProps = {};
type HotelDetailScreenProps = {};
type PaymentScreenProps = {};
type RoomDetailScreenProps = {};
type RoomListScreenProps = {};
type HomeScreenProps = {};
type BillScreenProps = {};

export type BookStackParamList = {
    BookScreen: BookScreenProps | undefined;
    HotelDetail: HotelDetailScreenProps | undefined;
    RoomDetail: RoomDetailScreenProps | undefined;
    RoomList: RoomListScreenProps | undefined;
    Payment: PaymentScreenProps | undefined;
    HomeScreen: HomeScreenProps | undefined;
    BillScreen: BillScreenProps | undefined;
};

const Stack = createNativeStackNavigator<BookStackParamList>();

const BookStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="BookScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="BookScreen" component={BookScreen} />
            <Stack.Screen name="HotelDetail" component={HotelDetailScreen} />
            <Stack.Screen name="RoomDetail" component={RoomDetailScreen} />
            <Stack.Screen name="RoomList" component={RoomListScreen} />
            <Stack.Screen name="Payment" component={PaymentScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="BillScreen" component={BillScreen} />
        </Stack.Navigator >
    )
}

export default BookStack
