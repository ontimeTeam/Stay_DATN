import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, ImageBackground } from 'react-native'
import { BG_SPLASH } from '../../assets'
import React from 'react'
import { COLORS, FONT_FAMILY } from '../themes/theme'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode='cover' style={styles.background} source={require('../../assets/images/LogoApp.png')} />
            <View style={styles.button}>
                <Pressable style={styles.btnIn}>
                    <Text style={styles.txtIn}>Đăng nhập</Text>
                </Pressable>
                <Pressable style={styles.btnUp}>
                    <Text style={styles.txtUp}>Đăng kí</Text>
                </Pressable>
            </View>
        </View>


    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    button: {
        position: 'absolute',
        gap: 58,
        flexDirection: 'row',
        paddingHorizontal: 20,
        top: 300,
        justifyContent: 'center',
    },
    btnIn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.MainBlue,
        width: 134,
        height: 50,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 20,
        elevation: 4,
    },
    txtIn: {
        fontFamily: 'Exo 2',
        fontSize: 17,
        color: COLORS.White
    },
    btnUp: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.White,
        width: 134,
        height: 50,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 20,
        elevation: 4
    },
    txtUp: {
        fontFamily: FONT_FAMILY.exo2_semibold,
        fontSize: 17,
        color: COLORS.MainBlue
    }
})