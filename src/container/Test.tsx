import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../components/button/Button';

function GoogleSignIn() {
  return (
    <Button
      title="Sign in with Google"
      onPress={() => console.log('Sign in with Google')}
    />
  );
}

const Test = () => {
  return (
    <View>
      <GoogleSignIn />
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})