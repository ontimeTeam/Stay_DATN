import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PhoneInput from 'react-native-phone-number-input';

const TestFont = () => {
  return (
    <View style={styles.container}>
       <PhoneInput 
        defaultCode="VN"
        placeholder="0123456789"
        containerStyle={styles.phoneInputContainer}
        textInputStyle={styles.phoneInputText}
      />
    </View>
  );
};

export default TestFont;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  phoneInputContainer: {
    height: 60, // Điều chỉnh chiều cao theo ý muốn
    width: 350, // Điều chỉnh chiều rộng theo ý muốn
    marginTop:10,
  },
  phoneInputText: {
    fontSize: 14, // Điều chỉnh kích thước phông chữ theo ý muốn
    marginBottom:-5,
  },
});
