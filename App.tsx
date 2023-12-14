import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppContextProvider } from './src/resources/context/AppContext';
import AppNavigation from './src/navigation/AppNavigation';
import Test from './src/container/Test';

const App = () => {
    return (
        // <AppContextProvider>
        //     <AppNavigation />
        // </AppContextProvider>
        <Test/>
    )
}

export default App

const styles = StyleSheet.create({
})