import React, { useContext } from 'react'
import LoginStack from './LoginStack';
import BottomNavigation from './BottomNavigation';
import { AppContext } from '../share-state/context/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

const AppNavigation = () => {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>

        {isLoggedIn ? <BottomNavigation /> : <LoginStack />}
        {/* {isLoggedIn ? <LoginStack /> : <BottomNavigation />} */}
      </NavigationContainer>
    </View>
  );
}

export default AppNavigation
