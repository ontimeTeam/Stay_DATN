import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { Children } from 'react'
import { COLORS } from '../themes/theme';

// interface CustomTab :{

// }

function CustomTabBarButton(props : any) {

    const { children, accessibilityState, onPress } = props;

    if (accessibilityState.selected) {
        return (
            <View style={styles.bottomTab}>
                <TouchableOpacity onPress={onPress} style={styles.activeBtn}>
                    <Text>{children}</Text>
                </TouchableOpacity>
            </View>

        );
    } else {
        <TouchableOpacity onPress={onPress} style={styles.inActiveBtn}>
            <Text>{children}</Text>
        </TouchableOpacity>;
    }
}

export default CustomTabBarButton

const styles = StyleSheet.create({
    bottomTab: {
        flex: 1,
        alignItems: 'center'
    },
    activeBtn: {
        position: 'absolute',
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: COLORS.MainBlue
    },
    inActiveBtn: {
        flex: 1,
        backgroundColor: COLORS.White
    }
});