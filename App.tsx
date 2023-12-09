import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppContextProvider } from './src/resources/context/AppContext';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
    return (
        <AppContextProvider>
            <AppNavigation />
        </AppContextProvider>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})