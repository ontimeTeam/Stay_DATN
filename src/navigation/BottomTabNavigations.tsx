import { Image, ImageSourcePropType, ImageURISource, StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import BookScreen from '../screens/BookScreen';
import TripScreen from '../screens/TripScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { IC_HOME, IC_HOMEon, IC_BOOK, IC_BOOKon, IC_TRIP, IC_TRIPon, IC_PROFILE, IC_PROFILEon } from '../../assets';
import { COLORS } from '../themes/theme';
import { Screen } from 'react-native-screens';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// const StackHome = () => {
//     return (
//         <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
//             <Stack.Screen name='Home' component={HomeScreen} />
//         </Stack.Navigator>
//     )
// }

console.log(Screen);

const BottomTabNavigations = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarHideOnKeyboard: true,
                // tabBarShowLabel: false,
                tabBarStyle: styles.bottomTab,
                tabBarIcon: ({ color, size, focused }) => {
                    if (route.name == 'Home') {
                        if (focused) {
                            return <Image source={IC_HOMEon} style={styles.ic_bottom} />
                        } else {
                            return <Image source={IC_HOME} style={styles.ic_bottom} />
                        }
                    } else if (route.name == 'Book') {
                        if (focused) {
                            return <Image source={IC_BOOKon} style={styles.ic_bottom} />
                        } else {
                            return <Image source={IC_BOOK} style={styles.ic_bottom} />
                        }
                    } else if (route.name == 'Trip') {
                        if (focused) {
                            return <Image source={IC_TRIPon} style={styles.ic_bottom} />
                        } else {
                            return <Image source={IC_TRIP} style={styles.ic_bottom} />
                        }
                    } else if (route.name == 'Profile') {
                        if (focused) {
                            return <Image source={IC_PROFILEon} style={styles.ic_bottom} />
                        } else {
                            return <Image source={IC_PROFILE} style={styles.ic_bottom} />
                        }
                    }
                },
                tabBarLabel: ({ focused }) => {
                    return <Text style={{ marginTop: -24, fontFamily: 'Exo2-Medium', fontSize: 12, color: COLORS.MainBlue }}>
                        {focused ? route.name : ""}
                    </Text>
                },
            })} >
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Book' component={BookScreen} />
            <Tab.Screen name='Trip' component={TripScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator >
    );
};
export default BottomTabNavigations
const styles = StyleSheet.create({
    ic_bottom: {
        width: 24,
        height: 24
    },
    bottomTab: {
        height: 70,
        // backgroundColor: COLORS.transparent,
        position: 'absolute'
    }
});