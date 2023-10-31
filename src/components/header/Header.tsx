import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FONT_FAMILY, COLORS } from '../../themes/theme'
import { IC_BACK } from '../../../assets'

const Header = () => {
    return (
        <View style={styles.header}>
            <Image style={styles.back} source={IC_BACK} />
            <Text style={styles.headerName}>Thanh toan</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        marginStart: 25,
        marginVertical: 20,
        gap: 8
    },
    back: {
        width: 28,
        height: 28
    },
    headerName: {
        fontFamily: FONT_FAMILY.exo2_semibold,
        fontSize: 24,
        color: COLORS.Black,
    }
})


