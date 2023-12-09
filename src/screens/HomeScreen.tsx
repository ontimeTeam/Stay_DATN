import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONT_FAMILY } from '../themes/theme'

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.text}>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        fontFamily: FONT_FAMILY.exo2_semibold,
        fontSize: 24,
        alignSelf: 'center'
    }
})