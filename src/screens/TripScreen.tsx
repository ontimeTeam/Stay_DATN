import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { COLORS } from '../../src/themes/theme';

const TripScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>TripScreen</Text>
        </View>
    )
}

export default TripScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: COLORS.Black,
        fontFamily: 'Exo2-Regular',
        fontSize: 18
    }
})