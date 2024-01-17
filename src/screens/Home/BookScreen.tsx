import { StyleSheet, Text, View, TextInput, Image, ScrollView, Pressable, FlatList, ImageSourcePropType, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { COLORS } from '../../themes/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BookStackParamList } from '../../navigation/BookStack';
import { ICON_SEARCH, ICON_STAR, ICON_STAR_TRON, IMG_HOTEL_7, IMG_HOTEL_8, IMG_HOTEL_9 } from '../../../assets';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

// interface ListHotel {
//     _id: Object;
//     hotelName: string;
//     hotelAddress: string,
//     hotelDetail: {
//         hotelImage: string;
//         hotelDescription: string;
//     };
//     hotelRates: number;
//     hotelViews: number;
//     rooms: {
//         _id: string;
//         roomPrice: number;
//         roomType: string;
//         roomImage: string;
//     }[];
// }

type RoomListScreenNavigationParams = {
    hotelID: string;
    // randomHotelViews: number[];
    // startDate: string;
    // endDate: string;
    // people: number;
};

type PropsType = NativeStackScreenProps<BookStackParamList, 'BookScreen'>
const BookScreen: React.FC<PropsType> = (props) => {
    const route = useRoute<RouteProp<BookStackParamList, 'RoomListScreen'>>();
    // const { randomHotelViews } = route.params as RoomListScreenNavigationParams;
    // const { navigation } = props;

    // type PropsType = NativeStackScreenProps<BookStackParamList, 'BookScreen'>
    interface ListHotel {
        id: string;
        //imageHotel: string; // khi ráp api thì sẽ dùng kiểu này, truyền vào uri
        imageHotel: string;
        nameHotel: string;
        addressHotel: string,
        star: string;
        view: string;  // số lượt xem
        price: string; // giá
        isCheckPopular: boolean; // biến isCheckPopular dùng để kiểm tra xem item có phải là phổ biến hay không
        isCheckTrend: boolean;
        roomId?: number; // biến isCheckTrend dùng để kiểm tra xem item có phải là xu hướng hay không
        hotelDescription: string
    }

    // const BookScreen: React.FC<PropsType> = (props) => {
    const { navigation } = props;
    const [text, setText] = React.useState('');
    const [activeTab, setActiveTab] = useState('Tất cả')
    const [hotels, setHotels] = useState<ListHotel[]>([]);
    const [loading, setLoading] = useState(true);
    const [isSearching, setIsSearching] = useState(false);
    // const [searchResults, setSearchResults] = useState<ListHotel[]>([]);
    const [randomHotelView, setRandomHotelView] = useState<number>(0);

    // const [hotelViews, setHotelViews] = useState(randomHotelView(data.length));


    // const getHotelsAPI = async () => {
    //     try {
    //         setLoading(true);
    //         const response = await axios.get('https://newapihtbk-production.up.railway.app/api/hotel/rooms/chitietht');
    //         const data: ListHotel[] = response.data;
    //         console.log("Hotel data: ", data);
    //         setHotels(data);
    //     } catch (error) {
    //         console.log('Error fetching hotel data: ', error);
    //     } finally {
    //         setLoading(false);
    //     };
    // };
    // const searchHotelByName = async () => {
    //     try {
    //         setIsSearching(true);
    //         const response = await axios.get(`https://stayapi-production.up.railway.app/api/hotel/search?queryType=hotelName&value=${text}`);
    //         const data: ListHotel[] = response.data;
    //         console.log("Search result:", response);
    //         setSearchResults(data);
    //     } catch (error) {
    //         console.error('Error searching:', error);
    //         // Handle error cases
    //     }
    // };

    // useEffect(() => {
    //     getHotelsAPI();
    // }, [searchResults]);

    // biến activeTab dùng để kiểm tra xem tab nào đang được chọn mặc định là 'Tất cả'

    const [apiData, setApiData] = useState<ListHotel[]>([]);

    const [searchResults, setSearchResults] = useState<ListHotel[]>([]);

    const onPressSearchs = async () => {
        try {
            // Show loading indicator here if needed

            const response = await axios.get(
                `https://newapihtbk-production.up.railway.app/api/hotel/search?queryType=hotelName&value=${text}`
            );

            const newData = response.data.map((item: any) => {

                return {
                    id: item._id,
                    imageHotel: item.hotelDetail.hotelImage,
                    nameHotel: item.hotelName,
                    star: item.hotelRates.toFixed(1),
                    view: '1420',
                    price: item.rooms[0]?.roomPrice,
                    isCheckPopular: true,
                    isCheckTrend: false,
                };
            });

            console.log("Search result:", newData);

            // Update the search results state
            setSearchResults(newData);
        } catch (error) {
            console.error('Error searching:', error);
            // Handle error cases, show an error message, or log it as needed
        } finally {
            // Hide loading indicator here if needed
        }
    };

    useEffect(() => {
        const fetchHotelData = async () => {
            try {
                const response = await axios.get(
                    'https://newapihtbk-production.up.railway.app/api/hotel/rooms/chitietht'
                );

                //console.log("aaa", response);

                const newData = response.data.map((item: any) => ({
                    id: item._id,
                    imageHotel: item.hotelDetail.hotelImage,
                    hotelDescription: item.hotelDetail.hotelDescription,
                    nameHotel: item.hotelName,
                    addressHotel: item.hotelAddress,
                    star: item.hotelRates.toFixed(1), // Map hotelRates to star with one decimal place
                    view: '1420', // Replace with the actual view data from the API
                    price: item.rooms[0]?.roomPrice.toString(), // Map roomPrice to price as a string
                    isCheckPopular: true, // Replace with the actual isCheckPopular data from the API
                    isCheckTrend: false, // Replace with the actual isCheckTrend data from the API
                    roomId: item.rooms[0]?._id,
                }));

                setApiData(newData);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error cases
            }
        };

        fetchHotelData();
    }, []); // Empty dependency array ensures the effect runs only once

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
        // const minPrice = Math.min(...item.rooms.map(room => room.roomPrice));

        // const onPressItemAll = () => {
        //     console.log(item.id);
        //     navigation.navigate('HotelDetailScreen', {
        //         hotelID: item.id.toString(),
        //         hotelAddress: item.hotelAddress,
        //         hotelImage: item.hotelDetail.hotelImage,
        //         hotelDescription: item.hotelDetail.hotelDescription,
        //         hotelName: item.hotelName,
        //         hotelViews: randomHotelView,
        //         roomPrice: item.rooms[0].roomPrice,
        //     });
        // };

        const onPressSelect = () => {
            console.log(item.id, item.nameHotel, item.imageHotel);
            navigation.navigate('SearchDetailScreen', {
                hotelID: item.id.toString(),
                hotelName: item.nameHotel,
                hotelAddress: item.addressHotel,
                hotelImage: item.imageHotel,
                hotelRates: item.star,
                hotelViews: randomHotelView,
            });
        };
        // format number: 1,000,000
        type FormattingFunction = (num: number) => string;
        const formatNumber: FormattingFunction = (num) => {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        };

        // function getMinRoomPrice(rooms: Array<{ roomPrice: number }>): number {
        //     if (rooms.length === 0) {
        //         return 0;
        //     }
        //     let minPrice = rooms[0].roomPrice;
        //     for (let i = 1; i < rooms.length; i++) {
        //         if (rooms[i].roomPrice < minPrice) {
        //             minPrice = rooms[i].roomPrice;
        //         }
        //     }
        //     return minPrice;
        // };
        const randomHotelView = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

        //console.log("ItemHotelAll", item);

        const onPressItemAll = () => {
            const hotelID = item.id;
            console.log(hotelID, item.nameHotel);
            const roomId = item.roomId;
            console.log(roomId);
            // navigation.navigate('RoomListScreen');
            navigation.navigate('HotelDetailScreen', {
                hotelID: item.id,
                roomId,
                roomPrice: item.price,
                hotelImage: item.imageHotel,
                hotelName: item.nameHotel,
                hotelAddress: item.addressHotel,
                hotelDescription: item.hotelDescription,
                hoteViews: randomHotelView
            });
        }
        return (
            <Pressable onPress={onPressItemAll} style={styles.containerItem}>
                <FastImage source={{ uri: item.imageHotel }} style={styles.imageHotel} />
                <View style={styles.containerInfo}>
                    <Text style={styles.nameHotel} numberOfLines={1} ellipsizeMode="tail">
                        {item.nameHotel}
                    </Text>
                    <View style={styles.containerCenter}>
                        <View style={styles.containerStar}>
                            <Image source={ICON_STAR_TRON} style={styles.iconStar} />
                            <Text style={styles.star}>{item.star}</Text>
                        </View>
                        <Text style={styles.view}>({formatNumber(randomHotelView)} lượt xem)</Text>
                    </View>
                    <View style={styles.containerBottom}>
                        <Text style={styles.price}>Từ {formatNumber(Number(item.price))} ₫</Text>
                        <Pressable style={styles.btnBook} onPress={onPressSelect}>
                            <Text style={styles.textBook}>Chọn Phòng</Text>
                        </Pressable>
                    </View>
                </View>
            </Pressable>
        );
    };
    const ItemHotelPopular = ({ item, navigation }: { item: ListHotel; navigation: any }) => {
        const onPressItemPopular = () => {
            // navigation.navigate('RoomListScreen');
            // console.log(item);
            const hotelID = item.id;
            const roomId = item.roomId; // Assuming you have a roomId property in your data
            console.log(hotelID, roomId);
            navigation.navigate('RoomListScreen', { hotelID, roomId });
        };
        if (item.isCheckPopular === true) {
            return (
                <Pressable style={styles.containerItem} onPress={onPressItemPopular}>
                    <Image source={{ uri: item.imageHotel }} style={styles.imageHotel} />
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
                            <Pressable style={styles.btnBook} onPress={onPressItemPopular}>
                                <Text style={styles.textBook}>Chọn Phòng</Text>
                            </Pressable>
                        </View>
                    </View>
                </Pressable>
            );
        }
    };
    const ItemHotelTrend = ({ item, navigation }: { item: ListHotel; navigation: any }) => {
        const onPressItemTrend = () => {
            // console.log(item);
            // navigation.navigate('RoomListScreen');
            const roomId = item.roomId;
            navigation.navigate('RoomListScreen', { hotelId: item.id, roomId });
            console.log(item.id);
            console.log(roomId);
        };
        if (item.isCheckTrend === true) {
            return (
                <Pressable style={styles.containerItem} onPress={onPressItemTrend}>
                    <Image source={{ uri: item.imageHotel }} style={styles.imageHotel} />
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
                            <Pressable style={styles.btnBook} onPress={onPressItemTrend}>
                                <Text style={styles.textBook}>Chọn Phòng</Text>
                            </Pressable>
                        </View>
                    </View>
                </Pressable>
            );
        }
    };
    const renderList = () => {
        switch (activeTab) {
            case 'Tất cả':
                return (
                    <View style={styles.viewFlatList}>
                        <FlatList
                            data={text ? searchResults : apiData}
                            renderItem={ItemHotelAll}
                            keyExtractor={(item) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                );
            case 'Phổ biến':
                return (
                    <View style={styles.viewFlatList}>
                        <FlatList
                            data={text ? searchResults : apiData}
                            renderItem={(props) => <ItemHotelPopular {...props} navigation={navigation} />}
                            keyExtractor={(item) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                );
            case 'Xu hướng':
                return (
                    <View style={styles.viewFlatList}>
                        <FlatList
                            data={text ? searchResults : apiData}
                            renderItem={(props) => <ItemHotelTrend {...props} navigation={navigation} />}
                            keyExtractor={(item) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                );
            default:
                return null;
        }
    };
    // const onPressSearch = () => {
    //     console.log("Search result: " + text)
    //     navigation.navigate('SearchScreen');
    // };
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Pressable onPress={onPressSearchs}>
                    <Image source={ICON_SEARCH} style={styles.iconSearch} />
                </Pressable>
                <TextInput
                    value={text}
                    // onChangeText={setText}
                    placeholder="Tìm kiếm"
                    style={[
                        styles.input,
                        {
                            fontFamily: text ? 'Exo2-Regular' : 'Exo2-Bold',
                            fontSize: text ? 14 : 16,
                            color: text ? COLORS.Black : "#C4C4C4",
                        },
                    ]}
                    //onChangeText={text => setText(text)}
                    onChangeText={(inputText) => setText(inputText)}
                />
                <TouchableOpacity onPress={onPressSearchs}>
                    <Image source={ICON_SEARCH} style={styles.iconSearch} />
                </TouchableOpacity>
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