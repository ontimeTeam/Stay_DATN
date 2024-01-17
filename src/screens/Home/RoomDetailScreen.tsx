import { Image, ImageBackground, ImageSourcePropType, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BookStackParamList } from '../../navigation/BookStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { COLORS } from '../../themes/theme';
import Swiper from 'react-native-swiper';
import { BANCONG, BATH, BED, CP, ICON_DOOR_OPEN, IC_BACK, NOSMOKING, ROOM_1, SWIMMING_POOL, TELEPHONE, TOILET, TV, WIFI, WINDOW } from '../../../assets';
import Button from '../../components/button/Button';
import Header from '../../components/header/Header';

type PropsType = NativeStackScreenProps<BookStackParamList, 'RoomDetailScreen'>;
const RoomDetailScreen: React.FC<PropsType> = props => {
  const { navigation, route } = props;
  const {hotelId, selectedStartDate, selectedEndDate, people , roomId } = route.params;

  interface ListImageRoom {
    id: number;
    // imageRoom: string; // nếu là string thì truyền vào bằng source={{uri: item.imageRoom}}
    imageRoom: ImageSourcePropType; // nếu là ImageSourcePropType thì truyền vào bằng source={item.imageRoom}
  }
  // const DATAIMAGEROOM: ListImageRoom[] = ([])

  const [roomData, setRoomData] = useState<any>(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        if (roomId) {
          const apiEndpoint = `https://newapihtbk-production.up.railway.app/api/hotel/details/${hotelId}/${roomId}`;
          const response = await fetch(apiEndpoint);
        
          if (response.ok) {
            const data = await response.json();
            setRoomData(data);
            console.log("API Data:", data);
          } else {
            console.error(`Error fetching room details. Status: ${response.status}`);
          }
        }
      } catch (error) {
        console.error('Error fetching room details:', error);
      }
    };
  
    fetchRoomDetails();
  }, [roomId, hotelId]);  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewSwipe}>
        <Swiper loop={true} autoplay={true}>
          <View style={styles.slide}>
            {roomData && roomData.hotel && roomData.hotel.hotelDetail && (
              <ImageBackground
                source={{ uri: roomData.hotel.hotelDetail.hotelImage }}
                style={styles.imageRoom}>
                <Pressable
                  onPress={() => navigation.goBack()}
                  style={{
                    position: 'absolute',
                    top: 40,
                    left: 20,
                  }}>
                  <Image source={IC_BACK} style={{ width: 30, height: 30 }} />
                </Pressable>
              </ImageBackground>
            )}
          </View>
        </Swiper>
      </View>

      <Text style={styles.nameRoom} numberOfLines={1} ellipsizeMode='tail'>
        {roomData?.hotel?.hotelName || 'Default Hotel Name'}
      </Text>

      <View style={styles.viewWight}>
        <Image source={ICON_DOOR_OPEN} style={styles.imageWight} />
        <Text style={styles.textWight}>40m2</Text>
      </View>
      <View style={styles.line}></View>
      <Text style={styles.titleImg}>Điểm đặc trưng</Text>
      <View style={styles.viewHorizontal}>
        <Image source={BED} style={styles.imageIcon} />
        <Text style={styles.textIcon}>1 giường đôi lớn</Text>
      </View>
      <View style={styles.viewHorizontal}>
        <Image source={CP} style={styles.imageIcon} />
        <Text style={styles.textIcon}>2 người lớn, 1 trẻ em (miễn phí dưới 6 tuổi)</Text>
      </View>
      <View style={styles.viewHorizontal}>
        <Image source={WINDOW} style={styles.imageIcon} />
        <Text style={styles.textIcon}>Hướng phòng: Thành phố</Text>
      </View>
      <View style={styles.viewHorizontal}>
        <Image source={BANCONG} style={styles.imageIcon} />
        <Text style={styles.textIcon}>Ban công/sân hiên</Text>
      </View>
      <View style={styles.viewHorizontal}>
        <Image source={NOSMOKING} style={styles.imageIcon} />
        <Text style={styles.textIcon}>Không hút thuốc</Text>
      </View>
      <View style={styles.viewHorizontal}>
        <Image source={BATH} style={styles.imageIcon} />
        <Text style={styles.textIcon}>Bồn tắm/vòi sen riêng</Text>
      </View>
      <View style={styles.viewHorizontal}>
        <Image source={TOILET} style={styles.imageIcon} />
        <Text style={styles.textIcon}>Phòng tắm chung</Text>
      </View>
      <View style={styles.viewHorizontal}>
        <Image source={WIFI} style={styles.imageIcon} />
        <Text style={styles.textIcon}>Wifi miễn phí</Text>
      </View>
      <View style={styles.line}></View>
      <Text style={styles.titleImg}>Giải trí</Text>
      <View style={styles.viewHorizontal}>
        <Image source={TELEPHONE} style={styles.imageIcon} />
        <Text style={styles.textIcon}>Điện thoại</Text>
      </View>
      <View style={styles.viewHorizontal}>
        <Image source={SWIMMING_POOL} style={styles.imageIcon} />
        <Text style={styles.textIcon}>Tiện nghi bể bơi</Text>
      </View>
      <View style={styles.viewHorizontal}>
        <Image source={TV} style={styles.imageIcon} />
        <Text style={styles.textIcon}>Truyền hình cáp/vệ tinh</Text>
      </View>
      <View style={styles.line}></View>
      <Text style={styles.titleImg}>Tiện nghi</Text>
      <View style={styles.viewHorizontal}>
        <Image source={BED} style={styles.imageIcon} />
        <Text style={styles.textIcon}>Dịch vụ báo thức</Text>
      </View>
      <View style={styles.viewHorizontal}>
        <Image source={CP} style={styles.imageIcon} />
        <Text style={styles.textIcon}>Điều hòa</Text>
      </View>
      <View style={styles.viewHorizontal}>
        <Image source={CP} style={styles.imageIcon} />
        <Text style={styles.textIcon}>Rèm che ánh sáng</Text>
      </View>
      <View style={styles.viewHorizontal}>
        <Image source={WINDOW} style={styles.imageIcon} />
        <Text style={styles.textIcon}>Ổ cắm điện gần giường</Text>
      </View>
      <View style={styles.btnSeclect}>
        <Button
          title='Chọn phòng'
          onPress={() => navigation.navigate('PaymentScreen',{hotelId, selectedStartDate, selectedEndDate, people , roomId })}
        />
      </View>
    </ScrollView>
  )
}

export default RoomDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  viewSwipe: {
    height: 300,
    width: '100%',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageRoom: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  nameRoom: {
    fontSize: 24,
    fontFamily: 'Exo2-Bold',
    color: COLORS.Black,
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  viewWight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    gap: 5,
  },
  imageWight: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  textWight: {
    fontSize: 14,
    fontFamily: 'Exo2-Regular',
    color: "#808089",
  },
  line: {
    width: '90%',
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  titleImg: {
    fontSize: 18,
    fontFamily: "Exo2-Bold",
    color: COLORS.Black,
    lineHeight: 25.2,
    letterSpacing: 0.2,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  viewHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    gap: 8,
    marginBottom: 10,
  },
  imageIcon: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
  textIcon: {
    fontSize: 18,
    fontFamily: 'Exo2-Regular',
    color: COLORS.Black,
    lineHeight: 21,
  },
  btnSeclect: {
    marginHorizontal: 20,
    marginVertical: 40,
  },
})