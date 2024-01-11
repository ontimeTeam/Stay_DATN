import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, Dimensions, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BookStackParamList } from '../../navigation/BookStack';
import { COLORS } from '../../themes/theme';
import Header from '../../components/header/Header';
import { DECOR, ICON_BACK_BLUE, ICON_STAR_TRON, IC_BACK, LINE, ROOM_1, SUBTRACT } from '../../../assets';
import axios from 'axios';


type PropsType = NativeStackScreenProps<BookStackParamList, 'BillScreen'>
const BillScreen: React.FC<PropsType> = props => {
  const { navigation, route } = props;
  const { totalAmount, hotelId, selectedEndDate, selectedStartDate, roomId } = route.params;
  const [hotelData, setHotelData] = useState<any>({});

  const [hotelRoomsAvailable, setHotelRoomsAvailable] = useState(false);

  const goHome = () => {
    navigation.navigate('HomeScreen');
  }

  useEffect(() => {
    const fetchHotelAndRoom = async () => {
      try {
        const response = await axios.get(`https://newapihtbk-production.up.railway.app/api/hotel/hotelandroom/${hotelId}/${roomId}`);
        
        if (!response.data || !response.data.hotel || !response.data.room) {
          console.error('Invalid response structure:', response.data);
          return;
        }
  
        const { hotel, room } = response.data;
  
        // Update the state with fetched data
        setHotelData({ hotel, rooms: [room] }); // Assuming you want an array of rooms in the state
  
        // Set hotel rooms available to true
        setHotelRoomsAvailable(true);
  
        console.log('Data fetched from API:', response.data);
        // Rest of your logic...
      } catch (error) {
        console.error('Error fetching hotel and room details:', error);
      }
    };
  
    // Call the fetchHotelAndRoom function when the component mounts or when hotelId and roomId change
    fetchHotelAndRoom();
  }, [hotelId, roomId]);
  
  useEffect(() => {
    // Call the createBillAPI function when hotel rooms are available
    if (hotelRoomsAvailable) {
      createBillAPI();
    }
  }, [hotelRoomsAvailable]);

  const createBillAPI = async () => {
    try {
      if (!hotelData || !hotelData.rooms) {
        throw new Error('Hotel data or rooms not available.');
      }
  
      if (!hotelRoomsAvailable) {
        throw new Error('Hotel rooms not available.');
      }
  
      if (!totalAmount || !selectedStartDate || !selectedEndDate) {
        throw new Error('Invalid parameters for creating bills.');
      }
  
      // Format dates to 'YYYY-MM-DD' format
      const formattedStartDate = formatDate(selectedStartDate);
      const formattedEndDate = formatDate(selectedEndDate);
  
      const promises = hotelData.rooms.map(async (room: any) => {
        try {
          console.log('Data sent to API:', {
            thongtinpp: `${room.roomType} - ${room.maxPeople}`,
            billMonney: totalAmount.toString(),
            imageHotelBill: room.roomImage,
            billInfo: room.roomType,
            startbill: formattedStartDate,
            hotelcitybill: hotelData?.hotel?.hotelAddress,
            dateCheckin: formattedStartDate,
            dateCheckout: formattedEndDate,
            hotelId: hotelId, // Include hotelId in the request payload
            roomId: room._id, // Include roomId in the request payload
          });
  
          const response = await axios.post('https://newapihtbk-production.up.railway.app/api/bill/create/bill/', {
            thongtinpp: `${room.roomType} - ${room.maxPeople}`,
            billMonney: totalAmount.toString(),
            imageHotelBill: room.roomImage,
            billInfo: room.roomType,
            startbill: formattedStartDate,
            hotelcitybill: hotelData?.hotel?.hotelAddress,
            dateCheckin: formattedStartDate,
            dateCheckout: formattedEndDate,
            hotelId: hotelId,
            roomId: room._id,
          });
  
          // Update room status after creating the bill
          await updateRoomStatus(room._id);
  
          console.log('Bill created successfully:', response.data);
        } catch (error) {
          handleCreateBillError(room, error);
        }
      });
  
      await Promise.all(promises);
    } catch (error) {
      console.error('Error creating bills:', error);
    }
  };    

  const formatDate = (dateString: string): string => {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  };

  const handleCreateBillError = (room: any, error: any) => {
    console.error(`Error creating bill for room: ${room.roomType} - ${room.maxPeople}. Error:`, error);

    if (axios.isAxiosError(error)) {
      console.error('AxiosError details:', {
        message: error.message,
        response: error.response?.data,
      });
    }

    // Handle specific errors or provide user-friendly messages here
  };

  const updateRoomStatus = async (roomId: string) => {
    try {
      // Use correct parameter names: hotel._id and room._id
      const response = await axios.put(`https://newapihtbk-production.up.railway.app/api/hotel/updateroomstatus/${hotelId}/${roomId}`);
      console.log('Room status updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating room status:', error);
      // Handle the error as needed
    }
  };  

  useEffect(() => {
    // Call the updateRoomStatus API when navigating away
    if (hotelId && roomId) {
      updateRoomStatus(roomId);
    }
  }, [hotelId, roomId]);
  

  return (
    <ScrollView style={styles.container}>
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
        {hotelData.rooms && hotelData.rooms.map((room: any, index: number) => (
          <View key={index}>
            <Image source={DECOR} style={styles.imgDecor} />
            <Text style={styles.txtTitle}>Thanh toán thành công</Text>
            <Text style={styles.txtContent}>Bạn đã thanh toán thành công phòng{'\n'}{room.roomType} - {room.maxPeople} người</Text>
            <Text style={styles.txtPrice}>{totalAmount.toString()} ₫</Text>
            <Image source={LINE} style={styles.imgLine} />
            <View style={styles.itemHotel}>
              <Image source={{ uri: room.roomImage }} style={styles.imgHotel} />
              <View style={styles.itemRight}>
                <Text style={styles.txtNameHotel}>{room.roomType}</Text>
                <View style={styles.viewStar}>
                  <Image source={ICON_STAR_TRON} style={styles.iconStar} />
                  <Text style={styles.txtStar}>{hotelData.hotel.hotelRates ? hotelData.hotel.hotelRates.toFixed(1) : ''}</Text>
                  <Text style={styles.txtReview}>(3107 lượt xem)</Text>
                </View>
                <Text style={styles.txtAddress}>{hotelData?.hotel?.hotelAddress}</Text>
              </View>
            </View>
            <View style={styles.viewBottom}>
              <View style={styles.bottomTop}>
                <View style={styles.bottomLeft}>
                  <Text style={styles.txtName}>Ngày nhận phòng</Text>
                  <Text style={styles.txtValue}>{selectedStartDate}</Text>
                </View>
                <View style={styles.bottomRight}>
                  <Text style={styles.txtName}>Ngày trả phòng</Text>
                  <Text style={styles.txtValue}>{selectedEndDate}</Text>
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
          </View>
        ))}
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
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  bottomBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    paddingHorizontal: 20,
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
});