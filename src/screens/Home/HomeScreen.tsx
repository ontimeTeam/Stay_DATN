import { StyleSheet, ScrollView, View, Dimensions, Pressable, Image, ImageSourcePropType, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useRef, useEffect, useContext, } from 'react'
import { COLORS } from '../../themes/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/HomeStack';
import Header from '../../components/header/Header';
import { AVATAR, ICON_PLANE, ICON_PLANE_WHITE, ICON_STAR, IMG_DN, IMG_HCM, IMG_HN, IMG_HOTEL_1, IMG_HOTEL_2, IMG_HOTEL_3, IMG_HOTEL_4, IMG_HOTEL_5, IMG_HOTEL_6, IMG_VT, LOGO } from '../../../assets';
import axios from 'axios';
import { useSelector } from 'react-redux'
import { selectUserData } from '../../share-state/redux/selectors/userSelector';
import { UserState } from '../../share-state/redux/reducers/userReducer';
import { AppContext } from '../../share-state/context/AppContext';
import FastImage from 'react-native-fast-image';

type PropsType = NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>;
interface Banner {
    id: number;
    // imageHotel: string; // khi ráp api thì sẽ dùng kiểu này, truyền vào uri
    imageHotel: ImageSourcePropType; // khi dùng local thì sẽ dùng kiểu này, truyền vào require
    nameHotel: string;
    star: string;
}
interface ListHotel {
    _id: Object;
    hotelName: string;
    hotelAddress: string,
    hotelDetail: {
        hotelImage: string;
        hotelDescription: string;
    };
    hotelRates: number;
    view: number;
    rooms: {
        roomPrice: number;
        roomType: string;
        roomImage: string;
    }[];
}
interface ListLocation {
    id: number;
    // imageLocation: string; // khi ráp api thì sẽ dùng kiểu này, truyền vào uri
    imageLocation: ImageSourcePropType;
    nameLocation: string;
}
const DATABANNER: Banner[] = [
    {
        id: 1,
        imageHotel: IMG_HOTEL_1,
        nameHotel: 'Majestic SaiGon Hotel',
        star: '5.0',
    },
    {
        id: 2,
        imageHotel: IMG_HOTEL_2,
        nameHotel: 'Au Lac Charner Hotel',
        star: '5.0',
    },
    {
        id: 3,
        imageHotel: IMG_HOTEL_3,
        nameHotel: 'Bong Sen Hotel Saigon',
        star: '5.0',
    },
    {
        id: 4,
        imageHotel: IMG_HOTEL_4,
        nameHotel: 'Caravelle Saigon Hotel',
        star: '5.0',
    },
    {
        id: 5,
        imageHotel: IMG_HOTEL_5,
        nameHotel: 'La Siesta Premium',
        star: '5.0',
    },
    {
        id: 6,
        imageHotel: IMG_HOTEL_6,
        nameHotel: 'Triple E Hotel Metro',
        star: '5.0',
    },
];
// const DATAHOTEL: ListHotel[] = ([
//     {
//         id: 1,
//         imageHotel: IMG_HOTEL_1,
//         nameHotel: 'Majestic SaiGon Hotel',
//         nameRoom: 'Deluxe Double Room',
//         star: '5.0',
//         isCheckPopular: true,
//         isCheckTrend: false,
//     },
//     {
//         id: 2,
//         imageHotel: IMG_HOTEL_2,
//         nameHotel: 'Au Lac Charner Hotel',
//         nameRoom: 'Deluxe Double Room',
//         star: '5.0',
//         isCheckPopular: false,
//         isCheckTrend: true,
//     },
//     {
//         id: 3,
//         imageHotel: IMG_HOTEL_3,
//         nameHotel: 'Bong Sen Hotel Saigon',
//         nameRoom: 'Luxury Room with Balcony',
//         star: '5.0',
//         isCheckPopular: true,
//         isCheckTrend: false,
//     },
//     {
//         id: 4,
//         imageHotel: IMG_HOTEL_4,
//         nameHotel: 'Caravelle Saigon Hotel',
//         nameRoom: 'Deluxe Double Room',
//         star: '5.0',
//         isCheckPopular: false,
//         isCheckTrend: true,
//     },
//     {
//         id: 5,
//         imageHotel: IMG_HOTEL_5,
//         nameHotel: 'La Siesta Premium',
//         nameRoom: 'Luxury Deluxe Room - 1 King Bed',
//         star: '5.0',
//         isCheckPopular: true,
//         isCheckTrend: false,
//     },
//     {
//         id: 6,
//         imageHotel: IMG_HOTEL_6,
//         nameHotel: 'Triple E Hotel Metro',
//         nameRoom: 'Club Lounge Presidential Suite - Club Benefits Included',
//         star: '5.0',
//         isCheckPopular: false,
//         isCheckTrend: true,
//     },
// ]);
const DATALOCATION: ListLocation[] = ([
    {
        id: 1,
        imageLocation: IMG_HCM,
        nameLocation: 'Hồ Chí Minh',
    },
    {
        id: 2,
        imageLocation: IMG_HN,
        nameLocation: 'Hà Nội',
    },
    {
        id: 3,
        imageLocation: IMG_DN,
        nameLocation: 'Đà Nẵng',
    },
    {
        id: 4,
        imageLocation: IMG_VT,
        nameLocation: 'Vũng Tàu',
    }
]);
const ItemBanner = ({ item, onPress }: {
    item: ListHotel;
    onPress: () => void;
}) => {
    const [placeIcon, setPlaceIcon] = useState(ICON_PLANE_WHITE);
    // biến placeIcon dùng để set icon cho địa điểm, mặc định là ICON_PLANE_WHITE
    const [isCheck, setIsCheck] = useState(false);
    // biến isCheck dùng để kiểm tra xem icon đã được chọn hay chưa, mặc định là false
    const toggleCheckIconplace = () => {
        setIsCheck(!isCheck);
        setPlaceIcon(isCheck ? ICON_PLANE_WHITE : ICON_PLANE);
        console.log(!isCheck);
        // biến isCheck dùng để kiểm tra xem icon đã được chọn hay chưa và set icon tương ứng
        // khi ráp API biến isCheck sẽ được dùng để kiểm tra xem địa điểm đã được chọn hay chưa
        // nghĩa là trong data sẽ có 1 trường boolean để kiểm tra xem địa điểm đã được chọn hay chưa
        // khi đó biến isCheck sẽ được set bằng giá trị boolean đó và set icon tương ứng
        // ví dụ: isCheck = item.isWantToGo
        // khi isCheck = true thì icon sẽ là ICON_PLANE nghĩa là địa điểm đã được chọn
        // khi isCheck = false thì icon sẽ là ICON_PLANE_WHITE nghĩa là địa điểm chưa được chọn
    }
    return (
        <Pressable style={styles.viewContainer} onPress={onPress}>
            <FastImage
                // source={{ uri: item.imageHotel }} // khi ráp api thì sẽ dùng kiểu này, truyền vào uri
                source={{ uri: item.hotelDetail.hotelImage }}
                style={styles.imgBanner}
            />
            <View
                style={styles.viewChildren}>
                <Text style={styles.txtNameBanner} numberOfLines={1} ellipsizeMode='tail'>
                    {item.hotelName}
                </Text>
                <View style={styles.viewStar}>
                    <Image
                        source={ICON_STAR}
                        style={styles.iconStar}
                    />
                    <Text style={styles.txtStar}>
                        {item.hotelRates}
                    </Text>
                </View>
                <View style={styles.viewBottomBanner}>
                    {/* <Pressable onPress={toggleCheckIconplace}>
                        <Image
                            source={placeIcon}
                            style={styles.iconPlace}
                        />
                    </Pressable> */}
                </View>
            </View>
        </Pressable>
    );
};
const HomeScreen: React.FC<PropsType> = props => {
    const { navigation } = props;
    const [hideElement, setHideElement] = useState(false);    // biến hideElement dùng để ẩn hiện header khi scroll

    const [hotels, setHotels] = useState<ListHotel[]>([]);
    const [loading, setLoading] = useState(true);

    const { user } = useContext(AppContext);
    // console.log('User data:', dataUser)

    const handleScroll = (event: any) => {
        const offsetY = event.nativeEvent.contentOffset.y + 10;
        setHideElement(offsetY > 20);
    };
    // biến offsetY dùng để lấy giá trị của scroll và set giá trị cho biến hideElement
    // khi scroll lên thì offsetY sẽ tăng dần, khi scroll xuống thì offsetY sẽ giảm dần
    // khi offsetY > 20 thì header sẽ ẩn đi và ngược lại
    const scrollViewRef = useRef<ScrollView>(null);
    // biến scrollViewRef dùng để scroll đến vị trí mới
    const ITEM_WIDTH = Dimensions.get('window').width * 0.9 + 15;
    const [currentIndex, setCurrentIndex] = useState(0);
    // biến currentIndex dùng để lấy vị trí hiện tại của item trong list banner
    useEffect(() => {
        const interval = setInterval(() => {
            // Tăng giá trị của currentIndex lên 1
            setCurrentIndex(prevIndex => (prevIndex + 1) % DATABANNER.length);
            // Nếu currentIndex lớn hơn hoặc bằng độ dài của list banner thì sẽ set currentIndex = 0
        }, 1800);
        // interval sẽ được chạy lại sau 1800ms là 1.8s
        // Xóa interval khi component bị unmount
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Tự động cuộn đến vị trí mới khi currentIndex thay đổi
        scrollViewRef.current?.scrollTo({
            x: currentIndex * ITEM_WIDTH,
            animated: true,
        });
    }, [currentIndex]);

    const getHotelsAPI = async () => {
        try {
            const response = await axios.get('https://newapihtbk-production.up.railway.app/api/hotel/rooms/chitietht');
            const data: ListHotel[] = response.data;
            setHotels(data);
            setLoading(false);
        } catch (error) {
            console.log('Error fetching hotel data: ', error);
        };
    };
    useEffect(() => {
        getHotelsAPI();
    }, []);

    const randomHotelView = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

    const renderItemBanner = React.useMemo(
        () =>
            ({ item, userID }: { item: ListHotel, userID: string | undefined }) => {
                return (
                    <ItemBanner
                        onPress={() => {
                            console.log(item._id);
                            navigation.navigate('HotelDetailScreen', {
                                hotelID: item._id.toString(),
                                hotelAddress: item.hotelAddress,
                                hotelImage: item.hotelDetail.hotelImage,
                                hotelDescription: item.hotelDetail.hotelDescription,
                                hotelName: item.hotelName,
                                hotelRates: item.hotelRates,
                                hotelViews: randomHotelView,
                                roomPrice: item.rooms[0].roomPrice,
                                userID: userID
                            });
                        }}
                        item={item}
                        key={item._id.toString()}
                    />
                );
            },
        [],
    );
    const [activeTab, setActiveTab] = useState('Tất cả')
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
        const onPressItemAll = () => {
            console.log(item);
            navigation.navigate('RoomDetailScreen');
        }
        return (

            <View>
                {
                    loading ? (
                        <ActivityIndicator size="large" color="#0000ff" />
                    ) : (
                        <Pressable style={styles.viewContainer} onPress={onPressItemAll}>
                            <FastImage
                                // source={{ uri: item.imageHotel }} // khi ráp api thì sẽ dùng kiểu này, truyền vào uri
                                source={{ uri: item.rooms[0].roomImage }}
                                style={styles.imgBanner}
                            />
                            <View
                                style={styles.viewChildren}>
                                <Text style={styles.txtNameBanner} numberOfLines={1} ellipsizeMode='tail'>{item.hotelName}</Text>
                                <View style={styles.viewStar}>
                                    <Image
                                        source={ICON_STAR}
                                        style={styles.iconStar}
                                    />
                                    <Text style={styles.txtStar}>
                                        {item.hotelRates}
                                    </Text>
                                </View>
                                <View style={styles.viewBottomHotelList}>
                                    <Text style={styles.txtNameHotelList} numberOfLines={1} ellipsizeMode='tail'>
                                        {item.rooms[0].roomType}
                                    </Text>
                                </View>
                            </View>
                        </Pressable>
                    )}
            </View>

        );
    };
    const ItemHotelPopular = ({ item }: { item: ListHotel }) => {
        const onPressItemPopular = () => {
            console.log(item);
            navigation.navigate('RoomDetailScreen');
        };

        // if (item.isCheckPopular === true) {
        return (
            <Pressable style={styles.viewContainer} onPress={onPressItemPopular}>
                <Image
                    // source={{ uri: item.imageHotel }} // khi ráp api thì sẽ dùng kiểu này, truyền vào uri
                    source={{ uri: item.rooms[0].roomImage }}
                    style={styles.imgBanner}
                />
                <View style={styles.viewChildren}>
                    <Text style={styles.txtNameBanner} numberOfLines={1} ellipsizeMode='tail'>{item.hotelName}</Text>
                    <View style={styles.viewStar}>
                        <Image source={ICON_STAR} style={styles.iconStar} />
                        <Text style={styles.txtStar}>{item.hotelRates}</Text>
                    </View>
                    <View style={styles.viewBottomHotelList}>
                        <Text style={styles.txtNameHotelList} numberOfLines={1} ellipsizeMode="tail">
                            {item.rooms[0].roomType}
                        </Text>
                    </View>
                </View>
            </Pressable>
        );
        // }
    };
    const ItemHotelTrend = ({ item }: { item: ListHotel }) => {
        const onPressItemTrend = () => {
            console.log(item);
            navigation.navigate('RoomDetailScreen');
        };

        // if (item.isCheckTrend === true) {
        return (
            <Pressable style={styles.viewContainer} onPress={onPressItemTrend}>
                <Image
                    source={{ uri: item.rooms[0].roomImage }}     // khi ráp api thì sẽ dùng kiểu này, truyền vào uri
                    style={styles.imgBanner}
                />
                <View style={styles.viewChildren}>
                    <Text style={styles.txtNameBanner} numberOfLines={1} ellipsizeMode="tail">{item.hotelName}</Text>
                    <View style={styles.viewStar}>
                        <Image source={ICON_STAR} style={styles.iconStar} />
                        <Text style={styles.txtStar}>{item.hotelRates}</Text>
                    </View>
                    <View style={styles.viewBottomHotelList}>
                        <Text style={styles.txtNameHotelList} numberOfLines={1} ellipsizeMode="tail">
                            {item.rooms[0].roomType}
                        </Text>
                    </View>
                </View>
            </Pressable>
        );
        // }
        return null;
    };
    const renderList = () => {
        switch (activeTab) {
            case 'Tất cả':
                return (
                    <View style={styles.viewFlatList}>
                        <FlatList
                            data={hotels}
                            renderItem={ItemHotelAll}
                            keyExtractor={(item) => item._id.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                );
            case 'Phổ biến':
                return (
                    <View style={styles.viewFlatList}>
                        <FlatList
                            data={hotels}
                            renderItem={ItemHotelPopular}
                            keyExtractor={(item) => item._id.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                );
            case 'Xu hướng':
                return (
                    <View style={styles.viewFlatList}>
                        <FlatList
                            data={hotels}
                            renderItem={ItemHotelTrend}
                            keyExtractor={(item) => item._id.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                );
            default:
                return null;
        }
    };
    const onPressItemLocation = () => {
        navigation.navigate('HotelCityListScreen');
    }
    const renderItemLocation = ({ item }: { item: ListLocation }) => {
        return (
            <Pressable style={{ flex: 1, marginEnd: 15 }} onPress={onPressItemLocation}>
                <Image
                    // source={{ uri: item.imageLocation }} // khi ráp api thì sẽ dùng kiểu này, truyền vào uri
                    source={item.imageLocation}
                    style={styles.imgLocation}
                />
                <View style={styles.viewTitleBottom}>
                    <Text style={styles.txtTitleBottom}>
                        {item.nameLocation}
                    </Text>
                    <Text style={styles.txtTitleMiniBottom}>
                        Khám phá
                    </Text>
                </View>
            </Pressable>
        );
    };
    return (
        <View style={styles.container}>
            <Header
                styleContainer={{ backgroundColor: COLORS.White }}
                iconLeft={LOGO}
                textCenter={user?.username}
                iconRight={{ uri: user?.img }}
                styleIconLeft={{ width: 60, height: 60 }}
                styleIconRight={{ width: 40, height: 40, borderRadius: 40 / 2, borderColor: COLORS.MainBlue, borderWidth: 2 }}
                eventLeft={() => navigation.navigate('HomeScreen')}
                eventRight={() => navigation.navigate('ProfileScreen')}
            />
            <ScrollView showsVerticalScrollIndicator={false} onScroll={handleScroll}
                style={{
                    backgroundColor: COLORS.White,
                    flex: 1,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        overflow: 'hidden',
                        borderTopLeftRadius: 12,
                        borderBottomLeftRadius: 12,
                        marginStart: 20,
                    }}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ref={scrollViewRef}
                        pagingEnabled
                        onMomentumScrollEnd={event => {
                            const contentOffset = event.nativeEvent.contentOffset.x;
                            const index = Math.round(contentOffset / ITEM_WIDTH);
                            setCurrentIndex(index);
                        }}>
                        <View style={{ flexDirection: 'row' }}>
                            {hotels.map((item, index) => renderItemBanner({ item, userID: undefined }))}
                        </View>
                    </ScrollView>
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
                                paddingStart: 20,
                                paddingEnd: 15,
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
                <View style={styles.viewBottom}>
                    <Text style={styles.titleLocation}>
                        Các địa điểm
                    </Text>
                    <FlatList
                        data={DATALOCATION}
                        renderItem={renderItemLocation}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.Blue_BG,
    },
    containerChidren: {
        flex: 1,
        alignContent: 'center',
    },
    outlineButton: {
        height: 'auto',
        marginVertical: 15,
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
    viewContainer: {
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').width * 0.5,
        borderRadius: 12,
        marginEnd: 15,
        overflow: 'hidden',
    },
    viewChildren: {
        position: 'absolute',
        left: 15,
        right: 30,
        top: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imgBanner: {
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').width * 0.5,
        flex: 1,
        resizeMode: 'stretch', // sử dụng resizeMode: 'stretch' để kéo dãn ảnh
        // resizeMode: 'cover', // sử dụng resizeMode: 'cover' để ảnh không bị kéo dãn
        // dùng kiểu nào tùy vào thiết kế nha
        borderRadius: 8,
        // marginTop: 15,
    },
    txtNameBanner: {
        color: COLORS.White,
        fontFamily: 'Exo2-Bold',
        fontSize: 24,
    },
    viewStar: {
        position: 'absolute',
        left: Dimensions.get('screen').width * 0.9 - 80,
        backgroundColor: COLORS.MainBlue,
        width: 'auto',
        height: 30,
        borderRadius: 15,
        gap: 5,
        paddingHorizontal: 5,
        paddingVertical: 3,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconStar: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
    txtStar: {
        color: COLORS.White,
        fontFamily: 'Exo2-SemiBold',
        fontSize: 15,
    },
    viewBottomBanner: {
        position: 'absolute',
        top: Dimensions.get('screen').width * 0.5 - 50,
        left: Dimensions.get('screen').width * 0.9 - 45,
    },
    iconPlace: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    viewFlatList: {
        flex: 1,
        overflow: 'hidden',
        marginStart: 20,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    viewBottomHotelList: {
        position: 'absolute',
        top: Dimensions.get('screen').width * 0.5 - 60,
        left: 0,
        right: 0,
    },
    txtNameHotelList: {
        color: COLORS.White,
        fontFamily: 'Exo2-Regular',
        fontSize: 22,
    },
    titleLocation: {
        color: COLORS.Black,
        fontFamily: 'Exo2-Bold',
        fontSize: 22,
        marginVertical: 15,
    },
    viewBottom: {
        flex: 1,
        marginStart: 20,
        marginBottom: 20,
    },
    imgLocation: {
        width: Dimensions.get('screen').width * 0.5 - 15,
        height: Dimensions.get('screen').width * 0.5 - 15,
        borderRadius: 16,
        resizeMode: 'stretch',
    },
    viewTitleBottom: {
        position: 'absolute',
        bottom: 10,
        left: 12,
        right: 12,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    txtTitleBottom: {
        color: COLORS.White,
        fontFamily: 'Exo2-SemiBold',
        fontSize: 20,
    },
    txtTitleMiniBottom: {
        color: COLORS.White,
        fontFamily: 'Exo2-Regular',
        fontSize: 14,
    },
})