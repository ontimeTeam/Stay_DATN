import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import BookScreen from '../screens/BookScreen';
import TripScreen from '../screens/TripScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { IC_HOME, IC_HOMEon, IC_BOOK, IC_BOOKon, IC_TRIP, IC_TRIPon, IC_PROFILE, IC_PROFILEon } from '../../assets/images';
import { COLORS } from '../themes/theme';
import CustomTabBarButton from '../components/CustomTabBarButton';

type HomeScreenProps ={};
type BookScreenProps ={};
type TripScreenProps ={};
type ProfileScreenProps ={};

type RootTabParamList = {
  Home: HomeScreenProps | undefined;
  Book: BookScreenProps | undefined;
  Trip: TripScreenProps | undefined;
  ProfileNav: ProfileScreenProps | undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigations: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? IC_HOMEon : IC_HOME;
            } else if (route.name === 'Book') {
              iconName = focused ? IC_BOOKon : IC_BOOK;
            } else if (route.name === 'Trip') {
              iconName = focused ? IC_TRIPon : IC_TRIP;
            } else if (route.name === 'ProfileNav') {
              iconName = focused ? IC_PROFILEon : IC_PROFILE;
            }
            return <Image source={iconName} style={styles.ic_bottom} />;
          },
          tabBarLabel: ({ focused }) => (
            <Text style={{ marginTop: -24, fontFamily: 'Exo2-Medium', fontSize: 12, color: focused ? COLORS.MainBlue : 'gray' }}>
              {focused ? route.name : ''}
            </Text>
          ),
        })}>
        <Tab.Screen name='Home' component={HomeScreen} options={{ tabBarButton: props => <CustomTabBarButton {...props} /> }} />
        <Tab.Screen name='Book' component={BookScreen} options={{ tabBarLabel: 'Book', tabBarButton: props => <CustomTabBarButton {...props} /> }} />
        <Tab.Screen name='Trip' component={TripScreen} options={{ tabBarButton: props => <CustomTabBarButton {...props} /> }} />
        <Tab.Screen name='ProfileNav' component={ProfileScreen} options={{ tabBarButton: props => <CustomTabBarButton {...props} /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  ic_bottom: {
    width: 24,
    height: 24,
  },
});