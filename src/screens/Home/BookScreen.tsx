import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from '../../components/header/Header';
import { IC_BACK } from '../../../assets';
import { BookStackParamList } from '../../navigation/BookStack';

type PropsType = NativeStackScreenProps<BookStackParamList, 'BookScreen'>;
const BookScreen: React.FC<PropsType> = props => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Header
                isCheck={true}
                textCenter="BookScreen"
                iconLeft={IC_BACK}
                eventLeft={() => navigation.goBack()}
            />
            <Pressable style={styles.btn} onPress={() => { navigation.navigate('HomeScreen') }}>
                <Text style={styles.text}>BookScreen</Text>
            </Pressable>
        </View>
    );
}

export default BookScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn: {
        width: 200,
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20
    },
    text: {
        color: COLORS.White,
        fontFamily: 'Exo2-Regular',
        fontSize: 18
    }
})