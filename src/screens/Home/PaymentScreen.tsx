import { Dimensions, Image, ImageSourcePropType, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { BookStackParamList } from '../../navigation/BookStack';
import Header from '../../components/header/Header';
import { CARD, ICON_STAR, IC_BACK, MOMO, ROOM_1, ZALOPAY } from '../../../assets';
import { COLORS } from '../../themes/theme';
import { AppContext } from '../../resources/context/AppContext';
import ModalPayment from '../../components/modal/ModalPayment';
import Button from '../../components/button/Button';
import { useRoute } from '@react-navigation/native';

type RoomPriceParams = {
    roomPrice: number;
    roomType: string,
    roomImage: string
};

type RoomListScreenNavigationParams = {
    hotelName: string,
    hotelAddress: string,
    hotelImage: string,
    hotelRates: string,
    startDate: Date;
    endDate: Date;
    people: number;
};


type PropsType = NativeStackScreenProps<BookStackParamList, 'PaymentScreen'>
// type PaymentScreenNavigationProp = StackNavigationProp<BookStackParamList, 'PaymentScreen'>;
const PaymentScreen: React.FC<PropsType> = props => {
    const route = useRoute<RouteProp<BookStackParamList, 'PaymentScreen'>>();
    const { navigation } = props;
    const { startDate, endDate, people, hotelName, hotelAddress, hotelImage, hotelRates, roomPrice, roomType, roomImage } = route.params as RoomPriceParams & RoomListScreenNavigationParams;
    const navigate = useNavigation();
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const { pay } = React.useContext(AppContext);
    const [imagePay, setImagePay] = useState<ImageSourcePropType>(MOMO);
    const [namePay, setNamePay] = useState<string>('Ví MoMo');

    // const { selectedStartDate, selectedEndDate, people } = route.params;
    useEffect(() => {
        if (pay === 'Momo') {
            setImagePay(MOMO);
            setNamePay('Ví MoMo');
        } else if (pay === 'ZaloPay') {
            setImagePay(ZALOPAY);
            setNamePay('Ví ZaloPay');
        } else if (pay === 'Card') {
            setImagePay(CARD);
            setNamePay('Thẻ (MasterCard, Visa/Credit) ');
        };
    }, [pay]);
    //FUNCTION TO CALCULATE IN PAYMENT
    const calculateDays = (startDate: Date, endDate: Date): number => {
        const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
        const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return dayDiff;
    };
    const parseDate = (dateString: string): Date => {
        const parts = dateString.split('/');
        return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
    };
    const days = calculateDays(parseDate(String(startDate)), parseDate(String(endDate)));

    type FormattingFunction = (num: number) => string;
    const formatNumber: FormattingFunction = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };
    const taxAndFee = (roomPrice: number): number => {
        return parseFloat((roomPrice * 0.1).toFixed(0));
    };
    const calculateTotalAmount = (roomPrice: number, taxAndFee: number): number => {
        return roomPrice + taxAndFee;
    };
    const totalAmount = calculateTotalAmount(days * Number(roomPrice), (taxAndFee(days * Number(roomPrice))));

    const onPress = () => {
        setModalVisible(false);
    };

    return (
        <ScrollView style={styles.container}>
            <Header
                iconLeft={IC_BACK}
                eventLeft={() => navigation.goBack()}
                textLeft='Thanh toán'
            />
            <View style={styles.viewContainer}>
                <Image source={{ uri: hotelImage }} style={styles.imgBanner} />
                <View
                    style={styles.viewChildren}>
                    <Text style={styles.txtNameBanner}>{hotelName}</Text>
                    <View style={styles.viewStar}>
                        <Image source={ICON_STAR} style={styles.iconStar} />
                        <Text style={styles.txtStar}>{hotelRates}</Text>
                    </View>
                    <View style={styles.viewBottomHotelList}>
                        <Text style={styles.txtNameHotelList} numberOfLines={1} ellipsizeMode='tail'>
                            {roomType}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewTimeRoom}>
                <View style={styles.viewTime}>
                    <Text style={styles.txtTitleTime}>Ngày nhận phòng</Text>
                    <Text style={styles.txtTime}>{String(startDate)}</Text>
                </View>
                <View style={styles.viewTime}>
                    <Text style={styles.txtTitleTime}>Ngày trả phòng</Text>
                    <Text style={styles.txtTime}>{String(endDate)}</Text>
                </View>
                <View style={styles.viewTime}>
                    <Text style={styles.txtTitleTime}>Số khách</Text>
                    <Text style={styles.txtTime}>{people}</Text>
                </View>
            </View>
            <View style={styles.viewTimeRoom}>
                <View style={styles.viewTime}>
                    <Text style={styles.txtTitleTime}>{days} đêm</Text>
                    <Text style={styles.txtTime}>{formatNumber(days * Number(roomPrice))} ₫</Text>
                </View>
                <View style={styles.viewTime}>
                    <Text style={styles.txtTitleTime}>Thuế và Phí (10%)</Text>
                    <Text style={styles.txtTime}>{formatNumber(taxAndFee(days * Number(roomPrice)))} ₫</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.viewTime}>
                    <Text style={styles.txtTitleTime}>Tổng cộng</Text>
                    <Text style={styles.txtTime}>{formatNumber(totalAmount)} ₫</Text>
                </View>
                <View style={styles.viewTimeRoom1}>
                    <View style={styles.viewTime1}>
                        <Image source={imagePay} style={styles.imgPay} />
                        <Text style={[styles.txtNamePay, { width: 150 }]} numberOfLines={1} ellipsizeMode='tail'>{namePay}</Text>
                    </View>
                    <Pressable
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.txtChange}>Thay đổi</Text>
                    </Pressable>
                </View>
                <ModalPayment
                    visible={modalVisible}
                    onPress={onPress}
                    Cancel={() => {
                        setModalVisible(false);
                    }}
                />
            </View>
            <Button
                title="Thanh toán"
                stylePressable={{
                    width: '90%',
                    alignSelf: 'center',
                    marginVertical: 30,
                }}
                onPress={() => {
                    navigation.navigate('BillScreen', {
                        hotelName: hotelName,
                        hotelAddress: hotelAddress,
                        hotelImage: hotelImage,
                        hotelRates: hotelRates,
                        startDate: startDate,
                        endDate: endDate,
                        people: people,
                        roomPrice: roomPrice,
                        roomType: roomType,
                        totalAmount: totalAmount
                    });
                }}
            />
        </ScrollView>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.Blue_BG,
    },
    viewContainer: {
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').width * 0.5 + 15,
        borderRadius: 20,
        marginHorizontal: 20,

    },
    viewChildren: {
        position: 'absolute',
        left: 15,
        right: 30,
        top: 15,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imgBanner: {
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').width * 0.5,
        flex: 1,
        // resizeMode: 'stretch', // sử dụng resizeMode: 'stretch' để kéo dãn ảnh
        // resizeMode: 'cover', // sử dụng resizeMode: 'cover' để ảnh không bị kéo dãn
        // dùng kiểu nào tùy vào thiết kế nha
        borderRadius: 20,
    },
    txtNameBanner: {
        color: COLORS.White,
        fontFamily: 'Exo2-Bold',
        fontSize: 22,
    },
    viewStar: {
        position: 'absolute',
        left: Dimensions.get('screen').width * 0.9 - 85,
        backgroundColor: COLORS.MainBlue,
        width: 'auto',
        height: 30,
        borderRadius: 15,
        gap: 6,
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
    viewBottomHotelList: {
        position: 'absolute',
        top: Dimensions.get('screen').width * 0.5 - 50,
        left: 0,
        right: 0,
    },
    txtNameHotelList: {
        color: COLORS.White,
        fontFamily: 'Exo2-Medium',
        fontSize: 20,
    },
    viewTimeRoom: {
        backgroundColor: COLORS.White,
        borderRadius: 20,
        marginHorizontal: 20,
        marginTop: 20,
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    viewTime: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    viewTimeRoom1: {
        backgroundColor: COLORS.White,
        borderRadius: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewTime1: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    txtTitleTime: {
        fontFamily: 'Exo2-Regular',
        fontSize: 17,
        color: "#515151",
        lineHeight: 23.8,
        letterSpacing: 0.2,
    },
    txtTime: {
        fontFamily: 'Exo2-SemiBold',
        fontSize: 17,
        color: COLORS.Black,
        lineHeight: 23.8,
        letterSpacing: 0.2,
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        marginVertical: 10,
    },

    imgPay: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    txtNamePay: {
        fontFamily: 'Exo2-SemiBold',
        fontSize: 17,
        color: COLORS.Black,
        letterSpacing: 0.2,
        lineHeight: 23.8,
    },
    txtChange: {
        fontFamily: 'Exo2-Regular',
        fontSize: 17,
        color: COLORS.MainBlue,
        letterSpacing: 0.2,
        lineHeight: 23.8,
    },
})