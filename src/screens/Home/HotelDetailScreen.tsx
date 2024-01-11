import { Dimensions, StyleSheet, Text, View, ScrollView, ImageBackground, StatusBar, Image, FlatList, ImageSourcePropType, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BookStackParamList } from '../../navigation/BookStack'
import Header from '../../components/header/Header'
import { AVATAR_1, AVATAR_2, AVATAR_3, AVATAR_4, AVATAR_5, ICON_BED, ICON_CLEAR, ICON_FOREST, ICON_GOLF, ICON_LIKE, ICON_LOCATION, ICON_STAR, ICON_SWIMMIMG_POOL, ICON_TABLE_24H, ICON_TRANSFER, IC_BACK, IMG_HOTEL_5, IMG_HOTEL_DETAIL, IMG_HOTEL_DETAIL_1, IMG_HOTEL_DETAIL_2, IMG_HOTEL_DETAIL_3 } from '../../../assets'
import { COLORS } from '../../themes/theme'
import Button from '../../components/button/Button'
import axios from 'axios'
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

interface HotelDetail {
    _id: Object,
    hotelImage: string,
    hotelDescription: string,
    roomImage: string
};
type RoomListScreenNavigationParams = {
    hotelID: string,
    hotelImage: string,
    hotelName: string,
    hotelAddress: string,
    hotelDescription: string,
    hotelRates: number,
    hotelViews: number,
    roomPrice: number
};

type PropsType = NativeStackScreenProps<BookStackParamList, 'HotelDetailScreen'>
const HotelDetailScreen: React.FC<PropsType> = (props) => {
    const { navigation } = props;
    const route = useRoute<RouteProp<BookStackParamList, 'RoomListScreen'>>();
    const { hotelID, hotelName, hotelAddress, hotelDescription, hotelImage, hotelRates, hotelViews, roomPrice } = route.params as RoomListScreenNavigationParams;

    const [hotelDetailImage, setHotelImage] = useState<HotelDetail[]>([]);

    const getRoomsAPI = async (hotelID: string) => {
        try {
            const response = await axios.get(`https://stayapi-production.up.railway.app/api/hotel/${hotelID}/rooms`);
            const data: HotelDetail[] = response.data;
            setHotelImage(data);
            // console.log(response);
        } catch (error) {
            console.log('Error fetching room data: ', error);
        } finally {
            // setLoading(false);
        }
    };

    useEffect(() => {
        getRoomsAPI(hotelID);
    }, []);

    type FormattingFunction = (num: number) => string;
    const formatNumber: FormattingFunction = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };
    const renderItemImg = ({ item }: { item: HotelDetail }) => (
        <Image source={{ uri: item.roomImage }} style={styles.imagePhoto} />
    );
    return (
        <View style={styles.containerAll}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true} // cho phép scroll trong scroll
                style={styles.container}>
                <ImageBackground resizeMode="cover" source={{ uri: hotelImage }} style={styles.ImgBG}>
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
                <Text style={styles.titleNameHotel} numberOfLines={2} ellipsizeMode='tail'>
                    {hotelName}
                </Text>
                <View style={styles.viewLocation}>
                    <Image source={ICON_LOCATION} style={styles.iconLocation} />
                    <Text style={styles.textLocation} numberOfLines={2} ellipsizeMode='tail'>
                        {hotelAddress}
                    </Text>
                </View>
                <View style={styles.line}></View>
                <Text style={styles.titleImg}>Ảnh chụp</Text>
                <View style={{ paddingStart: 20, borderTopStartRadius: 12, borderBottomStartRadius: 12, marginBottom: 20 }}>
                    <FlatList
                        data={hotelDetailImage}
                        renderItem={renderItemImg}
                        keyExtractor={item => item._id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEnabled={true}
                    />
                </View>
                <Text style={styles.titleImg}>Điểm nổi bật</Text>
                <View style={styles.viewPopularTop}>
                    <View style={styles.viewPopular}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/stay-hotel-booking-app.appspot.com/o/hotel%2FIcon_like.png?alt=media&token=257beba5-0a7e-43cb-a074-9d77b7c62b94' }} style={styles.imagePopular} />
                        <Text style={styles.textPopular}>Thích hợp cho{'\n'}các hoạt động</Text>
                    </View>
                    <View style={styles.viewPopular}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/stay-hotel-booking-app.appspot.com/o/hotel%2FIcon_Swimming_pool.png?alt=media&token=df2e52e9-d146-4652-bb6a-c68ebcfd69b1' }} style={styles.imagePopular} />
                        <Text style={styles.textPopular}>Bể bơi{'\n'}tuyệt vời</Text>
                    </View>
                    <View style={styles.viewPopular}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/stay-hotel-booking-app.appspot.com/o/hotel%2FIcon_Forest.png?alt=media&token=44068950-9dda-4aec-8a3a-67bb4923320c' }}
                            style={styles.imagePopular} />
                        <Text style={styles.textPopular}>Quang cảnh{'\n'}thành phố</Text>
                    </View>
                    <View style={styles.viewPopular}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/stay-hotel-booking-app.appspot.com/o/hotel%2FIcon_Clear.png?alt=media&token=270853e9-f64a-43c8-9107-727eab9921a6' }}
                            style={styles.imagePopular} />
                        <Text style={styles.textPopular}>Sạch sẽ{'\n'}vệ sinh</Text>
                    </View>
                </View>
                <View style={[styles.viewPopularTop, { marginBottom: 20 }]}>
                    <View style={styles.viewPopular}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/stay-hotel-booking-app.appspot.com/o/hotel%2FIcon_Bed.png?alt=media&token=0fe91f9e-c218-4b8b-a64c-295303d8fdf7' }}
                            style={styles.imagePopular} />
                        <Text style={styles.textPopular}>Dịch vụ chất{'\n'}lượng cao</Text>
                    </View>
                    <View style={styles.viewPopular}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/stay-hotel-booking-app.appspot.com/o/hotel%2FIcon_Table_24_7.png?alt=media&token=ef8dc9c0-c463-426a-8e19-2c62d8b7a999' }}
                            style={styles.imagePopular} />
                        <Text style={styles.textPopular}>Bàn tiếp tân{'\n'}24H</Text>
                    </View>
                    <View style={styles.viewPopular}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/stay-hotel-booking-app.appspot.com/o/hotel%2FIcon_Transfer.png?alt=media&token=27240286-561a-45d8-ab51-1ff27a3dc5a1' }}
                            style={styles.imagePopular} />
                        <Text style={styles.textPopular}>Đưa đón{'\n'}sây bay</Text>
                    </View>
                    <View style={styles.viewPopular}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/stay-hotel-booking-app.appspot.com/o/hotel%2FIcon_Goft.png?alt=media&token=a1b6df17-ccea-4998-bd8d-4a48447326fc' }}
                            style={styles.imagePopular} />
                        <Text style={styles.textPopular}>Sân golf</Text>
                    </View>
                </View>
                <Text style={styles.titleImg}>Mô tả</Text>
                <Text style={styles.txtMota}>
                    {hotelDescription}
                </Text>
                <Text style={styles.titleImg}>Đánh giá</Text>
                <View style={styles.viewStar}>
                    <Image source={ICON_STAR} style={styles.imageStar} />
                    <Text style={styles.textStar}>{hotelViews}</Text>
                    <Text style={styles.textcmt}>({hotelRates} đánh giá)</Text>
                </View>
                {/* <FlatList
          style={{ marginBottom: 100 }}
          data={DATA_COMMENT}
          renderItem={renderItemComment}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        /> */}
            </ScrollView >
            <View style={styles.fixedView}>
                <View style={styles.viewBottom}>
                    <Text style={styles.textBottom}>Giá từ</Text>
                    <Text style={styles.textBottomPrice}>{formatNumber(roomPrice)} ₫</Text>
                </View>
                <Button
                    stylePressable={{ width: 150, height: 50 }}
                    onPress={() => navigation.navigate('SearchDetailScreen', {
                        hotelID: hotelID,
                        hotelAddress: hotelAddress,
                        hotelName: hotelName,
                        hotelImage: hotelImage,
                        hotelRates: hotelRates,
                        hotelViews: hotelViews
                    })}
                    title="Đặt ngay!" />
            </View>
        </View>

    );
};

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
        width: Dimensions.get('screen').width * 0.8,
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
});

// interface ListImg {
//     id: number;
//     // image: string; // nếu là string thì truyền vào bằng source={{uri: item.image}}
//     image: ImageSourcePropType; // nếu là ImageSourcePropType thì truyền vào bằng source={item.image}
// }
// interface ListComment {
//     id: number;
//     name: string;
//     // avatar: string; // nếu là string thì truyền vào bằng source={{uri: item.image}}
//     avatar: ImageSourcePropType; // nếu là ImageSourcePropType thì truyền vào bằng source={item.image}
//     comment: string;
//     star: number;
// }
// const DATA: ListImg[] = ([
//     {
//         id: 1,
//         image: IMG_HOTEL_DETAIL,
//     },
//     {
//         id: 2,
//         image: IMG_HOTEL_DETAIL_1,
//     },
//     {
//         id: 3,
//         image: IMG_HOTEL_DETAIL_2,
//     },
//     {
//         id: 4,
//         image: IMG_HOTEL_DETAIL_3,

//     }
// ]);
// const DATA_COMMENT: ListComment[] = ([
//     {
//         id: 1,
//         name: 'Hoàng Dược Sư',
//         avatar: AVATAR_1,
//         comment: 'Thỏa mái, đúng là thoải mái. Trong đời ta lần đầu thấy khách điếm sang trọng như thế này.',
//         star: 5,
//     },
//     {
//         id: 2,
//         name: 'Uzumaki Naruto',
//         avatar: AVATAR_2,
//         comment: 'Nơi này đúng là lựa chọn tuyệt vời để ngủ, giờ thì tìm ramen ăn đã. Mình đói rồi',
//         star: 5,
//     },
//     {
//         id: 3,
//         name: 'Son Goku',
//         avatar: AVATAR_3,
//         comment: 'Hahaha, ta quên mất đây là chuyến đi chơi. Chỗ này êm quá nên là ta ngủ tận 3 ngày rồi :))))',
//         star: 5,
//     },
//     {
//         id: 4,
//         name: 'Trần Đức Bo',
//         avatar: AVATAR_4,
//         comment: 'Mèo méo meo mèo meo. Con mèo ngu ngốc đáng iu ngọt ngào cute phô mai que xin chào cả nhà  <333',
//         star: 5,
//     },
//     {
//         id: 5,
//         name: 'Rononoa Zoro',
//         avatar: AVATAR_5,
//         comment: 'Thỏa mái, đúng là thoải mái. Trong đời ta lần đầu thấy khách điếm sang trọng như thế này.',
//         star: 5,
//     }
// ]);

// const renderItemComment = ({ item }: { item: ListComment }) => (
//     <View style={styles.viewComment}>
//         <View style={styles.viewTop}>
//             <View style={styles.viewAvatar}>
//                 <Image source={item.avatar} style={styles.imageAvatar} />
//                 <Text style={styles.textName}>{item.name}</Text>
//             </View>
//             <View style={styles.viewStar_1}>
//                 <Image source={ICON_STAR} style={styles.imageStar_1} />
//                 <Text style={styles.textStar_1}>{item.star}</Text>
//             </View>
//         </View>
//         <Text style={styles.textComment}>{item.comment}</Text>
//     </View>
// );
