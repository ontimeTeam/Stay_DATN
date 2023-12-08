import { StyleSheet, Text, View } from 'react-native'
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
  imageRoom: string;
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
  return (
    <View style={styles.container}>
      <Header
        iconLeft={IC_BACK}
        isCheck={true} // truyền true nếu muốn hiển thị textCenter
        textCenter='Danh sách phòng'
        textCenterMini='La Vela SaiGon Hotel' // truyền vào nameHotel
        styleContainer={{ backgroundColor: COLORS.White }}
      />
      <View style={styles.containerChildren}>
        <Text style={styles.textRoom}>Gồm 4 loại phòng</Text> 
        {/* nếu có numberRoom thì thay bằng numberRoom */}
        {/* <FlatList
          data={DATAROOMHOTEL}
          renderItem={ItemRoomHotel}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        /> */}
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
})