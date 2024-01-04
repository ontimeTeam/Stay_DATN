import React, { useContext } from 'react'
import LoginStack from './LoginStack';
import BottomNavigation from './BottomNavigation';
import { AppContext } from '../resources/context/AppContext';
import { NavigationContainer } from '@react-navigation/native';

const AppNavigation = () => {
    const {isLoggedIn} = useContext(AppContext);
    return (
      <NavigationContainer>
        {/* {isLoggedIn ? <BottomNavigation /> : <LoginStack />} */}
        {isLoggedIn ? <LoginStack /> : <BottomNavigation />}
      </NavigationContainer>
    );
}

export default AppNavigation
