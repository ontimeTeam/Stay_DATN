import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'
import { COLORS, FONT_FAMILY } from '../themes/theme'


const Login = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/LogoApp.png')}
            style={styles.logo}></Image>       
            <Text style={styles.login}>Đăng Nhập</Text>
            
            <View style={styles.nhap}>
            <Text style={styles.sodienthoai}>Số điện thoại </Text>
            </View>
       
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.Blue_BG,
        paddingVertical: 15,
        paddingHorizontal: 20,
       
    },
    login:{
        fontFamily: FONT_FAMILY.exo2_bold,
        fontSize: 32,
        color: COLORS.Black,
        alignSelf: 'center',
        width: 163,
        height: 38,
    },
    sodienthoai:{
        fontFamily: FONT_FAMILY.exo2_bold,
        fontSize: 16,
        color: COLORS.Black,
        width: 96,
        height: 19,
    },
    testFont:{
        fontFamily: FONT_FAMILY.exo2_medium,
        fontSize: 20,
        color: COLORS.MainBlue,
        marginTop: 15,
    },
    logo:{
        borderRadius: 35,
        marginTop: 37,
        width: 80,
        height: 80,
    },
    nhap:{
        paddingVertical: 35,
        paddingHorizontal: 35,
        width: 403,
        height: 215,
    },
    phonenumber:{
        paddingHorizontal: 27,
        width: 403,
        height: 55,
        borderColor:COLORS.Black,
    },
   
    

})