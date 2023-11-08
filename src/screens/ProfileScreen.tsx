import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { COLORS } from '../../src/themes/theme';
import EditProfileScreen from './EditProfileScreen';

const ProfileScreen = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>ProfileScreen</Text>
            {/* <Button
                title='edit profile'
                onPress={() => navigation.navigate('EditProfileScreen')} /> */}
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: COLORS.Black,
        fontFamily: 'Exo2-Regular',
        fontSize: 18
    }
})