import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'

type TextViewBoldProps = {
    boldTexts: string[];
    text: string;
    styleBold?: StyleProp<TextStyle>;
    styleView?: StyleProp<ViewStyle>;
    styleText?: StyleProp<TextStyle>;
}

const TextViewBold: React.FC<TextViewBoldProps> = (props) => {
    const { boldTexts, text } = props;
    const getTextWithBoldAndUpper = (text: string, boldTexts: string[]) => {
        const regex = new RegExp(`(${boldTexts.join("|")})`, "gi");
        const parts = text.split(regex);
        return parts.map((part, index) => {
            const isBoldAndUpper = boldTexts.includes(part);
            return isBoldAndUpper ? (
                <Text
                    key={index}
                    style={[styles.textBold, props.styleBold]}
                >
                    {part}
                </Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };
    return (
        <View style={[styles.container, props.styleView]}>
            <Text style={[styles.text, props.styleText]}>
                {getTextWithBoldAndUpper(text, boldTexts)}
            </Text>
        </View>
    )
}

export default TextViewBold

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    textBold: {
        fontFamily: "Exo2-Bold",
        fontSize: 16,
        color: 'black',
    },
    text: {
        fontFamily: 'Exo2-Regular',
        fontSize: 16,
        color: 'black',
    },
});