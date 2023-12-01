import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { COLORS, FONT_FAMILY } from '../themes/theme'

const TestFont = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={require('../../assets/images/back-arrow.png')} style={styles.backArrow} />
                <Text style={styles.header}>Đổi mật khẩu</Text>
            </View>      
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/profile.png')} style={styles.circleImage} />
                <Text style={styles.name}>Rimuru Tempest</Text>
            </View>
            <Text style={styles.FontName}>Mật khẩu cũ </Text>
                <View style={styles.input}>
                    <Image source={require('../../assets/images/lock_icon.png')} style={styles.icon} />
                    <TextInput placeholder="Mật khẩu cũ" keyboardType='default' />
                </View>
            <View style={styles.inputContainer}>
                <Text style={styles.FontName}>Mật khẩu mới </Text>
                <View style={styles.input}>
                    <Image source={require('../../assets/images/lock_icon.png')} style={styles.icon} />
                    <TextInput placeholder="Mật khẩu mới" keyboardType='default' />
                </View>
            </View>
            <Text style={styles.FontName}>Xác nhận mật khẩu mới </Text>
                <View style={styles.input}>
                    <Image source={require('../../assets/images/lock_icon.png')} style={styles.icon} />
                    <TextInput placeholder="Xác nhận mật khẩu mới" keyboardType='default' />
                </View>
            
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Xác nhận</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default TestFont;

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
        marginRight: 10,
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
        minWidth: 175,
        maxWidth: 40,
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 12,
        height: 14.4,
        marginRight: 10,
    },
    inputContainer: {
        marginTop:0,
    },
});
