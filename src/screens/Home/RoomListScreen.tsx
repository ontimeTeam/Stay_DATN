import { StyleSheet, Text, View, Image, FlatList, ImageSourcePropType, Pressable } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BookStackParamList } from '../../navigation/BookStack'
import Header from '../../components/header/Header'
import { IC_BACK, IMG_ROOM_1, IMG_ROOM_2, IMG_ROOM_3, IMG_ROOM_4 } from '../../../assets'
import { COLORS } from '../../themes/theme'

interface ListRoomHotel {
  id: number;
  nameRoom: string;
  price: string;
  // imageRoom: string; // nếu là string thì truyền vào bằng source={{uri: item.imageRoom}}
  imageRoom: ImageSourcePropType; // nếu là ImageSourcePropType thì truyền vào bằng source={item.imageRoom}
}
const DATAROOMHOTEL: ListRoomHotel[] = ([
  {
    id: 1,
    nameRoom: 'Deluxe Double Room',
    price: '1.851.637',
    imageRoom: IMG_ROOM_1,
  },
  {
    id: 2,
    nameRoom: 'Luxury Deluxe Room - 1 King Bed',
    price: '2.809.974',
    imageRoom: IMG_ROOM_2,
  },
  {
    id: 3,
    nameRoom: 'Luxury Room with Balcony',
    price: '2.975.390',
    imageRoom: IMG_ROOM_3,
  },
  {
    id: 4,
    nameRoom: 'Club Lounge Presidential Suite - Club Benefits Included',
    price: '15.360.210',
    imageRoom: IMG_ROOM_4,
  }
])

type PropsType = NativeStackScreenProps<BookStackParamList, 'RoomListScreen'>
const RoomListScreen: React.FC<PropsType> = props => {
  const { navigation } = props;
  
  const ItemRoomHotel = ({ item }: { item: ListRoomHotel }) => {
    const onPressSelectRoom = () => {
      console.log(item);
      navigation.navigate('PaymentScreen')
    }
    const onPressItemAll = () => {
      console.log(item);
      navigation.navigate('RoomDetailScreen')
    }
    return (
      <Pressable onPress={onPressItemAll} style={styles.containerItemRoom}>
        <Image source={item.imageRoom} style={styles.imageRoom} />
        <View style={styles.containerTextRoom}>
          <Text style={styles.nameRoom} numberOfLines={1} ellipsizeMode='tail'>{item.nameRoom}</Text>
          <View style={styles.containerCenter}>
            <Text style={styles.priceRoom}>{item.price} ₫</Text>
            <Pressable style={styles.btnSeclect} onPress={onPressSelectRoom}>
              <Text style={styles.textSelect}>Chọn</Text>
            </Pressable>
          </View>
          <Text style={styles.textBottom}>Chưa bao gồm thuế và các loại phí</Text>
        </View>
      </Pressable>
    )
  }
  return (
    <View style={styles.container}>
      <Header
        iconLeft={IC_BACK}
        eventLeft={() => navigation.goBack()}
        isCheck={true} // truyền true nếu muốn hiển thị textCenter
        textCenter='Danh sách phòng'
        textCenterMini='La Vela SaiGon Hotel' // truyền vào nameHotel
        styleContainer={{ backgroundColor: COLORS.White}}
      />
      <View style={styles.containerChildren}>
        <Text style={styles.textRoom}>Gồm 4 loại phòng</Text>
        {/* nếu có numberRoom thì thay bằng numberRoom */}
        <FlatList
          data={DATAROOMHOTEL}
          renderItem={ItemRoomHotel}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default RoomListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerChildren: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: COLORS.Blue_BG,
    paddingHorizontal: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  textRoom: {
    fontSize: 16,
    fontFamily: 'Exo2-Regular',
    color: '#595959',
    marginVertical: 15,
  },
  containerItemRoom: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 16,
    gap: 12,
    marginBottom: 20,
    paddingBottom: 20,
    backgroundColor: COLORS.White,
  },
  imageRoom: {
    width: '100%',
    height: 140,
    resizeMode: 'stretch',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  containerTextRoom: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  nameRoom: {
    fontFamily: 'Exo2-Regular',
    fontSize: 22,
    color: COLORS.Black,
  },
  containerCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },
  priceRoom: {
    fontFamily: 'Exo2-SemiBold',
    fontSize: 20,
    color: COLORS.Black,
  },
  btnSeclect: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 32,
    backgroundColor: COLORS.MainBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSelect: {
    fontFamily: 'Exo2-SemiBold',
    fontSize: 16,
    color: COLORS.White,
  },
  textBottom: {
    fontFamily: 'Exo2-Regular',
    fontSize: 14,
    color: "#777E90",
  },
})