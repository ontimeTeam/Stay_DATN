import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from '../../src/themes/theme';

function BookScreen({ navigation }: { navigation: any }): React.JSX.Element {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>BookScreen</Text>
            <Button
                title="Go to Trip"
                onPress={() => navigation.navigate('TripScreen')} />
        </View>
    );
}

export default BookScreen

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