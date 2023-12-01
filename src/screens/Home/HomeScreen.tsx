import { StyleSheet, Text, View, Button } from 'react-native'
import * as React from 'react'
import { COLORS } from '../../themes/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/HomeStack';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>;

const HomeScreen: React.FC<PropsType> = props => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>HomeScreen</Text>
            <Button
                title="Go to TripScreen"
                onPress={() => navigation.navigate('TripScreen')} />
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