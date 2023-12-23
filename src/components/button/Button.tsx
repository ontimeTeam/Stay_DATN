import { Dimensions, Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native'
import React from 'react'
export type ButtonProps = {
    title: string;
    stylePressable?: StyleProp<ViewStyle>;
    styleText?: StyleProp<TextStyle>;
    onPress?: (screen?: string) => void;
};

const Button: React.FC<ButtonProps> = (props) => {
    const { title, onPress } = props;

    const handlePress = () => {
        onPress && onPress();
    };
    return (
        <Pressable
            onPress={handlePress}
            style={[styles.container, props.stylePressable]}>
            <Text style={[styles.styleText, props.styleText]}>
                {title}
            </Text>
        </Pressable>
    );
};
export default Button

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 55,
        paddingVertical: 14,
        borderRadius: 24,
        backgroundColor: '#4461F2',
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
    styleText: {
        fontSize: 18,
        letterSpacing: -0.2,
        lineHeight: 25.2,
        fontFamily: "Exo2-Bold",
        color: 'white',
        textAlign: "center",
    }
})