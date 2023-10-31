import { StyleSheet, ImageSourcePropType, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes/theme';

export interface BackgroundProps {
    children: React.ReactNode;
    source: ImageSourcePropType;
}

const Background: React.FC<BackgroundProps> = (props) => {
    const { children, source } = props;
    return (
        <ImageBackground resizeMode='cover' source={source} style={styles.background}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={COLORS.White}
                translucent
            />    
                {children}
        </ImageBackground>
    )
}

export default Background

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
})