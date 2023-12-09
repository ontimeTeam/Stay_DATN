import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONT_FAMILY } from '../themes/theme'

const TestFont = () => {
    const [otp, setOtp] = useState('') 

    const handleRegistration = () => {
        // Xử lý logic xác minh OTP ở đây
        if (otp.length !== 6) {
            // OTP không đủ 6 chữ số, hiển thị thông báo lỗi hoặc thực hiện hành động phù hợp
            return
        }
        // Xử lý logic xác minh OTP
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/imgOTP.png')} style={styles.logo} />
            <Text style={styles.header}>Xác nhận OTP</Text>
            <Text style={styles.testFont}>Nhập mã OTP gửi đến số điện thoại +84 90909900</Text>

            <View style={styles.otpContainer}>
                <TextInput
                    style={styles.otpInput}
                    maxLength={1}
                    onChangeText={text => {
                        if (text.length === 1) {
                            setOtp(otp + text)
                        }
                    }}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.otpInput}
                    maxLength={1}
                    onChangeText={text => {
                        if (text.length === 1) {
                            setOtp(otp + text)
                        }
                    }}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.otpInput}
                    maxLength={1}
                    onChangeText={text => {
                        if (text.length === 1) {
                            setOtp(otp + text)
                        }
                    }}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.otpInput}
                    maxLength={1}
                    onChangeText={text => {
                        if (text.length === 1) {
                            setOtp(otp + text)
                        }
                    }}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.otpInput}
                    maxLength={1}
                    onChangeText={text => {
                        if (text.length === 1) {
                            setOtp(otp + text)
                        }
                    }}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.otpInput}
                    maxLength={1}
                    onChangeText={text => {
                        if (text.length === 1) {
                            setOtp(otp + text)
                        }
                    }}
                    keyboardType="numeric"
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRegistration}>
                <Text style={styles.buttonText}>Xác nhận</Text>
            </TouchableOpacity>
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
        marginTop: 40,
        width: 220,
        height: 60,
        alignSelf: 'center',
        left: 10,
        fontFamily: FONT_FAMILY.exo2_bold,
        fontSize: 30,
        color: COLORS.Black,
    },
    testFont: {
        fontFamily: FONT_FAMILY.exo2_medium,
        fontSize: 15,
        color: '#000000',
        alignSelf: 'center',
        marginTop: 15,
        height: 300,
    },
    logo: {
        borderRadius: 20,
        marginTop: 20,
        alignSelf: 'center',
        width: 220,
        height: 220,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    otpInput: {
        fontFamily: FONT_FAMILY.exo2_medium,
        width: 40,
        height: 40,
        marginTop:-200,  
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        textAlign: 'center',
        borderRadius: 5 ,
    },
    button: {
        backgroundColor: COLORS.MainBlue,
        marginTop: 10,
        bottom:90,
        paddingVertical: 10,
        borderRadius: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: FONT_FAMILY.exo2_medium,
    },
})
