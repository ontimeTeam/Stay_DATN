import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { ProfileStackParamList } from '../../navigation/ProfileStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Header from '../../components/header/Header';
import { AVATAR2, ICON_CLOCK, ICON_LOCK, ICON_SWIMMIMG_POOL, IC_BACK } from '../../../assets';
import { COLORS } from '../../themes/theme';
import { Pressable } from 'react-native';
import Button from '../../components/button/Button';

type PropsType = NativeStackScreenProps<ProfileStackParamList, 'ForgotPassword'>;
const ForgotPasswordScreen: React.FC<PropsType> = props => {
  const { navigation } = props;
  const [text, setText] = React.useState('');
  const [text1, setText1] = React.useState('');
  const [text2, setText2] = React.useState('');
  return (
    <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
      <Header
        styleContainer={{ backgroundColor: COLORS.White }}
        isCheck={false}
        textLeft="Đổi mật khẩu"
        iconLeft={IC_BACK}
        eventLeft={() => navigation.goBack()}
      />
      <Image source={AVATAR2} style={styles.imgAvatar} />
      <View style={styles.viewInput}>
        <Text style={styles.txtTitle}>Mật khẩu cũ</Text>
        <Text style={styles.txtTitlered}>*</Text>
      </View>
      <View style={styles.inputContainer}>
        <Pressable >
          <Image source={ICON_LOCK} style={styles.iconSearch} />
        </Pressable>
        <TextInput
          value={text}
          placeholder="Mật khẩu cũ"
          style={[
            styles.input,
            {
              fontFamily: text ? 'Exo2-Regular' : 'Exo2-Bold',
              fontSize: text ? 14 : 16,
              color: text ? COLORS.Black : "#C4C4C4",
            },
          ]}
          onChangeText={text => setText(text)}
        />
      </View>
      <View style={styles.viewInput}>
        <Text style={styles.txtTitle}>Mật khẩu mới</Text>
        <Text style={styles.txtTitlered}>*</Text>
      </View>
      <View style={styles.inputContainer}>
        <Pressable >
          <Image source={ICON_LOCK} style={styles.iconSearch} />
        </Pressable>
        <TextInput
          value={text1}
          placeholder="Mật khẩu mới"
          style={[
            styles.input,
            {
              fontFamily: text ? 'Exo2-Regular' : 'Exo2-Bold',
              fontSize: text ? 14 : 16,
              color: text ? COLORS.Black : "#C4C4C4",
            },
          ]}
          onChangeText={text1 => setText1(text1)}
        />
      </View>
      <View style={styles.viewInput}>
        <Text style={styles.txtTitle}>Xác nhận mật khẩu mới</Text>
        <Text style={styles.txtTitlered}>*</Text>
      </View>
      <View style={styles.inputContainer}>
        <Pressable >
          <Image source={ICON_LOCK} style={styles.iconSearch} />
        </Pressable>
        <TextInput
          value={text2}
          placeholder="Mật khẩu mới"
          style={[
            styles.input,
            {
              fontFamily: text ? 'Exo2-Regular' : 'Exo2-Bold',
              fontSize: text ? 14 : 16,
              color: text ? COLORS.Black : "#C4C4C4",
            },
          ]}
          onChangeText={text2 => setText2(text2)}
        />
      </View>
      <Button
        title='Xác nhận'
        onPress={() => navigation.navigate('ProfileScreen')}
        stylePressable={{ marginTop: 80, marginHorizontal: 20, width:"90%" }}
      />
    </ScrollView>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
  imgAvatar: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 100,
    borderColor: COLORS.MainBlue,
    borderWidth: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  input: {
    flex: 1,
  },
  iconSearch: {
    width: 13,
    height: 15,
    marginRight: 10,
  },
  txtTitle: {
    fontSize: 16,
    fontFamily: 'Exo2-Bold',
    color: COLORS.Black,
  },
  viewInput: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    marginTop: 20,
  },
  txtTitlered: {
    fontSize: 16,
    fontFamily: 'Exo2-Bold',
    color: "red",
  },
})