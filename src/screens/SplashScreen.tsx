import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, ImageBackground } from 'react-native'
import { BG_SPLASH } from '../../assets'
import React from 'react'
import { COLORS, FONT_FAMILY } from '../themes/theme'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={{ width: '100%', height: '100%' }} source={BG_SPLASH} />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.Blue_BG,
    },
})