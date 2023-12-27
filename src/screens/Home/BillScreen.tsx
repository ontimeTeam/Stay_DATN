import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BookStackParamList } from '../../navigation/BookStack';
import { COLORS } from '../../themes/theme';
import Header from '../../components/header/Header';
import { DECOR, ICON_BACK_BLUE, ICON_STAR_TRON, IC_BACK, LINE, ROOM_1, SUBTRACT } from '../../../assets';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

type RoomPriceParams = {
  roomPrice: number;
};

type RoomListScreenNavigationParams = {
  startDate: Date;
  endDate: Date;
  people: number;
  totalAmount: number
};

type FormattingFunction = (num: number) => string;
const formatNumber: FormattingFunction = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

type PropsType = NativeStackScreenProps<BookStackParamList, 'BillScreen'>
const BillScreen: React.FC<PropsType> = props => {
  const route = useRoute<RouteProp<BookStackParamList, 'BillScreen'>>();
  const { startDate, endDate, people, roomPrice, totalAmount } = route.params as RoomPriceParams & RoomListScreenNavigationParams;
  const { navigation } = props;
  const goHome = () => {
    navigation.navigate('HomeScreen');
  }
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header
        iconLeft={IC_BACK}
        eventLeft={() => navigation.goBack()}
        textLeft='Hóa đơn đặt phòng'
      />
      <ImageBackground source={SUBTRACT} style={{
        height: Dimensions.get('window').height * 0.9,
        borderRadius: 40,
        width: '100%',
        padding: 20,
        marginLeft: 20,
      }}>
        <Image source={DECOR} style={styles.imgDecor} />
        <Text style={styles.txtTitle}>Thanh toán thành công</Text>
        <Text style={styles.txtContent}>Bạn đã thanh toán thành công phòng Luxury Deluxe Room - 1 King Bed</Text>
        <Text style={styles.txtPrice}>{formatNumber(totalAmount)} ₫</Text>
        <Image source={LINE} style={styles.imgLine} />
        <View style={styles.itemHotel}>
          <Image source={ROOM_1} style={styles.imgHotel} />
          <View style={styles.itemRight}>
            <Text style={styles.txtNameHotel}>La Vela SaiGon Hotel</Text>
            <View style={styles.viewStar}>
              <Image source={ICON_STAR_TRON} style={styles.iconStar} />
              <Text style={styles.txtStar}>5.0</Text>
              <Text style={styles.txtReview}>(3107 lượt xem)</Text>
            </View>
            <Text style={styles.txtAddress}>Nam Kỳ Khởi Nghĩa, Quận 3</Text>
          </View>
        </View>
        <View style={styles.viewBottom}>
          <View style={styles.bottomTop}>
            <View style={styles.bottomLeft}>
              <Text style={styles.txtName}>Ngày nhận phòng</Text>
              <Text style={styles.txtValue}>{String(startDate)}</Text>
            </View>
            <View style={styles.bottomRight}>
              <Text style={styles.txtName}>Ngày trả phòng</Text>
              <Text style={styles.txtValue}>{String(endDate)}</Text>
            </View>
          </View>
          <View style={styles.bottomBottom}>
            <View style={styles.bottomLeft}>
              <Text style={styles.txtName}>Mã hóa đơn</Text>
              <Text style={styles.txtValue}>APTX4869</Text>
            </View>
            <View style={styles.bottomRight}>
              <Text style={styles.txtName}>Tên khách hàng</Text>
              <Text style={styles.txtValue}>Bảo Ngọc</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <Pressable style={styles.btnConfirm} onPress={goHome}>
        <Image source={ICON_BACK_BLUE} style={styles.imgBack} />
        <Text style={styles.txtConfirm}>Quay về trang chủ</Text>
      </Pressable>
    </ScrollView>
  )
}

export default BillScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Blue_BG,
  },
  imgDecor: {
    width: 175,
    height: 175,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginRight: 20
  },
  txtTitle: {
    fontSize: 24,
    fontFamily: 'Exo2-Bold',
    color: COLORS.Black,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    marginRight: 40
  },
  txtContent: {
    fontSize: 18,
    fontFamily: 'Exo2-Regular',
    color: "#B4B6B8",
    textAlign: 'center',
    marginBottom: 20,
    marginRight: 40
  },
  txtPrice: {
    fontSize: 24,
    fontFamily: 'Exo2-Bold',
    color: COLORS.MainBlue,
    textAlign: 'center',
    marginBottom: 20,
    marginRight: 40
  },
  imgLine: {
    width: '90%',
    height: 2,
    resizeMode: 'stretch',
    marginBottom: 20,
  },
  itemHotel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 12,
    gap: 16,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#7D7D7D",
    backgroundColor: "#F2F2F2",
    width: Dimensions.get('window').width * 0.82,
  },
  imgHotel: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  itemRight: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },
  txtNameHotel: {
    fontSize: 20,
    fontFamily: 'Exo2-Bold',
    color: COLORS.Black,
  },
  viewStar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
  },
  iconStar: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  txtStar: {
    fontSize: 15,
    fontFamily: 'Exo2-SemiBold',
    color: COLORS.MainBlue,
  },
  txtReview: {
    fontSize: 15,
    fontFamily: 'Exo2-Regular',
    color: "#777E90",
  },
  txtAddress: {
    fontSize: 15,
    fontFamily: 'Exo2-Regular',
    color: COLORS.Black,
  },
  viewBottom: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 20,
  },
  bottomTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  bottomBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    paddingHorizontal: 15,
  },
  bottomLeft: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 8,
  },
  bottomRight: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 8,
  },
  txtName: {
    fontSize: 17,
    fontFamily: 'Exo2-Regular',
    color: "#515151",
  },
  txtValue: {
    fontSize: 17,
    fontFamily: 'Exo2-SemiBold',
    color: COLORS.Black,
  },
  btnConfirm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.White,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: COLORS.MainBlue,
    width: '90%',
    padding: 12,
    gap: 12,
    marginHorizontal: 20,
    marginVertical: 25,
  },
  imgBack: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  txtConfirm: {
    fontSize: 20,
    fontFamily: 'Exo2-SemiBold',
    color: COLORS.MainBlue,
  },
})