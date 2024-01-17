import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppContextProvider } from './src/share-state/context/AppContext';
import AppNavigation from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';
import { store } from './src/share-state/redux/stores';

const App = () => {
    return (
        <View style={{ flex: 1 }}>
                <AppContextProvider>
                    <AppNavigation />
                </AppContextProvider>
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