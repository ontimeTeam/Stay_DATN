import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TestFont from './src/screens/TestFont'
import SplashScreen from './src/screens/SplashScreen'
import Trip from './src/screens/Trip'

const App = () => {
    return (
        <View>
            {/* <SplashScreen/> */}
            <Trip />
        </View>
    )
}

export default App

const styles = StyleSheet.create({

})