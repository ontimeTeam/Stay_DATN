import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Pressable, ScrollView, Image, ImageSourcePropType, FlatList, ListRenderItemInfo } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { ICON_CANCEL, ICON_CHECK, ICON_CLOCK, ICON_MONEYCHECK, ICON_PLANE, ICON_TRASH, IC_BACK, IMG_NOGPS, IMG_ROOM, IMG_ROOM2, IMG_ROOM3 } from '../../assets';
import Header from '../components/header/Header';
import { SwipeListView } from 'react-native-swipe-list-view';

export interface Item {
    id: number;
    image: ImageSourcePropType;
    nameHotel: string;
    roomName: string;
}

const Trip = () => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
    const [keyExtractorUpdateCount, setKeyExtractorUpdateCount] = useState(0);

    const [data, setData] = useState<Item[]>([
        {
            id: 1,
            image: IMG_ROOM,
            nameHotel: 'Fusion Original Saigon',
            roomName: 'Luxury Deluxe Room - 1 King Bed',
        },
        {
            id: 2,
            image: IMG_ROOM,
            nameHotel: 'Fusion Original Saigon',
            roomName: 'Luxury Deluxe Room - 1 King Bed',
        },
        {
            id: 3,
            image: IMG_ROOM,
            nameHotel: 'Fusion Original Saigon',
            roomName: 'Luxury Deluxe Room - 1 King Bed',
        },
        {
            id: 4,
            image: IMG_ROOM,
            nameHotel: 'Fusion Original Saigon',
            roomName: 'Luxury Deluxe Room - 1 King Bed',
        },
        {
            id: 5,
            image: IMG_ROOM,
            nameHotel: 'Fusion Original Saigon',
            roomName: 'Luxury Deluxe Room - 1 King Bed',
        },
    ]);
    const [dataConfirm, setdataConfirm] = useState<Item[]>([
        {
            id: 1,
            image: IMG_ROOM,
            nameHotel: 'Fusion Original Saigon',
            roomName: 'Luxury Room with Balcony',
        },
        {
            id: 2,
            image: IMG_ROOM,
            nameHotel: 'Fusion Original Saigon',
            roomName: 'Luxury Room with Balcony',
        },
        {
            id: 3,
            image: IMG_ROOM,
            nameHotel: 'Fusion Original Saigon',
            roomName: 'Luxury Room with Balcony',
        },
        {
            id: 4,
            image: IMG_ROOM,
            nameHotel: 'Fusion Original Saigon',
            roomName: 'Luxury Room with Balcony',
        },
        {
            id: 5,
            image: IMG_ROOM,
            nameHotel: 'Fusion Original Saigon',
            roomName: 'Luxury Room with Balcony',
        },
    ]);
    const [dataComplete, setdataComplete] = useState<Item[]>([
        {
            id: 1,
            image: IMG_ROOM2,
            nameHotel: 'Park Hyatt Saigon ',
            roomName: 'Deluxe Double Room',
        },
        {
            id: 2,
            image: IMG_ROOM2,
            nameHotel: 'Park Hyatt Saigon ',
            roomName: 'Deluxe Double Room',
        },
        {
            id: 3,
            image: IMG_ROOM2,
            nameHotel: 'Park Hyatt Saigon ',
            roomName: 'Deluxe Double Room',
        },
        {
            id: 4,
            image: IMG_ROOM2,
            nameHotel: 'Park Hyatt Saigon ',
            roomName: 'Deluxe Double Room',
        },
        {
            id: 5,
            image: IMG_ROOM2,
            nameHotel: 'Park Hyatt Saigon ',
            roomName: 'Deluxe Double Room',
        },
    ]);
    const [dataCancel, setdataCancel] = useState<Item[]>([
        {
            id: 1,
            image: IMG_ROOM3,
            nameHotel: 'Pullman Hanoi Hotel ',
            roomName: 'Club Lounge Presidential Suite - Club Benefits Included',
        },
        {
            id: 2,
            image: IMG_ROOM3,
            nameHotel: 'Pullman Hanoi Hotel ',
            roomName: 'Club Lounge Presidential Suite - Club Benefits Included',
        },
        {
            id: 3,
            image: IMG_ROOM3,
            nameHotel: 'Pullman Hanoi Hotel ',
            roomName: 'Club Lounge Presidential Suite - Club Benefits Included',
        },
        {
            id: 4,
            image: IMG_ROOM3,
            nameHotel: 'Pullman Hanoi Hotel ',
            roomName: 'Club Lounge Presidential Suite - Club Benefits Included',
        },
        {
            id: 5,
            image: IMG_ROOM3,
            nameHotel: 'Pullman Hanoi Hotel ',
            roomName: 'Club Lounge Presidential Suite - Club Benefits Included',
        },

    ]);
    const onDelete = (itemId: number) => {
        console.log("Id: " + itemId);
        const updatedData = dataCancel.filter((item) => item.id !== itemId);
        setdataCancel(updatedData);
    };
    const initialLayout = { width: Dimensions.get('window').width };

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Sắp tới' },
        { key: 'second', title: 'Đã hoàn thành' },
        { key: 'third', title: 'Đã hủy' },
    ]);

    const renderTabBar = (props: any) => (
        <View style={styles.tabBar}>
            {props.navigationState.routes.map((route: any, i: number) => (
                <TouchableOpacity
                    key={route.key}
                    style={[
                        styles.tabItem,
                        index === i ? styles.tabItemSelected : null,
                    ]}
                    onPress={() => setIndex(i)}
                >
                    <Text
                        style={[
                            styles.tabTitle,
                            index === i ? styles.tabTitleSelected : null,
                        ]}
                    >
                        {route.title}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );

    const [activeTab, setActiveTab] = useState('')

    const handleTabPress = (tab: string) => {
        setActiveTab(tab)
    }
    const renderTabButton = (tab: string, text: string) => {
        const isActive = activeTab === tab;
        let backgroundColor = 'white';
        let textColor = '#4461F2';
        let borderColor = 'white';

        if (isActive) {
            backgroundColor = '#E2E7FF';
            textColor = '#4461F2';
            borderColor = '#4461F2';
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
    const renderListHotelWant = ({ item }: { item: Item }) => {
        return (
            <View
                key={item.id}
                style={styles.rowItem}>
                <View style={styles.rowItemChildren}>
                    <Image
                        source={item.image}
                        style={styles.imageItem}
                    />
                    <View style={{ flex: 1, width: '100%', marginLeft: 16 }}>
                        <Text style={styles.textNameHotel}>
                            {item.nameHotel}
                        </Text>
                        <Text style={styles.textRoomName}>
                            {item.roomName}
                        </Text>
                        <View style={styles.tag}>
                            <Image source={ICON_PLANE} style={{ width: 14, height: 14, marginRight: 5 }} />
                            <Text style={styles.textTag}>
                                Muốn đến
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ borderBottomColor: 'rgba(0, 0, 0, 0.25)', borderBottomWidth: 1, marginVertical: 20 }}>
                </View>
                <Pressable style={styles.viewbtnTag}>
                    <Text style={styles.textbtnTag}>
                        Đặt phòng ngay!
                    </Text>
                </Pressable>
            </View>
        );
    };
    const renderItemWant = () => {
        if (data.length === 0) {
            return (
                <View style={styles.contanerChildren}>
                    <Image source={IMG_NOGPS} style={{ width: 250, height: 200, alignSelf: 'center', }} />
                    <Text style={styles.textNo}>Bạn chưa có chuyến đi nào</Text>
                </View>
            )
        }
        else {
            return (
                <View style={styles.ViewFlatList}>
                    <FlatList
                        data={data}
                        renderItem={renderListHotelWant}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            )
        }
    }
    const renderListHotelPay = ({ item }: { item: Item }) => {
        return (
            <View
                key={item.id}
                style={styles.rowItem}>
                <View style={styles.rowItemChildren}>
                    <Image
                        source={item.image}
                        style={styles.imageItem}
                    />
                    <View style={{ flex: 1, width: '100%', marginLeft: 16 }}>
                        <Text style={styles.textNameHotel}>
                            {item.nameHotel}
                        </Text>
                        <Text style={styles.textRoomName}>
                            {item.roomName}
                        </Text>
                        <View style={[styles.tag, { backgroundColor: '#D9F2DA', borderColor: '#D9F2DA' }]}>
                            <Image source={ICON_MONEYCHECK} style={{ width: 17, height: 12, marginRight: 5 }} />
                            <Text style={[styles.textTag, { color: '#2B9230' }]}>
                                Đã thanh toán
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ borderBottomColor: 'rgba(0, 0, 0, 0.25)', borderBottomWidth: 1, marginVertical: 20 }}>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Pressable style={styles.viewbtnTag1}>
                        <Text style={styles.textbtnTag1}>
                            Hủy đặt phòng
                        </Text>
                    </Pressable>
                    <Pressable style={styles.viewbtnTag}>
                        <Text style={styles.textbtnTag}>
                            Xem hóa đơn
                        </Text>
                    </Pressable>
                </View>
            </View>
        );
    };
    const renderItemPay = () => {
        if (data.length === 0) {
            return (
                <View style={styles.contanerChildren}>
                    <Image source={IMG_NOGPS} style={{ width: 250, height: 200, alignSelf: 'center', }} />
                    <Text style={styles.textNo}>Bạn chưa có chuyến đi nào</Text>
                </View>
            )
        }
        else {
            return (
                <View style={styles.ViewFlatList}>
                    <FlatList
                        data={data}
                        renderItem={renderListHotelPay}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            )
        }
    }
    const renderListHotelConfirm = ({ item }: { item: Item }) => {
        return (
            <View
                key={item.id}
                style={styles.rowItem}>
                <View style={styles.rowItemChildren}>
                    <Image
                        source={item.image}
                        style={styles.imageItem}
                    />
                    <View style={{ flex: 1, width: '100%', marginLeft: 16 }}>
                        <Text style={styles.textNameHotel}>
                            {item.nameHotel}
                        </Text>
                        <Text style={styles.textRoomName}>
                            {item.roomName}
                        </Text>
                        <View style={[styles.tag, { backgroundColor: '#FFECCF', borderColor: '#FFECCF' }]}>
                            <Image source={ICON_CLOCK} style={{ width: 12, height: 12, marginRight: 5 }} />
                            <Text style={[styles.textTag, { color: '#FF9A03' }]}>
                                Chờ xác nhận
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ borderBottomColor: 'rgba(0, 0, 0, 0.25)', borderBottomWidth: 1, marginVertical: 20 }}>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Pressable style={styles.viewbtnTag1}>
                        <Text style={styles.textbtnTag1}>
                            Hủy đặt phòng
                        </Text>
                    </Pressable>
                    <Pressable style={styles.viewbtnTag}>
                        <Text style={styles.textbtnTag}>
                            Xem hóa đơn
                        </Text>
                    </Pressable>
                </View>
            </View>
        );
    };
    const renderItemConfirm = () => {
        if (dataConfirm.length === 0) {
            return (
                <View style={styles.contanerChildren}>
                    <Image source={IMG_NOGPS} style={{ width: 250, height: 200, alignSelf: 'center', }} />
                    <Text style={styles.textNo}>Bạn chưa có chuyến đi nào</Text>
                </View>
            )
        }
        else {
            return (
                <View style={styles.ViewFlatList}>
                    <FlatList
                        data={dataConfirm}
                        renderItem={renderListHotelConfirm}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            )
        }
    }
    const renderListHotelComplete = ({ item }: { item: Item }) => {
        return (
            <View
                key={item.id}
                style={styles.rowItem}>
                <View style={styles.rowItemChildren}>
                    <Image
                        source={item.image}
                        style={styles.imageItem}
                    />
                    <View style={{ flex: 1, width: '100%', marginLeft: 16 }}>
                        <Text style={styles.textNameHotel}>
                            {item.nameHotel}
                        </Text>
                        <Text style={styles.textRoomName}>
                            {item.roomName}
                        </Text>

                    </View>
                </View>
                <View style={{ borderBottomColor: 'rgba(0, 0, 0, 0.25)', borderBottomWidth: 1, marginVertical: 20 }}>
                </View>
                <View style={[styles.tag, { backgroundColor: '#DBF8E6', borderColor: '#DBF8E6' }]}>
                    <Image source={ICON_CHECK} style={{ width: 12, height: 12, marginRight: 5 }} />
                    <Text style={[styles.textTag, { color: '#1AB65C' }]}>
                        Đã hoàn thành
                    </Text>
                </View>
            </View>
        );
    };
    const renderItemComplete = () => {
        if (dataComplete.length === 0) {
            return (
                <View style={styles.contanerChildren}>
                    <Image source={IMG_NOGPS} style={{ width: 250, height: 200, alignSelf: 'center', }} />
                    <Text style={styles.textNo}>Bạn chưa có chuyến đi nào</Text>
                </View>
            )
        }
        else {
            return (
                <View style={styles.ViewFlatList}>
                    <FlatList
                        data={dataComplete}
                        renderItem={renderListHotelComplete}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            )
        }
    }
    const handleDeleteItem = () => {
        if (selectedItemId) {
            setdataCancel((prevData) => prevData.filter((item) => item.id !== selectedItemId));
            setKeyExtractorUpdateCount((prevCount) => prevCount + 1);
        }
        setShowDeleteModal(false);
    };

    const handleLongPress = (itemId: number) => {
        console.log("Id: " + itemId);
        setSelectedItemId(itemId);
        setShowDeleteModal(true);
    };
    const renderListHotelCancel = ({ item }: { item: Item }) => {
        const rightSwipeActions = () => {
            const handleDelete = () => {
                handleDeleteItem();
            };

            return (
                <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                    <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
            );
        };
        return (
            <TouchableOpacity onLongPress={() => handleLongPress(item.id)}>
                <View
                    key={item.id}
                    style={styles.rowItem}>
                    <View style={styles.rowItemChildren}>
                        <Image
                            source={item.image}
                            style={styles.imageItem}
                        />
                        <View style={{ flex: 1, width: '100%', marginHorizontal: 16 }}>
                            <Text style={styles.textNameHotel}>
                                {item.nameHotel}
                            </Text>
                            <Text style={styles.textRoomName}>
                                {item.roomName}
                            </Text>

                        </View>
                    </View>
                    <View style={{ borderBottomColor: 'rgba(0, 0, 0, 0.25)', borderBottomWidth: 1, marginVertical: 20 }}>
                    </View>
                    <View style={[styles.tag, { backgroundColor: '#FDDDDD', borderColor: '#FDDDDD' }]}>
                        <Image source={ICON_CANCEL} style={{ width: 12, height: 12, marginRight: 5 }} />
                        <Text style={[styles.textTag, { color: '#F86666' }]}>
                            Đã hủy
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    const renderItemCancel = () => {
        if (dataCancel.length === 0) {
            return (
                <View style={styles.contanerChildren}>
                    <Image source={IMG_NOGPS} style={{ width: 250, height: 200, alignSelf: 'center', }} />
                    <Text style={styles.textNo}>Bạn chưa có chuyến đi nào</Text>
                </View>
            )
        }
        else {
            return (
                <View style={styles.ViewFlatList}>
                    <FlatList
                        data={dataCancel}
                        renderItem={renderListHotelCancel}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => `${item.id}_${keyExtractorUpdateCount}`} // Sử dụng keyExtractorUpdateCount để cập nhật keyExtractor
                    />

                </View>
            )
        }
    }
    const FirstRoute = () => (
        <View style={styles.container}>
            <View style={styles.outlineButton}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    contentContainerStyle={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 20,
                    }}
                >
                    {renderTabButton('Muốn đến', 'Muốn đến')}
                    {renderTabButton('Đã thanh toán', 'Đã thanh toán')}
                    {renderTabButton('Chờ xác nhận', 'Chờ xác nhận')}
                </ScrollView>
            </View>
            {renderList()}
        </View>
    );

    const SecondRoute = () => (
        <View style={{ flex: 1 }}>
            {renderItemComplete()}
        </View>
    );

    const ThirdRoute = () => (
        <View style={{ flex: 1 }}>
            {renderItemCancel()}
        </View>
    );

    const renderList = () => {
        switch (activeTab) {
            case 'Muốn đến':
                return (
                    <View style={{ flex: 1 }}>
                        {renderItemWant()}
                    </View>
                )
            case 'Đã thanh toán':
                return (
                    <View style={{ flex: 1 }}>
                        {renderItemPay()}
                    </View>
                )
            case 'Chờ xác nhận':
                return (
                    <View style={{ flex: 1 }}>
                        {renderItemConfirm()}
                    </View>
                )
            default:
                return null
        }
    }

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });

    return (
        <View style={{ flex: 1 }}>
            <Header
                isCheck={false}
                iconLeft={IC_BACK}
                textLeft='Chuyến đi'
            />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={renderTabBar}
            />
            {showDeleteModal && (
                <TouchableOpacity style={styles.modalBackground} onPress={() => setShowDeleteModal(false)}>
                    <View style={styles.modal}>
                        <Text style={styles.titleModal}>Xác nhận xóa?</Text>
                        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteItem}>
                            <Text style={styles.deleteButtonText}>OK, chắc rồi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton} onPress={() => setShowDeleteModal(false)}>
                            <Text style={styles.cancelButtonText}>Hủy</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            )}
        </View>

    )
};
const styles = StyleSheet.create({
    scene: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    tabBar: {
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    tabItemSelected: {
        borderBottomColor: '#4461F2',
    },
    tabTitle: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Exo2-SemiBold',
    },
    tabTitleSelected: {
        color: '#4461F2',
    },

    container: {
        backgroundColor: '#F5F8FF',
        flex: 1,
    },
    outlineButton: {
        height: 'auto',
        marginTop: 10,

    },
    btn: {
        flexDirection: 'row',
        height: 40,
        width: 'auto',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginRight: 20,
    },
    textbtn: {
        fontSize: 14,
        marginStart: 4,
        fontFamily: 'Exo2-Regular',
    },
    row: {
        justifyContent: 'space-between',
    },

    contanerChildren: {
        flex: 1,
        justifyContent: 'center',
    },
    ViewFlatList: {
        flex: 1,
        backgroundColor: '#F5F8FF',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    textNo: {
        textAlign: 'center',
        fontSize: 22,
        marginTop: 20,
        color: '#696969',
        fontFamily: 'Exo2-Regular',
    },
    rowItem: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 16,
    },
    rowItemChildren: {
        flex: 1,
        width: '100%',
        flexDirection: 'row'
    },
    imageItem: {
        width: 80,
        height: 80,
        borderRadius: 12,
    },
    textNameHotel: {
        fontSize: 18,
        fontFamily: 'Exo2-SemiBold',
        color: 'black',
    },
    textRoomName: {
        fontSize: 14,
        fontFamily: 'Exo2-Regular',
        color: 'black',
        letterSpacing: 0.28,
        lineHeight: 19.6,
        marginTop: 7,
    },
    tag: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        borderColor: '#CDF9FF',
        backgroundColor: '#CDF9FF',
        borderWidth: 1,
        borderRadius: 8,
        gap: 8,
        justifyContent: 'center',
        paddingVertical: 5,
    },
    textTag: {
        fontSize: 14,
        fontFamily: 'Exo2-Regular',
        color: '#008C95',
        letterSpacing: 0.2,
        lineHeight: 19.6,
    },
    viewbtnTag: {
        alignItems: 'center',
        backgroundColor: '#4461F2',
        borderColor: '#4461F2',
        borderWidth: 1,
        borderRadius: 15.5,
        paddingVertical: 6,
        paddingHorizontal: 20,
        alignSelf: 'center',
    },
    textbtnTag: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Exo2-SemiBold',
    },
    viewbtnTag1: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#4461F2',
        borderWidth: 1,
        borderRadius: 15.5,
        paddingVertical: 6,
        paddingHorizontal: 12,
        alignSelf: 'center',
    },
    textbtnTag1: {
        fontSize: 16,
        color: '#4461F2',
        fontFamily: 'Exo2-SemiBold',
    },

    modalBackground: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 15,
        width: 340,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
    },
    titleModal: {
        fontSize: 24,
        fontFamily: 'Exo2-SemiBold',
        color: 'black',
        letterSpacing: 0.2,
        lineHeight: 33.6,
    },
    deleteButton: {
        backgroundColor: '#4461F2',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        width: 230,
        borderRadius: 10,
        gap: 10,
    },
    deleteButtonText: {
        fontSize: 20,
        fontFamily: 'Exo2-SemiBold',
        color: 'white',
        letterSpacing: 0.2,
        lineHeight: 28,
    },
    cancelButton: {
        marginTop: 15,
        backgroundColor: '#CB444A',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        width: 230,
        borderRadius: 10,
        gap: 10,
    },
    cancelButtonText: {
        fontSize: 20,
        fontFamily: 'Exo2-SemiBold',
        color: 'white',
        letterSpacing: 0.2,
        lineHeight: 28,
    },
});
export default Trip;