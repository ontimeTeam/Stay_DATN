import { StyleSheet, Text, View, Button } from 'react-native'
import * as React from 'react'
import TestFont from './src/screens/TestFont'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from './src/themes/theme';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen';
import BottomTabNavigations from './src/navigators/BottomTabNavigations';
import TripScreen from './src/screens/TripScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import BookScreen from './src/screens/BookScreen';


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='BottomTab' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name='BottomTab' component={BottomTabNavigations} />
                {/* <Stack.Screen name='Book' component={BookScreen}/>
                <Stack.Screen name='Trip' component={TripScreen}/>
                <Stack.Screen name='Profile' component={ProfileScreen}/> */}
                {/* <Stack.Screen name='AnimateTab' component={Animation}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App

const styles = StyleSheet.create({})