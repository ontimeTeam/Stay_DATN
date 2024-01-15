import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { COLORS } from '../../themes/theme';
import { AVATAR, AVATAR2, ICON_BLOG, ICON_CARD, ICON_DOIMATKHAU, ICON_LOGOUT, ICON_PEN, IC_BACK } from '../../../assets';
import Header from '../../components/header/Header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../navigation/ProfileStack';
import { AppContext } from '../../share-state/context/AppContext';

type PropsType = NativeStackScreenProps<ProfileStackParamList, 'ProfileScreen'>;
const ProfileScreen: React.FC<PropsType> = props => {
    const { navigation } = props;
    const { isLoggedIn, setLoggedIn } = React.useContext(AppContext);
    const { user } = useContext(AppContext);
    const onPressDoiMatKhau = () => {
        navigation.navigate('ForgotPassword');
    };
    const onPressDangXuat = () => {
        setLoggedIn(false);
    };
    const onPressChinhSach = () => {
        navigation.navigate('RuleScreen');
    };
    const onPressTheCuaToi = () => {
        navigation.navigate('MyCardScreen');
    };
    return (
        <View style={styles.container}>
            <Header
                styleContainer={{ backgroundColor: COLORS.White }}
                isCheck={false}
                textLeft="Thông tin người dùng"
                iconLeft={IC_BACK}
                eventLeft={() => navigation.goBack()}
            />
            <View style={styles.containerChildren} >
                <Image source={{uri: user?.img}} style={styles.imgAvatar} />
                <Text style={styles.txtName}>{user?.username}</Text>
                <Pressable style={styles.btn} onPress={() => navigation.navigate('EditProfile')}>
                    <Image source={ICON_PEN} style={styles.iconBtn} />
                    <Text style={styles.txtBtn}>Chỉnh sửa</Text>
                </Pressable>
                <View style={styles.line} />
                <Pressable style={styles.viewItem} onPress={onPressDoiMatKhau}>
                    <Image source={ICON_DOIMATKHAU} style={styles.iconItem} />
                    <Text style={styles.txtItem}>Đổi mật khẩu</Text>
                </Pressable>
                <Pressable style={styles.viewItem} onPress={onPressTheCuaToi}>
                    <Image source={ICON_CARD} style={styles.iconItem} />
                    <Text style={styles.txtItem}>Thẻ của tôi</Text>
                </Pressable>
                <Pressable style={styles.viewItem} onPress={onPressChinhSach}>
                    <Image source={ICON_BLOG} style={styles.iconItem} />
                    <Text style={styles.txtItem}>Điều khoản và chính sách</Text>
                </Pressable>
                <Pressable style={styles.viewItem} onPress={onPressDangXuat}>
                    <Image source={ICON_LOGOUT} style={styles.iconItem} />
                    <Text style={styles.txtItem}>Đăng xuất</Text>
                </Pressable>
            </View>
        </View>

    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerChildren: {
        flex: 1,
        backgroundColor: COLORS.White,
        paddingHorizontal: 20,
    },
    imgAvatar: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 100,
        borderColor: COLORS.MainBlue,
        borderWidth: 2,
    },
    txtName: {
        fontSize: 20,
        fontFamily: 'Exo2-Bold',
        alignSelf: 'center',
        marginTop: 10,
        color: COLORS.Black,
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        borderWidth: 1,
        borderColor: COLORS.MainBlue,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
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
    line: {
        width: '100%',
        height: 1,
        backgroundColor: COLORS.LightGray,
        marginVertical: 40,
    },
    viewItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'flex-start',
        gap: 20,
    },
    iconItem: {
        width: 25,
        height: 25,
    },
    txtItem: {
        fontSize: 18,
        fontFamily: 'Exo2-Regular',
        color: COLORS.Black,
    },
})