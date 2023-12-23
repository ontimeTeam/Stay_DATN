import { ImageBackground, ImageSourcePropType, StatusBar, StyleSheet } from 'react-native'
import React from 'react'

export interface BackgroundProps {
  children: React.ReactNode;
  source: ImageSourcePropType; 
}

const Background: React.FC<BackgroundProps> = (props) => {
  const { children, source } = props;
  return (
    <ImageBackground resizeMode="cover" source={source} style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />
      {children}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
  },
})

export default Background
