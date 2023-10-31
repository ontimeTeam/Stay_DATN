import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, FONT_FAMILY } from '../themes/theme'
import Header from '../components/header/Header'


const TestFont = () => {
    return (
        <View style={styles.container}>
            <Header/>
                <Text style={styles.header}>TestFont</Text>
                <Text style={styles.testFont}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                <Image
                    source={require('../../assets/images/LogoApp.png')}
                    style={styles.logo}></Image>
        </View>
    )
}

export default TestFont

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Blue_BG,
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    header: {
        fontFamily: FONT_FAMILY.exo2_bold,
        fontSize: 32,
        color: COLORS.Black,
    },
    testFont: {
        fontFamily: FONT_FAMILY.exo2_medium,
        fontSize: 20,
        color: COLORS.MainBlue,
        marginTop: 15,
    },
    logo: {
        borderRadius: 15,
        marginTop: 20,
        alignSelf: 'center',
        width: 200,
        height: 200,
    }
})