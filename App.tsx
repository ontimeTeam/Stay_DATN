import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TestFont from './src/screens/TestFont'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNavigations from './src/navigation/BottomTabNavigations';
import { NavigationContainer } from '@react-navigation/native';
import OTPScreen from './src/screens/OTPScreen'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
    return (
        // <NavigationContainer>
        //     <Stack.Navigator screenOptions={{ headerShown: false }}>
        //         <Stack.Screen name="BottomTabs" component={BottomTabNavigations} options={{ animation: 'default' }} />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <View >
            <OTPScreen/>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})