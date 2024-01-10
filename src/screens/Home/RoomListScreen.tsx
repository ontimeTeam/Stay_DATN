import { StyleSheet, Text, View, Image, FlatList, ImageSourcePropType, Pressable } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BookStackParamList } from '../../navigation/BookStack'
import Header from '../../components/header/Header'
import { IC_BACK, IMG_ROOM_1, IMG_ROOM_2, IMG_ROOM_3, IMG_ROOM_4 } from '../../../assets'
import { COLORS } from '../../themes/theme'
import { useEffect } from 'react';

interface ListRoomHotel {
  id: string;
  nameRoom: string;
  price: string;
  // imageRoom: string; // nếu là string thì truyền vào bằng source={{uri: item.imageRoom}}
  imageRoom: ImageSourcePropType;
  roomId?: number; // nếu là ImageSourcePropType thì truyền vào bằng source={item.imageRoom}
}
const DATAROOMHOTEL: ListRoomHotel[] = ([
  {
    id: "1",
    nameRoom: 'Deluxe Double Room',
    price: '1.851.637',
    imageRoom: IMG_ROOM_1,
  },
  // {
  //   id: 2,
  //   nameRoom: 'Luxury Deluxe Room - 1 King Bed',
  //   price: '2.809.974',
  //   imageRoom: IMG_ROOM_2,
  // },
  // {
  //   id: 3,
  //   nameRoom: 'Luxury Room with Balcony',
  //   price: '2.975.390',
  //   imageRoom: IMG_ROOM_3,
  // },
  // {
  //   id: 4,
  //   nameRoom: 'Club Lounge Presidential Suite - Club Benefits Included',
  //   price: '15.360.210',
  //   imageRoom: IMG_ROOM_4,
  // }
])

type PropsType = NativeStackScreenProps<BookStackParamList, 'RoomListScreen'>

const RoomListScreen: React.FC<PropsType> = props => {
  const { navigation, route } = props;

  const { hotelId, selectedStartDate, selectedEndDate, people, roomId } = route.params;

  console.log('hotelID from params:', hotelId);

  const [dataRoomHotel, setDataRoomHotel] = useState<ListRoomHotel[]>([]);

  useEffect(() => {
    const fetchHotelRooms = async () => {
      try {
        const response = await fetch(`https://newapihtbk-production.up.railway.app/api/hotel/${hotelId}/rooms`);
        if (!response.ok) {
          console.error('Error fetching hotel rooms. Status:', response.status);
          return;
        }
  
        const newData = await response.json();
  
        // Check if newData is an array or needs to be extracted from the response
        const roomsArray = newData.rooms || newData; // Adjust the property name based on the API response structure
  
        // Check if the extracted data is an array before using map
        if (Array.isArray(roomsArray)) {
          const mappedData: ListRoomHotel[] = roomsArray.map((room: any) => ({
            id: room._id,
            nameRoom: room.roomType,
            price: room.roomPrice.toString(),
            imageRoom: { uri: room.roomImage },
          }));
  
          // Update the state with the fetched data
          setDataRoomHotel(mappedData);
        } else {
          console.error('Fetched data is not an array:', roomsArray);
  
          // Log the entire response to help diagnose the issue
          // console.log('Full response:', newData);
        }
      } catch (error) {
        console.error('Error fetching hotel rooms:', error);
      }
    };
  
    fetchHotelRooms();
  }, [hotelId]);
  
   const ItemRoomHotel = ({ item }: { item: ListRoomHotel }) => {
    const onPressSelectRoom = () => {
      // console.log(item);
      console.log('Selected roomId:', item.id);
      navigation.navigate('PaymentScreen', {hotelId, selectedStartDate, selectedEndDate, people, roomId: item.id})
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
        <Text style={styles.textRoom}>Gồm {dataRoomHotel.length} loại phòng</Text>
        {/* nếu có numberRoom thì thay bằng numberRoom */}
        <FlatList
          data={dataRoomHotel}
          renderItem={ItemRoomHotel}
          // keyExtractor={(item) => item.id.toString()}
          keyExtractor={(item) => item.id?.toString() || item.nameRoom}
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