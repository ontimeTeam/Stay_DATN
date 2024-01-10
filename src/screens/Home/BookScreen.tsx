import { StyleSheet, Text, View, TextInput, Image, ScrollView, Pressable, FlatList, ImageSourcePropType } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS } from '../../themes/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BookStackParamList } from '../../navigation/BookStack';
import { ICON_SEARCH, ICON_STAR, ICON_STAR_TRON, IMG_HOTEL_7, IMG_HOTEL_8, IMG_HOTEL_9 } from '../../../assets';
import axios from 'axios';

type PropsType = NativeStackScreenProps<BookStackParamList, 'BookScreen'>
interface ListHotel {
    id: number;
    //imageHotel: string; // khi ráp api thì sẽ dùng kiểu này, truyền vào uri
    imageHotel: ImageSourcePropType;
    nameHotel: string;
    star: string;   
    view: string;  // số lượt xem
    price: string; // giá
    isCheckPopular: boolean; // biến isCheckPopular dùng để kiểm tra xem item có phải là phổ biến hay không
    isCheckTrend: boolean;
    roomId?: number; // biến isCheckTrend dùng để kiểm tra xem item có phải là xu hướng hay không
}
const DATAHOTEL: ListHotel[] = ([
    // {
    //     id: 1,
    //     imageHotel: IMG_HOTEL_7,
    //     nameHotel: 'Park Hyatt Saigon',
    //     star: '5.0',
    //     view: '1420',
    //     price: '7.100.000',
    //     isCheckPopular: true,
    //     isCheckTrend: false,
    // },
    
])

const BookScreen: React.FC<PropsType> = (props) => {
    const { navigation, route } = props;
    const [text, setText] = React.useState('');
    const [activeTab, setActiveTab] = useState('Tất cả')
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
                    imageHotel: { uri: item.rooms[0]?.roomImage },
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
                imageHotel: { uri: item.rooms[0]?.roomImage },
                nameHotel: item.hotelName,
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
        //console.log("ItemHotelAll", item);
        
        const onPressItemAll = () => {
            const hotelID = item.id;
            console.log(hotelID);
            const roomId = item.roomId;
            console.log(roomId);
            // navigation.navigate('RoomListScreen');
            navigation.navigate('SearchDetailScreen', { hotelID: item.id, roomId });
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
                        <Pressable style={styles.btnBook} onPress={onPressItemAll}>
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