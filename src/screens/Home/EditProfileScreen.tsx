import { StyleSheet, Text, View, Button, TextInput, Image, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { ProfileStackParamList } from '../../navigation/ProfileStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from '../../components/header/Header';
import { AVATAR_UP, ICON_CHECK_WHITE, ICON_PEN, IC_BACK } from '../../../assets';
import { COLORS, FONT_FAMILY } from '../../themes/theme';
import { AppContext } from '../../share-state/context/AppContext';
import FastImage from 'react-native-fast-image';

type PropsType = NativeStackScreenProps<ProfileStackParamList, 'EditProfile'>;
const EditProfileScreen: React.FC<PropsType> = props => {
    const { navigation } = props;
    const { user } = useContext(AppContext);
    return (
        <View style={styles.container}>
            <View style={{ paddingVertical: -20, paddingHorizontal: -20 }}>
                <Header
                    iconLeft={IC_BACK}
                    textLeft='Chỉnh sửa thông tin'
                    eventLeft={() => navigation.goBack()}
                />
            </View>

            <View style={styles.imageContainer}>
                <FastImage source={{uri: user?.img}} style={styles.circleImage} />
            </View>

            <View style={{ paddingHorizontal: 15 }}>
                <Text style={styles.FontName}>Tên</Text>
                <TextInput style={styles.input} placeholder={user?.username} />
                <View style={styles.inputContainer}>
                    <Text style={styles.FontName}>Email</Text>
                    <TextInput style={styles.input} placeholder={user?.email} keyboardType='email-address' />
                </View>
                <Text style={styles.FontName}>Ngày, tháng, năm sinh</Text>
                <TextInput style={styles.input} placeholder="03/08/2003" />

                <Pressable style={styles.btn} onPress={() => navigation.navigate('EditProfile')}>
                    <Image source={ICON_CHECK_WHITE} style={styles.iconBtn} />
                    <Text style={styles.txtBtn}>Lưu thay đổi</Text>
                </Pressable>
            </View>


        </View>
    )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White,
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    imageContainer: {
        alignItems: 'center',
    },
    circleImage: {
        width: 152,
        height: 152,
        marginTop: 20,
    },
    name: {
        fontFamily: FONT_FAMILY.exo2_bold,
        fontSize: 22,
        color: COLORS.Black,
        marginTop: 15,
    },
    FontName: {
        fontFamily: FONT_FAMILY.exo2_bold,
        fontSize: 16,
        color: COLORS.Black,
        marginTop: 10,
    },
    input: {
        height: 44,
        marginTop: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.LightGray,
        fontFamily: FONT_FAMILY.exo2_medium,
        color: COLORS.Black,
        fontSize: 14
    },
    inputContainer: {
        marginTop: 0,
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 40,
        borderWidth: 1,
        borderColor: COLORS.MainBlue,
        borderRadius: 10,
        paddingVertical:10,
        paddingHorizontal:30,
        backgroundColor: COLORS.MainBlue,
        gap: 10,
    },
    iconBtn: {
        width: 20,
        height: 20,
    },
    txtBtn: {
        fontSize: 16,
        fontFamily: 'Exo2-Bold',
        color: COLORS.White,
    },
})