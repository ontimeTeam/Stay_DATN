import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes/theme';
import EditProfileScreen from './EditProfileScreen';
import { IC_BACK } from '../../../assets';
import Header from '../../components/header/Header';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../navigation/ProfileStack';
import { AppContext } from '../../resources/context/AppContext';

type PropsType = NativeStackScreenProps<ProfileStackParamList, 'ProfileScreen'>;
const ProfileScreen: React.FC<PropsType> = props => {
    const { navigation } = props;
    const { isLoggedIn, setLoggedIn } = React.useContext(AppContext);

    return (
        <View style={styles.container}>
            <Header
                isCheck={true}
                textCenter="ProfileScreen"
                iconLeft={IC_BACK}
            />
            <Pressable style={styles.btn} onPress={() => {
                setLoggedIn(false);
                console.log('isLoggedIn', isLoggedIn);
            }}>
                <Text style={styles.text}>Đăng xuất</Text>
            </Pressable>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn: {
        width: 200,
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20
    },
    text: {
        color: COLORS.White,
        fontFamily: 'Exo2-Regular',
        fontSize: 18
    }
})