import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IC_BOOK, IC_BOOKon, IC_HOME, IC_HOMEon, IC_PROFILE, IC_PROFILEon, IC_TRIP, IC_TRIPon } from '../../assets';
import TripStack from './TripStack';
import HomeStack from './HomeStack';
import BookStack from './BookStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'white',
                tabBarLabelStyle: {
                    fontSize: 30,
                    fontFamily: 'Exo2-Regular',
                },
                tabBarStyle: {
                    height: 70,
                    paddingBottom: 5,
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                },

                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return (
                            focused ? (
                                <View
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 100,
                                        backgroundColor: '#4461F2',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        style={{
                                            width: 24,
                                            height: 24,
                                            tintColor: 'white',
                                        }}
                                        source={IC_HOMEon}
                                    />
                                </View>
                            ) : (
                                <Image
                                    style={{
                                        width: 24,
                                        height: 24,
                                        marginTop: 50,
                                        tintColor: 'black',
                                    }}
                                    source={IC_HOME}
                                />
                            )
                        );
                    } else if (route.name === 'Book') {
                        return (
                            focused ? (
                                <View
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 100,
                                        backgroundColor: '#4461F2',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        style={{
                                            width: 24,
                                            height: 24,
                                            tintColor: 'white',
                                        }}
                                        source={IC_BOOKon}
                                    />
                                </View>
                            ) : (
                                <Image
                                    style={{
                                        width: 24,
                                        height: 24,
                                        tintColor: focused ? 'blue' : 'black',
                                        marginTop: 50,
                                    }}
                                    source={IC_BOOK}
                                />
                            )

                        );
                    } else if (route.name === 'Trip') {
                        return (
                            focused ? (
                                <View
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 100,
                                        backgroundColor: '#4461F2',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        style={{
                                            width: 24,
                                            height: 24,
                                            tintColor: 'white',
                                        }}
                                        source={IC_TRIPon}
                                    />
                                </View>
                            ) : (
                                <Image
                                    style={{
                                        width: 24,
                                        height: 24,
                                        tintColor: focused ? 'blue' : 'black',
                                        marginTop: 50,
                                    }}
                                    source={IC_TRIP}
                                />
                            )
                        );
                    } else if (route.name === 'Profile') {
                        return (
                            focused ? (
                                <View
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 100,
                                        backgroundColor: '#4461F2',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        style={{
                                            width: 24,
                                            height: 24,
                                            tintColor: 'white',
                                        }}
                                        source={IC_PROFILEon}
                                    />
                                </View>
                            ) : (
                                <Image
                                    style={{
                                        width: 24,
                                        height: 24,
                                        tintColor: focused ? 'blue' : 'black',
                                        marginTop: 50,
                                    }}
                                    source={IC_PROFILE}
                                />
                            )
                        );
                    }
                },
            })}>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontFamily: 'Exo2-SemiBold',
                        marginTop: 20,
                        marginBottom: 15,
                    },
                }}
            />
            <Tab.Screen
                name="Book"
                component={BookStack}
                options={{
                    tabBarLabel: 'Đặt phòng',
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontFamily: 'Exo2-SemiBold',
                        marginTop: 20,
                        marginBottom: 15,
                    },
                }}
            />
            <Tab.Screen
                name="Trip"
                component={TripStack}
                options={{
                    tabBarLabel: 'Chuyến đi',
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontFamily: 'Exo2-SemiBold',
                        marginTop: 20,
                        marginBottom: 15,
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarLabel: 'Hồ sơ',
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontFamily: 'Exo2-SemiBold',
                        marginTop: 20,
                        marginBottom: 15,
                    },
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomNavigation

const styles = StyleSheet.create({})