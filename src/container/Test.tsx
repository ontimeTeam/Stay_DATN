import { Image, ImageSourcePropType, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../themes/theme'
import { CARD, MOMO, ZALOPAY } from '../../assets'
import { AppContext } from '../resources/context/AppContext'
import ModalPayment from '../components/modal/ModalPayment'


const Test = () => {
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
    <View style={{ flex: 1 }}>
      <View style={styles.viewTimeRoom}>
        <View style={styles.viewTime}>
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
  )
}

export default Test

const styles = StyleSheet.create({
  viewTimeRoom: {
    backgroundColor: COLORS.White,
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewTime: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
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