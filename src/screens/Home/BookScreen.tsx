import { StyleSheet, Text, View, TextInput, Image, ScrollView, Pressable, FlatList, ImageSourcePropType } from 'react-native';
import React, { useState, useEffect } from 'react';
import { COLORS } from '../../themes/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BookStackParamList } from '../../navigation/BookStack';
import { ICON_SEARCH, ICON_STAR, ICON_STAR_TRON, IMG_HOTEL_7, IMG_HOTEL_8, IMG_HOTEL_9 } from '../../../assets';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

interface ListHotel {
    _id: Object;
    hotelName: string;
    hotelAddress: string,
    hotelDetail: {
        hotelImage: string;
    };
    hotelRates: number;
    view: number;
    rooms: {
        roomPrice: number;
        roomType: string;
        roomImage: string;
    }[];
}

type RoomListScreenNavigationParams = {
    startDate: string;
    endDate: string;
    people: number;
};
// const DATAHOTEL: ListHotel[] = ([
//     {
//         id: 1,
//         imageHotel: IMG_HOTEL_7,
//         nameHotel: 'Park Hyatt Saigon',
//         star: '5.0',
//         view: '1420',
//         price: '7.200.000',
//         isCheckPopular: true,
//         isCheckTrend: false,
//     },
//     {
//         id: 2,
//         imageHotel: IMG_HOTEL_8,
//         nameHotel: 'Fusion Original Saigon',
//         star: '5.0',
//         view: '1420',
//         price: '4.043.904',
//         isCheckPopular: false,
//         isCheckTrend: true,
//     },
//     {
//         id: 3,
//         imageHotel: IMG_HOTEL_9,
//         nameHotel: 'Imperial Hotel & Spa',
//         star: '5.0',
//         view: '1420',
//         price: '1.428.918',
//         isCheckPopular: true,
//         isCheckTrend: false,
//     },
//     {
//         id: 4,
//         imageHotel: IMG_HOTEL_7,
//         nameHotel: 'Park Hyatt Saigon',
//         star: '5.0',
//         view: '1420',
//         price: '7.200.000',
//         isCheckPopular: true,
//         isCheckTrend: false,
//     },
//     {
//         id: 5,
//         imageHotel: IMG_HOTEL_8,
//         nameHotel: 'Fusion Original Saigon',
//         star: '5.0',
//         view: '1420',
//         price: '4.043.904',
//         isCheckPopular: false,
//         isCheckTrend: true,
//     },
//     {
//         id: 6,
//         imageHotel: IMG_HOTEL_9,
//         nameHotel: 'Imperial Hotel & Spa',
//         star: '5.0',
//         view: '1420',
//         price: '1.428.918',
//         isCheckPopular: true,
//         isCheckTrend: false,
//     },
//     {
//         id: 7,
//         imageHotel: IMG_HOTEL_7,
//         nameHotel: 'Park Hyatt Saigon',
//         star: '5.0',
//         view: '1420',
//         price: '7.200.000',
//         isCheckPopular: true,
//         isCheckTrend: false,
//     },
//     {
//         id: 8,
//         imageHotel: IMG_HOTEL_8,
//         nameHotel: 'Fusion Original Saigon',
//         star: '5.0',
//         view: '1420',
//         price: '4.043.904',
//         isCheckPopular: false,
//         isCheckTrend: true,
//     },
// ])
type PropsType = NativeStackScreenProps<BookStackParamList, 'BookScreen'>
const BookScreen: React.FC<PropsType> = (props) => {
    const route = useRoute<RouteProp<BookStackParamList, 'RoomListScreen'>>();
    // const { startDate, endDate, people } = route.params as RoomListScreenNavigationParams;
    const { navigation } = props;
    const [text, setText] = React.useState('');
    const [activeTab, setActiveTab] = useState('Tất cả')
    const [hotels, setHotels] = useState<ListHotel[]>([]);
    const [loading, setLoading] = useState(true);

    const getHotelsAPI = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://newapihtbk-production.up.railway.app/api/hotel/rooms/chitietht');
            const data: ListHotel[] = response.data;
            setHotels(data);
            console.log(data);
        } catch (error) {
            console.log('Error fetching hotel data: ', error);
        } finally {
            setLoading(false);
        };
    };
    useEffect(() => {
        getHotelsAPI();
    }, []);

    // biến activeTab dùng để kiểm tra xem tab nào đang được chọn mặc định là 'Tất cả'
    const handleTabPress = (tab: string) => {
        setActiveTab(tab)
    }
    const renderTabButton = (tab: string, text: string) => {
        const isActive = activeTab === tab;
        let backgroundColor = COLORS.White;
        let textColor = COLORS.MainBlue;
        let borderColor = COLORS.MainBlue;

        if (isActive) {
            backgroundColor = COLORS.MainBlue;
            textColor = COLORS.White;
            borderColor = COLORS.MainBlue;
        }

        return (
            <Pressable
                style={[
                    styles.btn,
                    {
                        backgroundColor: backgroundColor,
                        borderColor: borderColor,
                    },
                ]}
                onPress={() => handleTabPress(tab)}
            >
                <Text style={[styles.textbtn, { color: textColor }]}>{text}</Text>
            </Pressable>
        );
    };
    const ItemHotelAll = ({ item }: { item: ListHotel }) => {
        const minPrice = Math.min(...item.rooms.map(room => room.roomPrice));


        const onPressItemAll = () => {
            console.log(item._id);
            navigation.navigate('SearchDetailScreen', {
                hotelID: item._id.toString(),
                hotelAddress: item.hotelAddress,
                hotelImage: item.hotelDetail.hotelImage,
                hotelName: item.hotelName,
                hotelRates: item.hotelRates,
                hotelViews: getRandomView(),
            });
        }
        type FormattingFunction = (num: number) => string;
        const formatNumber: FormattingFunction = (num) => {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        };
        function getRandomView() {
            return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
        };

        function getMinRoomPrice(rooms: Array<{ roomPrice: number }>): number {
            if (rooms.length === 0) {
                return 0;
            }
            let minPrice = rooms[0].roomPrice;
            for (let i = 1; i < rooms.length; i++) {
                if (rooms[i].roomPrice < minPrice) {
                    minPrice = rooms[i].roomPrice;
                }
            }
            return minPrice;
        };

        // const minRoomPrice = getMinRoomPrice(rooms);


        return (
            <Pressable style={styles.containerItem} onPress={onPressItemAll}>
                <Image source={{ uri: item.hotelDetail.hotelImage }} style={styles.imageHotel} />
                <View style={styles.containerInfo}>
                    <Text style={styles.nameHotel} numberOfLines={1} ellipsizeMode='tail'>{item.hotelName}</Text>
                    <View style={styles.containerCenter}>
                        <View style={styles.containerStar}>
                            <Image source={ICON_STAR_TRON} style={styles.iconStar} />
                            <Text style={styles.star}>{item.hotelRates}</Text>
                        </View>
                        <Text style={styles.view}>({formatNumber(getRandomView())} lượt xem)</Text>
                    </View>
                    <View style={styles.containerBottom}>
                        <Text style={styles.price}>Từ {formatNumber(minPrice)} ₫</Text>
                        <Pressable style={styles.btnBook} onPress={onPressItemAll}>
                            <Text style={styles.textBook}>Chọn Phòng</Text>
                        </Pressable>
                    </View>
                </View>
            </Pressable>
        );
    };



    // const ItemHotelPopular = ({item, navigation}: {item: ListHotel; navigation: any }) => {
    //     const onPressItemPopular = () => {
    //         console.log(item);
    //         navigation.navigate('RoomListScreen');
    //     };
    //     if (item.isCheckPopular === true) {
    //         return (
    //             <Pressable style={styles.containerItem} onPress={onPressItemPopular}>
    //                 <Image source={item.imageHotel} style={styles.imageHotel} />
    //                 <View style={styles.containerInfo}>
    //                     <Text style={styles.nameHotel} numberOfLines={1} ellipsizeMode='tail'>{item.nameHotel}</Text>
    //                     <View style={styles.containerCenter}>
    //                         <View style={styles.containerStar}>
    //                             <Image source={ICON_STAR_TRON} style={styles.iconStar} />
    //                             <Text style={styles.star}>{item.star}</Text>
    //                         </View>
    //                         <Text style={styles.view}>({item.view} Lượt xem)</Text>
    //                     </View>
    //                     <View style={styles.containerBottom}>
    //                         <Text style={styles.price}>Từ {item.price} ₫</Text>
    //                         <Pressable style={styles.btnBook} onPress={onPressItemPopular}>
    //                             <Text style={styles.textBook}>Chọn Phòng</Text>
    //                         </Pressable>
    //                     </View>
    //                 </View>
    //             </Pressable>
    //         );
    //     }
    // };
    // const ItemHotelTrend = ({item, navigation}: {item: ListHotel; navigation: any }) => {
    //     const onPressItemTrend = () => {
    //         console.log(item);
    //         navigation.navigate('RoomListScreen');
    //     };
    //     if (item.isCheckTrend === true) {
    //         return (
    //             <Pressable style={styles.containerItem} onPress={onPressItemTrend}>
    //                 <Image source={item.imageHotel} style={styles.imageHotel} />
    //                 <View style={styles.containerInfo}>
    //                     <Text style={styles.nameHotel} numberOfLines={1} ellipsizeMode='tail'>{item.nameHotel}</Text>
    //                     <View style={styles.containerCenter}>
    //                         <View style={styles.containerStar}>
    //                             <Image source={ICON_STAR_TRON} style={styles.iconStar} />
    //                             <Text style={styles.star}>{item.star}</Text>
    //                         </View>
    //                         <Text style={styles.view}>({item.view} Lượt xem)</Text>
    //                     </View>
    //                     <View style={styles.containerBottom}>
    //                         <Text style={styles.price}>Từ {item.price} ₫</Text>
    //                         <Pressable style={styles.btnBook} onPress={onPressItemTrend}>
    //                             <Text style={styles.textBook}>Chọn Phòng</Text>
    //                         </Pressable>
    //                     </View>
    //                 </View>
    //             </Pressable>
    //         );
    //     }
    // };
    const renderList = () => {
        switch (activeTab) {
            case 'Tất cả':
                return (
                    <View style={styles.viewFlatList}>
                        <FlatList
                            data={hotels}
                            renderItem={ItemHotelAll}
                            keyExtractor={(item) => item._id.toString()}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                );
            // case 'Phổ biến':
            //     return (
            //         <View style={styles.viewFlatList}>
            //             <FlatList
            //                 data={DATAHOTEL}
            //                 renderItem={(props) => <ItemHotelPopular {...props} navigation={navigation} />}
            //                 keyExtractor={(item) => item.id.toString()}
            //                 showsVerticalScrollIndicator={false}
            //             />
            //         </View>
            //     );
            // case 'Xu hướng':
            // return (
            //     <View style={styles.viewFlatList}>
            //         <FlatList
            //             data={DATAHOTEL}
            //             renderItem={(props) => <ItemHotelTrend {...props} navigation={navigation} />}
            //             keyExtractor={(item) => item.id.toString()}
            //             showsVerticalScrollIndicator={false}
            //         />
            //     </View>
            // );
            default: return null;
        }
    };
    const onPressSearch = () => {
        console.log("Search result: " + text)
        navigation.navigate('SearchScreen');
    };
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Pressable onPress={onPressSearch}>
                    <Image source={ICON_SEARCH} style={styles.iconSearch} />
                </Pressable>
                <TextInput
                    value={text}
                    placeholder="Tìm kiếm"
                    style={[
                        styles.input,
                        {
                            fontFamily: text ? 'Exo2-Regular' : 'Exo2-Bold',
                            fontSize: text ? 14 : 16,
                            color: text ? COLORS.Black : "#C4C4C4",
                        },
                    ]}
                    onChangeText={text => setText(text)}

                />
            </View>
            <View style={styles.containerChidren}>
                <View style={styles.outlineButton}>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        contentContainerStyle={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 10,
                        }}
                    >
                        {renderTabButton('Tất cả', 'Tất cả')}
                        {renderTabButton('Phổ biến', 'Phổ biến')}
                        {renderTabButton('Xu hướng', 'Xu hướng')}
                    </ScrollView>
                </View>
                {renderList()}
            </View>
        </View >
    );
};

export default BookScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderColor: '#C4C4C4',
        borderWidth: 1,
        marginVertical: 15,
        borderRadius: 10,
        backgroundColor: '#F5F8FF',
        paddingHorizontal: 20,
        marginHorizontal: 20,
    },
    input: {
        flex: 1,
    },
    iconSearch: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    btn: {
        flex: 1,
        flexDirection: 'row',
        height: 40,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    textbtn: {
        fontSize: 18,
        fontFamily: 'Exo2-SemiBold',
        textAlign: 'center',
        lineHeight: 21,
        letterSpacing: 0.2,
    },
    containerChidren: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: COLORS.Blue_BG,
        paddingHorizontal: 20,
    },
    outlineButton: {
        height: 'auto',
        marginVertical: 15,
    },
    viewFlatList: {
        flex: 1,
        overflow: 'hidden',
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
        marginTop: 12,
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

});