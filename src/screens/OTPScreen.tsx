import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONT_FAMILY } from '../themes/theme'
import Background from '../components/background/Background'
import Button from '../components/button/Button'
import { BG_LOGIN } from '../../assets'

const OTPScreen = () => {
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
        <Background source={BG_LOGIN}>
            <SafeAreaView style={styles.container}>
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
                {/* <TouchableOpacity style={styles.button} onPress={handleRegistration}>
                    <Text style={styles.buttonText}>Xác nhận</Text>
                </TouchableOpacity> */}
                <View style={{ alignItems: 'center' }}>
                    <Button
                        onPress={handleRegistration}
                        title='Xác nhận'
                    />
                </View>

            </SafeAreaView>
        </Background>
    )
}

export default OTPScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    header: {
        marginTop: 40,
        width: 'auto',
        height: 60,
        alignSelf: 'center',
        fontFamily: FONT_FAMILY.exo2_semibold,
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
        marginTop: 30,
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
        marginTop: -200,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        textAlign: 'center',
        borderRadius: 5,
    },
    button: {
        backgroundColor: COLORS.MainBlue,
        marginTop: 10,
        bottom: 90,
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
