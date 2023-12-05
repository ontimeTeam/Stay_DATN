import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes/theme';
import { IC_BACK } from '../../../assets';
import Header from '../../components/header/Header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../navigation/ProfileStack';
import { AppContext } from '../../resources/context/AppContext';
import Button from '../../components/button/Button';

type PropsType = NativeStackScreenProps<ProfileStackParamList, 'ProfileScreen'>;
const ProfileScreen: React.FC<PropsType> = props => {
    const { navigation } = props;
    const { isLoggedIn, setLoggedIn } = React.useContext(AppContext);

    return (
        <View style={styles.container}>
            <Header
                styleContainer={{ backgroundColor: COLORS.White }}
                isCheck={true}
                textCenter="Thông tin người dùng"
                iconLeft={IC_BACK}
            />
            <View style={styles.containerChildren} >
                <Button
                    title="Chỉnh sửa"
                    onPress={() => navigation.navigate('EditProfile')}
                />
                <Button
                    title="Đổi mật khẩu"
                    onPress={() => navigation.navigate('ForgotPassword')}
                />
                <Button
                    title="Thẻ của tôi"
                    onPress={() => navigation.navigate('MyCardScreen')}
                />
                <Button
                    title="Điểu khoản và chính sách"
                    onPress={() => navigation.navigate('RuleScreen')}
                />
                <Button
                    title="Đăng xuất"
                    onPress={() => setLoggedIn(false)}
                />
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
    }
})