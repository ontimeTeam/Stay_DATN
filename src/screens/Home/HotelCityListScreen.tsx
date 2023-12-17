import { StyleSheet, Text, View, FlatList, Pressable, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/HomeStack';
import Header from '../../components/header/Header';
import { COLORS } from '../../themes/theme';
import { ICON_STAR_TRON, IC_BACK, IMG_HOTEL_7, IMG_HOTEL_8, IMG_HOTEL_9 } from '../../../assets';
interface ListHotel {
    id: number;
    // imageHotel: string; // khi ráp api thì sẽ dùng kiểu này, truyền vào uri
    imageHotel: ImageSourcePropType;
    nameHotel: string;
    star: string;
    view: string;  // số lượt xem
    price: string; // giá
}
const DATAHOTEL: ListHotel[] = ([
    {
        id: 1,
        imageHotel: IMG_HOTEL_7,
        nameHotel: 'Park Hyatt Saigon',
        star: '5.0',
        view: '1420',
        price: '7.200.000',
    },
    {
        id: 2,
        imageHotel: IMG_HOTEL_8,
        nameHotel: 'Fusion Original Saigon',
        star: '5.0',
        view: '1420',
        price: '4.043.904',
    },
    {
        id: 3,
        imageHotel: IMG_HOTEL_9,
        nameHotel: 'Imperial Hotel & Spa',
        star: '5.0',
        view: '1420',
        price: '1.428.918',
    },
    {
        id: 4,
        imageHotel: IMG_HOTEL_7,
        nameHotel: 'Park Hyatt Saigon',
        star: '5.0',
        view: '1420',
        price: '7.200.000',
    },
    {
        id: 5,
        imageHotel: IMG_HOTEL_8,
        nameHotel: 'Fusion Original Saigon',
        star: '5.0',
        view: '1420',
        price: '4.043.904',
    },
    {
        id: 6,
        imageHotel: IMG_HOTEL_9,
        nameHotel: 'Imperial Hotel & Spa',
        star: '5.0',
        view: '1420',
        price: '1.428.918',
    },
]);
type PropsType = NativeStackScreenProps<HomeStackParamList, 'HotelCityListScreen'>;
const HotelCityListScreen: React.FC<PropsType> = props => {
    const { navigation } = props;
    const ItemHotelAll = ({ item }: { item: ListHotel }) => {
        const onPressItemAll = () => {
            console.log(item);
            navigation.navigate('HotelDetailScreen');
        }
        const onPressSelectRoom = () => {
            console.log(item);
            navigation.navigate('RoomListScreen');
        }
        return (
            <Pressable style={styles.containerItem} onPress={onPressItemAll}>
                <Image source={item.imageHotel} style={styles.imageHotel} />
                <View style={styles.containerInfo}>
                    <Text style={styles.nameHotel} numberOfLines={1} ellipsizeMode='tail'>{item.nameHotel}</Text>
                    <View style={styles.containerCenter}>
                        <View style={styles.containerStar}>
                            <Image source={ICON_STAR_TRON} style={styles.iconStar} />
                            <Text style={styles.star}>{item.star}</Text>
                        </View>
                        <Text style={styles.view}>({item.view} Lượt xem)</Text>
                    </View>
                    <View style={styles.containerBottom}>
                        <Text style={styles.price}>Từ {item.price} ₫</Text>
                        <Pressable style={styles.btnBook} onPress={onPressSelectRoom}>
                            <Text style={styles.textBook}>Chọn Phòng</Text>
                        </Pressable>
                    </View>
                </View>
            </Pressable>
        );
    };
    return (
        <View style={styles.container}>
            <Header
                iconLeft={IC_BACK}
                eventLeft={() => navigation.goBack()}
                isCheck={true} // truyền true nếu muốn hiển thị textCenter
                textCenter='Hồ Chí Minh' // truyền nameLocation từ trang HomeScreen
                textCenterMini='Khám phá' // mặc định chữ khám phá
                styleContainer={{ backgroundColor: COLORS.White }}
            />
            <View style={styles.containerChildren}>
                <FlatList
                    data={DATAHOTEL}
                    renderItem={ItemHotelAll}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default HotelCityListScreen

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
    containerItem: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: 12,
        gap: 12,
        marginBottom: 15,
        backgroundColor: COLORS.White,
    },
    imageHotel: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    containerInfo: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
    },
    nameHotel: {
        fontFamily: 'Exo2-SemiBold',
        fontSize: 24,
        color: COLORS.Black,
    },
    containerCenter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        marginTop: 10,
    },
    containerStar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconStar: {
        width: 14,
        height: 14,
        marginRight: 5,
    },
    star: {
        fontFamily: 'Exo2-Regular',
        fontSize: 14,
        color: COLORS.Black,
    },
    view: {
        fontFamily: 'Exo2-Regular',
        fontSize: 14,
        color: "#777E90",
    },
    containerBottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    price: {
        fontFamily: 'Exo2-SemiBold',
        fontSize: 20,
        color: COLORS.Black,
    },
    btnBook: {
        width: "auto",
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 40,
        borderRadius: 32,
        backgroundColor: COLORS.MainBlue,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBook: {
        fontFamily: 'Exo2-SemiBold',
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: 0.2,
        color: COLORS.White,
    },
})