import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native'
import React from 'react'
import { COLORS, FONT_FAMILY } from '../themes/theme'
import { Colors } from 'react-native/Libraries/NewAppScreen'


const Login = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logoappp.png')}
                style={styles.logo}></Image>

            <Text style={styles.login}>Đăng Nhập</Text>

            <View style={styles.nhap}>
                <Text style={styles.sodienthoai}>Số điện thoại </Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder={'Nhập số điện thoại'}
                    placeholderTextColor={COLORS.DarkGrey}

                />

            </View>

            <View style={styles.nhap}>
                <Text style={styles.sodienthoai}>Mật khẩu </Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder={'Password'}
                    placeholderTextColor={COLORS.DarkGrey}
                // onChangeText={(valuePassword) => handleInputChangePassword(valuePassword)}
                // value={valuePassword}
                // secureTextEntry={!isIconActive} // khi isIconActive = true hiện thị password, ngược lại hiện thị text
                />
            </View>
            <View style={{}}>
                <Text style={styles.quenmatkhau}>Quên mật khẩu ? </Text>
            </View>

            <View >
                <Image style={{ width: 'auto', height: 50, marginTop:10 }} source={require('../../assets/images/btnlogin.png')} />
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50, }}>
                <View style={{ flex: 1, height: 1, backgroundColor: COLORS.MediumGray }} />
                <View>
                    <Text style={{ width: 50, textAlign: 'center', fontFamily: FONT_FAMILY.exo2_regular, color: COLORS.MediumGray, fontSize: 16, }}>Hoặc</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: COLORS.MediumGray }} />
            </View>


            {/* <View>
                <View style={{
                    borderBottomColor: COLORS.MediumGray,
                    borderBottomWidth: 1,
                    marginTop: 70,
                }}>
                </View>
                <Text style={{ fontFamily: FONT_FAMILY.exo2_regular, fontSize: 16, color: COLORS.MediumGray, }}>Hoặc</Text>
                <View style={{
                    borderBottomColor: COLORS.MediumGray,
                    borderBottomWidth: 1,
                }}>
                </View>
            </View> */}

            <View style={{ marginTop: 50, width: 300, alignSelf: 'center' }}>
                <Image style={{ width: 'auto', height: 58, }} source={require('../../assets/images/btngoogle.png')} />

            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                < Text style={{ fontFamily: FONT_FAMILY.exo2_regular, marginTop: 100, fontSize: 20, color: COLORS.Black }}>Chưa có tài khoản? </Text>
                < Text style={{ fontFamily: FONT_FAMILY.exo2_bold, fontSize: 20, color: COLORS.MainBlue, marginTop: 100 }}>Đăng ký </Text>

            </View>
        </View >

    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Blue_BG,
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    login: {
        fontFamily: FONT_FAMILY.exo2_bold,
        fontSize: 32,
        color: COLORS.Black,
        alignSelf: 'center',
        width: 163,
        height: 38,
    },
    sodienthoai: {
        fontFamily: FONT_FAMILY.exo2_bold,
        fontSize: 16,
        color: COLORS.Black,
        width: 96,
        height: 19,
        marginTop: 50

    },
    testFont: {
        fontFamily: FONT_FAMILY.exo2_medium,
        fontSize: 20,
        color: COLORS.MainBlue,
        // marginTop: 15,
    },
    logo: {
        borderRadius: 35,
        marginTop: 17,
        width: 80,
        height: 80,
    },
    nhap: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        width: 403,
        height: 80,

    },
    phonenumber: {
        paddingHorizontal: 27,
        width: 403,
        height: 55,
        borderColor: COLORS.Black,
    },
    TextInput: {
        color: COLORS.Black,
        // fontFamily: FONT_FAMILY.quicksand_regular,
        display: 'flex',
        width: 310,
        height: 48,
        paddingStart: 16,
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: COLORS.LightGray,
        backgroundColor: COLORS.White,
        marginTop: 8,
    },
    quenmatkhau: {
        paddingVertical: 5,
        marginStart: 210,
        fontFamily: FONT_FAMILY.exo2_medium,
        marginTop:50
    },
    background: {
        position: 'absolute',
        backgroundColor: COLORS.Blue_BG,
    },





})