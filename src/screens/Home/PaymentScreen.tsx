import { Dimensions, Image, ImageSourcePropType, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BookStackParamList } from '../../navigation/BookStack';
import Header from '../../components/header/Header';
import { CARD, ICON_STAR, IC_BACK, MOMO, ROOM_1, ZALOPAY } from '../../../assets';
import { COLORS } from '../../themes/theme';
import { AppContext } from '../../resources/context/AppContext';
import ModalPayment from '../../components/modal/ModalPayment';
import Button from '../../components/button/Button';

type PropsType = NativeStackScreenProps<BookStackParamList, 'PaymentScreen'>
const PaymentScreen: React.FC<PropsType> = props => {
  const { navigation } = props;

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { pay } = React.useContext(AppContext);
  const [imagePay, setImagePay] = useState<ImageSourcePropType>(MOMO);
  const [namePay, setNamePay] = useState<string>('Ví MoMo');

  useEffect(() => {
    if (pay === 'Momo') {
      setImagePay(MOMO);
      setNamePay('Ví MoMo');
    } else if (pay === 'ZaloPay') {
      setImagePay(ZALOPAY);
      setNamePay('Ví ZaloPay');
    } else if (pay === 'Card') {
      setImagePay(CARD);
      setNamePay('Thẻ (MasterCard, Visa/Credit) ');
    }
  }, [pay]);

  const onPress = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Header
        iconLeft={IC_BACK}
        eventLeft={() => navigation.goBack()}
        textLeft='Thanh toán'
      />
      <View style={styles.viewContainer}>
        <Image source={ROOM_1} style={styles.imgBanner} />
        <View
          style={styles.viewChildren}>
          <Text style={styles.txtNameBanner}>La Vela SaiGon Hotel</Text>
          <View style={styles.viewStar}>
            <Image source={ICON_STAR} style={styles.iconStar} />
            <Text style={styles.txtStar}>5.0</Text>
          </View>
          <View style={styles.viewBottomHotelList}>
            <Text style={styles.txtNameHotelList} numberOfLines={1} ellipsizeMode='tail'>
              Luxury Deluxe Room - 1 King Bed
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.viewTimeRoom}>
        <View style={styles.viewTime}>
          <Text style={styles.txtTitleTime}>Ngày nhận phòng</Text>
          <Text style={styles.txtTime}>03/08/2023</Text>
        </View>
        <View style={styles.viewTime}>
          <Text style={styles.txtTitleTime}>Ngày trả phòng</Text>
          <Text style={styles.txtTime}>05/08/2023</Text>
        </View>
        <View style={styles.viewTime}>
          <Text style={styles.txtTitleTime}>Số khách</Text>
          <Text style={styles.txtTime}>2</Text>
        </View>
      </View>
      <View style={styles.viewTimeRoom}>
        <View style={styles.viewTime}>
          <Text style={styles.txtTitleTime}>2 đêm</Text>
          <Text style={styles.txtTime}>5,619,948 ₫</Text>
        </View>
        <View style={styles.viewTime}>
          <Text style={styles.txtTitleTime}>Thuế và Phí (10%)</Text>
          <Text style={styles.txtTime}>561, 994 ₫</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.viewTime}>
          <Text style={styles.txtTitleTime}>Tổng cộng</Text>
          <Text style={styles.txtTime}>6,181,942 ₫</Text>
        </View>
        <View style={styles.viewTimeRoom1}>
          <View style={styles.viewTime1}>
            <Image source={imagePay} style={styles.imgPay} />
            <Text style={styles.txtNamePay}>{namePay}</Text>
          </View>
          <Pressable
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.txtChange}>Thay đổi</Text>
          </Pressable>
        </View>
        <ModalPayment
          visible={modalVisible}
          onPress={onPress}
          Cancel={() => {
            setModalVisible(false);
          }}
        />
      </View>
      <Button
        title="Thanh toán"
        stylePressable={{ 
          width: '90%', 
          alignSelf: 'center', 
          marginVertical: 30,
        }}
        onPress={() => {
          navigation.navigate('BillScreen');
        }}
      />
    </ScrollView>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Blue_BG,
  },
  viewContainer: {
    width: Dimensions.get('screen').width * 0.9,
    height: Dimensions.get('screen').width * 0.5 + 15,
    borderRadius: 20,
    marginHorizontal: 20,

  },
  viewChildren: {
    position: 'absolute',
    left: 15,
    right: 30,
    top: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgBanner: {
    width: Dimensions.get('screen').width * 0.9,
    height: Dimensions.get('screen').width * 0.5 + 15,
    flex: 1,
    resizeMode: 'stretch', // sử dụng resizeMode: 'stretch' để kéo dãn ảnh
    // resizeMode: 'cover', // sử dụng resizeMode: 'cover' để ảnh không bị kéo dãn
    // dùng kiểu nào tùy vào thiết kế nha
    borderRadius: 20,
  },
  txtNameBanner: {
    color: COLORS.White,
    fontFamily: 'Exo2-Bold',
    fontSize: 24,
  },
  viewStar: {
    position: 'absolute',
    left: Dimensions.get('screen').width * 0.9 - 90,
    backgroundColor: COLORS.MainBlue,
    width: 50,
    height: 30,
    borderRadius: 15,
    gap: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStar: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  txtStar: {
    color: COLORS.White,
    fontFamily: 'Exo2-SemiBold',
    fontSize: 15,
  },
  viewBottomHotelList: {
    position: 'absolute',
    top: Dimensions.get('screen').width * 0.5 - 50,
    left: 0,
    right: 0,
  },
  txtNameHotelList: {
    color: COLORS.White,
    fontFamily: 'Exo2-SemiBold',
    fontSize: 22,
  },
  viewTimeRoom: {
    backgroundColor: COLORS.White,
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  viewTime: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  viewTimeRoom1: {
    backgroundColor: COLORS.White,
    borderRadius: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewTime1: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  txtTitleTime: {
    fontFamily: 'Exo2-Regular',
    fontSize: 17,
    color: "#515151",
    lineHeight: 23.8,
    letterSpacing: 0.2,
  },
  txtTime: {
    fontFamily: 'Exo2-SemiBold',
    fontSize: 17,
    color: COLORS.Black,
    lineHeight: 23.8,
    letterSpacing: 0.2,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    marginVertical: 10,
  },

  imgPay: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  txtNamePay: {
    fontFamily: 'Exo2-SemiBold',
    fontSize: 17,
    color: COLORS.Black,
    letterSpacing: 0.2,
    lineHeight: 23.8,
  },
  txtChange: {
    fontFamily: 'Exo2-Regular',
    fontSize: 17,
    color: COLORS.MainBlue,
    letterSpacing: 0.2,
    lineHeight: 23.8,
  },
})