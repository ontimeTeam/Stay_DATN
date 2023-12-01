import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONT_FAMILY } from '../themes/theme'

const ProfileScreen = () => {
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
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Chỉnh sửa</Text>
        </TouchableOpacity>
        <View style={styles.ccContainer}>
            <View style={styles.ccRow}>
                <Image source={require('../../assets/images/setting_icon.png')} style={styles.settingIcon} />
                <Text style={styles.Textpf}>Cài đặt </Text>
            </View>
            <View style={styles.ccRow}>
                <Image source={require('../../assets/images/method_icon.png')} style={styles.settingIcon} />
                <Text style={styles.Textpf}>Thêm phương thức thanh toán </Text>
            </View>
            <View style={styles.ccRow}>
                <Image source={require('../../assets/images/changepw_icon.png')} style={styles.settingIcon} />
                <Text style={styles.Textpf}>Đổi mật khẩu </Text>
            </View>
            <View style={styles.ccRow}>
                <Image source={require('../../assets/images/share_icon.png')} style={styles.settingIcon} />
                <Text style={styles.Textpf}>Chia sẻ </Text>
            </View>
            <View style={styles.ccRow}>
                <Image source={require('../../assets/images/logout_icon.png')} style={styles.settingIcon} />
                <Text style={styles.Textpf}>Đăng xuất </Text>
            </View>
        </View>
    </View>
    )
}

export default ProfileScreen

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
        marginTop: 20,
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
    ccContainer: {
        marginTop: 20,
    },
    ccRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    settingIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 15,
        marginTop:15,
    },
    Textpf: {
        fontFamily: FONT_FAMILY.exo2_medium,
        fontSize: 18,
        color: COLORS.Black,
        marginTop:15,
    },
})