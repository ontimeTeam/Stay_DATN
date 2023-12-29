import { StyleSheet, Text, View, Image, FlatList, ImageSourcePropType, Pressable, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BookStackParamList } from '../../navigation/BookStack'
import Header from '../../components/header/Header'
import { IC_BACK, IMG_ROOM_1, IMG_ROOM_2, IMG_ROOM_3, IMG_ROOM_4 } from '../../../assets'
import { COLORS } from '../../themes/theme'
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

interface ListRoomHotel {
    _id: Object,
    roomType: string,
    roomImage: string,
    roomPrice: number,
    isFinished: string
    // nếu là string thì truyền vào bằng source={{uri: item.roomImage}}
    // roomImage: ImageSourcePropType; // nếu là ImageSourcePropType thì truyền vào bằng source={item.imageRoom}
}

// data start, end, people in SearchDetailScreen
type RoomListScreenNavigationParams = {
    hotelID: string,
    hotelName: string,
    hotelAddress: string,
    hotelImage: string,
    hotelRates: string,
    hotelViews: number,
    startDate: string;
    endDate: string;
    people: number;
};

type PropsType = NativeStackScreenProps<BookStackParamList, 'RoomListScreen'>
const RoomListScreen: React.FC<PropsType> = props => {
    const route = useRoute<RouteProp<BookStackParamList, 'RoomListScreen'>>();
    const { hotelID, hotelName, hotelAddress, hotelImage, hotelRates, hotelViews, startDate, endDate, people } = route.params as RoomListScreenNavigationParams;
    const { navigation } = props;
    const [roomList, setRoomList] = useState<ListRoomHotel[]>([]);
    const [numberOfRooms, setNumberOfRooms] = useState(0);

    const getRoomsAPI = async (hotelID: string) => {
        try {
            const response = await axios.get(`https://newapihtbk-production.up.railway.app/api/hotel/${hotelID}/rooms`);
            const data: ListRoomHotel[] = response.data;
            setRoomList(data);
            // console.log(response);
        } catch (error) {
            console.log('Error fetching room data: ', error);
        } finally {
            // setLoading(false);
        }
    };

    useEffect(() => {
        getRoomsAPI(hotelID);
        setNumberOfRooms(roomList.length);
    }, [roomList]);

    type FormattingFunction = (num: number) => string;
    const formatNumber: FormattingFunction = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };
    // const { selectedStartDate, selectedEndDate, people, roomPrice } = route.params;

    const ItemRoomHotel = ({ item }: { item: ListRoomHotel }) => {
        const onPressSelectRoom = () => {
            console.log(item);
            navigation.navigate('PaymentScreen',
                {
                    hotelName: hotelName,
                    hotelAddress: hotelAddress,
                    hotelImage: hotelImage,
                    hotelRates: hotelRates,
                    hotelViews: hotelViews,
                    startDate: startDate,
                    endDate: endDate,
                    people: people,
                    roomType: item.roomType,
                    roomImages: item.roomImage,
                    roomPrice: item.roomPrice,
                    isFinished: item.isFinished,
                });
        }

        const onPressItemAll = () => {
            console.log(item);
            navigation.navigate('RoomDetailScreen');
        }

        return (
            <Pressable onPress={onPressItemAll} style={styles.containerItemRoom}>
                <Image source={{ uri: item.roomImage }} style={styles.imageRoom} />
                <View style={styles.containerTextRoom}>
                    <Text style={styles.nameRoom} numberOfLines={2} ellipsizeMode='tail'>{item.roomType}</Text>
                    <View style={styles.containerCenter}>
                        <Text style={styles.priceRoom}>{formatNumber(item.roomPrice)} ₫</Text>
                        <Pressable style={styles.btnSeclect} onPress={onPressSelectRoom}>
                            <Text style={styles.textSelect}>Chọn</Text>
                        </Pressable>
                    </View>
                    <Text style={styles.textBottom}>Chưa bao gồm thuế và các loại phí</Text>
                </View>

            </Pressable>
        );


    }
    return (
        <View style={styles.container}>
            <Header
                iconLeft={IC_BACK}
                eventLeft={() => navigation.goBack()}
                isCheck={true} // truyền true nếu muốn hiển thị textCenter
                textCenter='Danh sách phòng'
                textCenterMini={hotelName} // truyền vào nameHotel
                styleContainer={{ backgroundColor: COLORS.White }}
            />

            <View style={styles.containerChildren}>
                <Text style={styles.textRoom}>Gồm {roomList.length} loại phòng</Text>
                {/* nếu có numberRoom thì thay bằng numberRoom */}
                <FlatList
                    data={roomList}
                    renderItem={ItemRoomHotel}
                    keyExtractor={(item) => item._id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

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
        fontFamily: 'Exo2-Medium',
        fontSize: 18,
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