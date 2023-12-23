import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { ProfileStackParamList } from '../../navigation/ProfileStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from '../../components/header/Header';
import { IC_BACK } from '../../../assets';
import { COLORS } from '../../themes/theme';
import Button from '../../components/button/Button';

type PropsType = NativeStackScreenProps<ProfileStackParamList, 'AddNewCardScreen'>;
const AddNewCardScreen: React.FC<PropsType> = props => {
  const { navigation } = props;
  const LuuThe = () => {
    navigation.goBack();
    console.log('Lưu thẻ',
    'Số thẻ: ' + 'xxxx xxxx xxxx xxxx',
    'Ngày hết hạn: ' + 'MM/YY',
    'Mã CCV: ' + '***'
  );
  }
  return (
    <ScrollView style={styles.container}>
      <Header
        textLeft="Thêm thẻ"
        iconLeft={IC_BACK}
        styleContainer={{ backgroundColor: COLORS.White }}
        eventLeft={() => navigation.goBack()}
      />
      <View style={styles.viewChildren}>
        <Text style={styles.text}>Số thẻ</Text>
        <TextInput
          style={styles.textInput}
          placeholder="xxxx xxxx xxxx xxxx"
          keyboardType="numeric"
        />
        <Text style={styles.text}>Ngày hết hạn</Text>
        <TextInput
          style={styles.textInput}
          placeholder="MM/YY"
        />
        <Text style={styles.text}>Mã CCV </Text>
        <TextInput
          style={styles.textInput}
          placeholder="***"
        />
      </View>
      <View style={{ marginTop: 80 , marginHorizontal: 20}}>
        <Button
          title="Lưu thẻ"
          onPress={LuuThe}
          styleText={{ color: COLORS.White }}
        />
      </View>
    </ScrollView>
  )
}

export default AddNewCardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Blue_BG,
  },
  viewChildren: {
    marginHorizontal: 16,
    marginTop: 16
  },
  text: {
    color: COLORS.Black,
    fontSize: 18,
    fontFamily: 'Exo2-SemiBold',
  },
  textInput: {
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 10,
    marginBottom: 40,
    paddingHorizontal: 15,
    paddingVertical: 14,
    fontFamily: 'Exo2-Regular',
    fontSize: 16,
    backgroundColor: COLORS.White,
  }

})