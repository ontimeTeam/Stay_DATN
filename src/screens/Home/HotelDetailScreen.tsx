import { StyleSheet, Text, View, ScrollView, ImageBackground, StatusBar, Image, FlatList, ImageSourcePropType, Pressable } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BookStackParamList } from '../../navigation/BookStack'
import Header from '../../components/header/Header'
import { AVATAR_1, AVATAR_2, AVATAR_3, AVATAR_4, AVATAR_5, ICON_BED, ICON_CLEAR, ICON_FOREST, ICON_GOLF, ICON_LIKE, ICON_LOCATION, ICON_STAR, ICON_SWIMMIMG_POOL, ICON_TABLE_24H, ICON_TRANSFER, IC_BACK, IMG_HOTEL_5, IMG_HOTEL_DETAIL, IMG_HOTEL_DETAIL_1, IMG_HOTEL_DETAIL_2, IMG_HOTEL_DETAIL_3 } from '../../../assets'
import { COLORS } from '../../themes/theme'
import Button from '../../components/button/Button'

type PropsType = NativeStackScreenProps<BookStackParamList, 'HotelDetailScreen'>
interface ListImg {
  id: number;
  // image: string; // nếu là string thì truyền vào bằng source={{uri: item.image}}
  image: ImageSourcePropType; // nếu là ImageSourcePropType thì truyền vào bằng source={item.image}
}
interface ListComment {
  id: number;
  name: string;
  // avatar: string; // nếu là string thì truyền vào bằng source={{uri: item.image}}
  avatar: ImageSourcePropType; // nếu là ImageSourcePropType thì truyền vào bằng source={item.image}
  comment: string;
  star: number;
}
const DATA: ListImg[] = ([
  {
    id: 1,
    image: IMG_HOTEL_DETAIL,
  },
  {
    id: 2,
    image: IMG_HOTEL_DETAIL_1,
  },
  {
    id: 3,
    image: IMG_HOTEL_DETAIL_2,
  },
  {
    id: 4,
    image: IMG_HOTEL_DETAIL_3,

  }
]);
const DATA_COMMENT: ListComment[] = ([
  {
    id: 1,
    name: 'Hoàng Dược Sư',
    avatar: AVATAR_1,
    comment: 'Thỏa mái, đúng là thoải mái. Trong đời ta lần đầu thấy khách điếm sang trọng như thế này.',
    star: 5,
  },
  {
    id: 2,
    name: 'Uzumaki Naruto',
    avatar: AVATAR_2,
    comment: 'Nơi này đúng là lựa chọn tuyệt vời để ngủ, giờ thì tìm ramen ăn đã. Mình đói rồi',
    star: 5,
  },
  {
    id: 3,
    name: 'Son Goku',
    avatar: AVATAR_3,
    comment: 'Hahaha, ta quên mất đây là chuyến đi chơi. Chỗ này êm quá nên là ta ngủ tận 3 ngày rồi :))))',
    star: 5,
  },
  {
    id: 4,
    name: 'Trần Đức Bo',
    avatar: AVATAR_4,
    comment: 'Mèo méo meo mèo meo. Con mèo ngu ngốc đáng iu ngọt ngào cute phô mai que xin chào cả nhà  <333',
    star: 5,
  },
  {
    id: 5,
    name: 'Rononoa Zoro',
    avatar: AVATAR_5,
    comment: 'Thỏa mái, đúng là thoải mái. Trong đời ta lần đầu thấy khách điếm sang trọng như thế này.',
    star: 5,
  }
]);
const renderItemComment = ({ item }: { item: ListComment }) => (
  <View style={styles.viewComment}>
    <View style={styles.viewTop}>
      <View style={styles.viewAvatar}>
        <Image source={item.avatar} style={styles.imageAvatar} />
        <Text style={styles.textName}>{item.name}</Text>
      </View>
      <View style={styles.viewStar_1}>
        <Image source={ICON_STAR} style={styles.imageStar_1} />
        <Text style={styles.textStar_1}>{item.star}</Text>
      </View>
    </View>
    <Text style={styles.textComment}>{item.comment}</Text>
  </View>
);
const renderItemImg = ({ item }: { item: ListImg }) => (
  <Image source={item.image} style={styles.imagePhoto} />
);
const HotelDetailScreen: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.containerAll}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true} // cho phép scroll trong scroll
        style={styles.container}>
        <ImageBackground resizeMode="cover" source={IMG_HOTEL_DETAIL} style={styles.ImgBG}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={'transparent'}
            translucent
          />
          <Header
            iconLeft={IC_BACK}
            eventLeft={() => navigation.goBack()}
          />
        </ImageBackground>
        <Text style={styles.titleNameHotel} numberOfLines={1} ellipsizeMode='tail'>
          La Vela SaiGon Hotel
        </Text>
        <View style={styles.viewLocation}>
          <Image source={ICON_LOCATION} style={styles.iconLocation} />
          <Text style={styles.textLocation} numberOfLines={2} ellipsizeMode='tail'>
            280 Nam Kỳ Khởi Nghĩa, Phường 8, Quận 3
          </Text>
        </View>
        <View style={styles.line}></View>
        <Text style={styles.titleImg}>Ảnh chụp</Text>
        <View style={{ paddingStart: 20, borderTopStartRadius: 12, borderBottomStartRadius: 12, marginBottom: 20 }}>
          <FlatList
            data={DATA}
            renderItem={renderItemImg}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          />
        </View>
        <Text style={styles.titleImg}>Điểm nổi bật</Text>
        <View style={styles.viewPopularTop}>
          <View style={styles.viewPopular}>
            <Image source={ICON_LIKE} style={styles.imagePopular} />
            <Text style={styles.textPopular}>Thích hợp cho{'\n'}các hoạt động</Text>
          </View>
          <View style={styles.viewPopular}>
            <Image source={ICON_SWIMMIMG_POOL} style={styles.imagePopular} />
            <Text style={styles.textPopular}>Bể bơi{'\n'}tuyệt vời</Text>
          </View>
          <View style={styles.viewPopular}>
            <Image source={ICON_FOREST} style={styles.imagePopular} />
            <Text style={styles.textPopular}>Quang cảnh{'\n'}thành phố</Text>
          </View>
          <View style={styles.viewPopular}>
            <Image source={ICON_CLEAR} style={styles.imagePopular} />
            <Text style={styles.textPopular}>Sạch sẽ{'\n'}vệ sinh</Text>
          </View>
        </View>
        <View style={[styles.viewPopularTop, { marginBottom: 20 }]}>
          <View style={styles.viewPopular}>
            <Image source={ICON_BED} style={styles.imagePopular} />
            <Text style={styles.textPopular}>Dịch vụ chất{'\n'}lượng cao</Text>
          </View>
          <View style={styles.viewPopular}>
            <Image source={ICON_TABLE_24H} style={styles.imagePopular} />
            <Text style={styles.textPopular}>Bàn tiếp tân{'\n'}24H</Text>
          </View>
          <View style={styles.viewPopular}>
            <Image source={ICON_TRANSFER} style={styles.imagePopular} />
            <Text style={styles.textPopular}>Đưa đón{'\n'}sây bay</Text>
          </View>
          <View style={styles.viewPopular}>
            <Image source={ICON_GOLF} style={styles.imagePopular} />
            <Text style={styles.textPopular}>Sân golf</Text>
          </View>
        </View>
        <Text style={styles.titleImg}>Mô tả</Text>
        <Text style={styles.txtMota}>
          Đỗ xe và Wi-Fi luôn miễn phí, vì vậy quý khách có thể giữ liên lạc,
          đến và đi tùy ý. Nằm ở vị trí trung tâm tại Quận 3 của Hồ Chí Minh,
          chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị.
        </Text>
        <Text style={styles.titleImg}>Đánh giá</Text>
        <View style={styles.viewStar}>
          <Image source={ICON_STAR} style={styles.imageStar} />
          <Text style={styles.textStar}>4.5</Text>
          <Text style={styles.textcmt}>(3,107 đánh giá)</Text>
        </View>
        <FlatList
          style={{ marginBottom: 100 }}
          data={DATA_COMMENT}
          renderItem={renderItemComment}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </ScrollView >
      <View style={styles.fixedView}>
        <View style={styles.viewBottom}>
          <Text style={styles.textBottom}>Giá từ</Text>
          <Text style={styles.textBottomPrice}>4,043,904 ₫</Text>
        </View>
        <Button
          stylePressable={{ width: 150, height: 50 }}
          onPress={() => navigation.navigate('RoomListScreen')}
          title="Đặt ngay!" />
      </View>
    </View>
  )
}

export default HotelDetailScreen

const styles = StyleSheet.create({
  containerAll: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.White,
  },
  container: {
    width: '100%',
    flex: 0.8,
    flexDirection: 'column',
    backgroundColor: COLORS.White,
  },
  ImgBG: {
    width: '100%',
    height: 300,
  },
  titleNameHotel: {
    fontSize: 26,
    fontFamily: "Exo2-Bold",
    color: COLORS.Black,
    lineHeight: 36.4,
    letterSpacing: 0.2,
    marginVertical: 12,
    marginHorizontal: 20,
  },
  viewLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  iconLocation: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  textLocation: {
    fontSize: 16,
    fontFamily: "Exo2-Regular",
    color: COLORS.Black,
    lineHeight: 19.6,
    letterSpacing: 0.2,
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
  imagePhoto: {
    width: 140,
    height: 110,
    borderRadius: 12,
    marginRight: 10,
  },
  viewPopularTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  viewPopular: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  imagePopular: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  textPopular: {
    fontSize: 14,
    fontFamily: "Exo2-Regular",
    color: COLORS.Black,
    lineHeight: 14.4,
    letterSpacing: 0.2,
    textAlign: 'center',
  },
  txtMota: {
    fontSize: 14,
    fontFamily: "Exo2-Regular",
    color: COLORS.Black,
    lineHeight: 21,
    letterSpacing: 0.2,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 10,
  },
  viewStar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  imageStar: {
    width: 20,
    height: 20,
  },
  textStar: {
    fontSize: 16,
    fontFamily: "Exo2-Bold",
    color: COLORS.MainBlue,
    lineHeight: 21,
    letterSpacing: 0.2,
  },
  textcmt: {
    fontSize: 16,
    fontFamily: "Exo2-Regular",
    color: COLORS.Black,
    lineHeight: 21,
    letterSpacing: 0.2,
  },
  viewComment: {
    flexDirection: 'column',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.Black
  },
  viewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  viewAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  imageAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.Black,
  },
  textName: {
    fontSize: 17,
    fontFamily: "Exo2-SemiBold",
    color: COLORS.MainBlue,
    lineHeight: 23.8,
    letterSpacing: 0.2,
  },
  viewStar_1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: COLORS.MainBlue,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderColor: COLORS.MainBlue,
    gap: 5,
  },
  textStar_1: {
    fontSize: 16,
    fontFamily: "Exo2-SemiBold",
    color: COLORS.White,
    lineHeight: 18.8,
    letterSpacing: 0.2,
  },
  imageStar_1: {
    width: 15,
    height: 15,
  },
  textComment: {
    fontSize: 16,
    fontFamily: "Exo2-Regular",
    color: COLORS.Black,
    lineHeight: 19.6,
    letterSpacing: 0.2,
    marginTop: 10,
  },
  fixedView: {
    flex: 0.2,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.White,
    borderTopWidth: 1,
    borderTopColor: "#ACADAC",
  },
  viewBottom: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textBottom: {
    fontSize: 18,
    fontFamily: "Exo2-Regular",
    color: COLORS.Black,
  },
  textBottomPrice: {
    fontSize: 20,
    fontFamily: "Exo2-Bold",
    color: COLORS.MainBlue,
    lineHeight: 23.8,
    letterSpacing: 0.2,
  },
})