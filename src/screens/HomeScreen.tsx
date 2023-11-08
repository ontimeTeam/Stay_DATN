import { StyleSheet, Text, View, Button } from 'react-native'
import * as React from 'react'
import { COLORS } from '../../src/themes/theme';
import BottomTabNavigations from '../navigators/BottomTabNavigations';
import BookScreen from './BookScreen';

const HomeScreen = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>HomeScreen</Text>
            <Button
                title="Go to Book"
                onPress={() => navigation.navigate(BookScreen)} />
        </View>
    )
}

export default HomeScreen

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