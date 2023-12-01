import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import { COLORS, FONT_FAMILY } from '../themes/theme'

const TestFont = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={require('../../assets/images/back-arrow.png')} style={styles.backArrow} />
                <Text style={styles.header}>Thông tin người dùng</Text>
            </View>      
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/profile.png')} style={styles.circleImage} />
                <Text style={styles.name}>Rimuru Tempest</Text>
            </View>
            <Text style={styles.FontName}>Tên</Text>
                <TextInput style={styles.input} placeholder="Rimuru Tempest" />
            <View style={styles.inputContainer}>
            <Text style={styles.FontName}>Email</Text>
                <TextInput style={styles.input} placeholder="rimuru@gmail.com" keyboardType='email-address' />
            </View>
            <Text style={styles.FontName}>Ngày, tháng, năm sinh</Text>
                <TextInput style={styles.input} placeholder="03/08/2003" />
            
            <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Lưu thay đổi</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default TestFont

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Blue_BG,
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    header: {
        fontFamily: FONT_FAMILY.exo2_bold,
        fontSize: 24,
        color: COLORS.Black,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 0,
        marginRight: 0,
    },
    backArrow: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
        marginRight: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    circleImage: {
        width: 152,
        height: 152,
        borderRadius: 50,
        marginTop:30,
    },
    name: {
        fontFamily: FONT_FAMILY.exo2_bold,
        fontSize: 22,
        color: COLORS.Black,
        marginTop: 15,
    },
    buttonContainer: {
        backgroundColor: COLORS.MainBlue,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 50,
        alignItems: 'center',
        justifyContent:'center',
        minWidth: 175, // Chiều rộng tối thiểu của nút button
        maxWidth: 40, // Chiều rộng tối đa của nút button
        marginLeft:100,
    }, 
    buttonText: {
        fontFamily: FONT_FAMILY.exo2_bold,
        fontSize: 18,
        color: COLORS.White,
    },
    FontName: {
        fontFamily: FONT_FAMILY.exo2_bold,
        fontSize: 16,
        color: '#111111',
        marginTop: 10,
    },
    input: {
        backgroundColor: 'yellow',
        height: 40,
        marginTop: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    inputContainer: {
        marginTop:0,
    },
    // btsave: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     marginTop: 15,
    // },
})
