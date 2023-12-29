import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { BookStackParamList } from '../../navigation/BookStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Button from '../../components/button/Button';
import { IC_BACK } from '../../../assets';
import { COLORS, FONT_FAMILY } from '../../themes/theme';
import Header from '../../components/header/Header';
import CalendarPicker from 'react-native-calendar-picker';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

type RoomListScreenNavigationParams = {
    hotelID: string,
    hotelName: string,
    hotelAddress: string,
    hotelImage: string,
    hotelRates: string,
    selectedStartDate: string;
    selectedEndDate: string;
    people: number;
};

type PropsType = NativeStackScreenProps<BookStackParamList, 'SearchDetailScreen'>
const SearchDetailScreen: React.FC<PropsType> = (props) => {
    const { navigation } = props;
    const route = useRoute<RouteProp<BookStackParamList, 'RoomListScreen'>>();
    const { hotelID, hotelName, hotelAddress, hotelImage, hotelRates } = route.params as RoomListScreenNavigationParams;

    const minDate = new Date(); // Today
    const maxDate = new Date(2026, 6, 3);
    const [selectedStartDate, setSelectedStartDate] = useState('DD/MM/YYYY');
    const [selectedEndDate, setSelectedEndDate] = useState('DD/MM/YYYY');
    const [people, setPeople] = useState(1);


    const onDateChange = (date: any, type: string) => {
        console.log(JSON.stringify(date));
        const newDate = JSON.stringify(date);
        const newDate1 = newDate.substring(1, newDate.length - 1);
        const dates = newDate1.split('T');
        const date1 = dates[0].split('-');
        const day = date1[2];
        const month = date1[1];
        const year = date1[0];
        console.log(day + '/' + month + '/' + year);

        if (type === 'END_DATE') {
            if (day === undefined) {
                setSelectedEndDate('DD/MM/YYYY');
            } else {
                setSelectedEndDate(day + '/' + month + '/' + year);
            }
        } else {
            setSelectedStartDate(day + '/' + month + '/' + year);
            setSelectedEndDate('DD/MM/YYYY');
        }
    };

    const handleContinue = () => {
        // Thêm logic của bạn ở đây để xử lý sự kiện nhấn nút "Continue"
        console.log('Đã nhấn nút "Continue"', hotelID);
        navigation.navigate('RoomListScreen', {
            hotelID: hotelID,
            hotelName: hotelName,
            hotelAddress: hotelAddress,
            hotelImage: hotelImage,
            hotelRates: hotelRates,
            startDate: selectedStartDate,
            endDate: selectedEndDate,
            people: people,
        });
    };

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Header
                styleContainer={{ backgroundColor: COLORS.White }}
                iconLeft={IC_BACK}
                eventLeft={() => navigation.goBack()}
                textLeft='Tìm kiếm theo'
            />
            <View style={{ flex: 1 }}>
                <CalendarPicker
                    startFromMonday={true}
                    allowRangeSelection={true}
                    minDate={minDate}
                    maxDate={maxDate}
                    todayBackgroundColor='#879BFF'
                    selectedDayColor='#D5DCFE'
                    selectedDayTextColor='#000000'
                    onDateChange={onDateChange}
                    textStyle={{ fontFamily: FONT_FAMILY.exo2_regular, }}
                    previousTitle='<'
                    previousTitleStyle={{ fontWeight: '700', fontSize: 20 }}
                    nextTitle='>'
                    nextTitleStyle={{ fontWeight: '700', fontSize: 20 }}
                />
            </View>

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.date}>{'Nhận Phòng'}</Text>
                    <Text style={styles.date}>{'Trả Phòng '}</Text>
                </View>

                <View style={styles.header}>
                    <Text style={{ fontFamily: FONT_FAMILY.exo2_regular }}>{selectedStartDate}</Text>
                    <Text style={{ fontFamily: FONT_FAMILY.exo2_regular }}>{selectedEndDate}</Text>
                </View>

                {/* Them luong nguoi */}
                <View style={[styles.numberContainer, { backgroundColor: 'white' }]}>
                    <View style={styles.numberRow}>
                        <Text style={styles.numberText}>Số người:</Text>

                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => (people > 1 ? setPeople(people - 1) : setPeople(1))}>
                            <Text style={styles.plusMinusButton}>-</Text>
                        </TouchableOpacity>

                        <Text style={{ fontFamily: FONT_FAMILY.exo2_medium, fontSize: 18, color: COLORS.Black }}>{people}</Text>

                        <TouchableOpacity onPress={() => setPeople(people + 1)}>
                            <Text style={styles.plusMinusButton}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Phan nut tiep tuc */}
                <View style={{ marginTop: 30, alignItems: 'center' }}>
                    <Button
                        stylePressable={{ width: "90%" }}
                        title='Tiếp tục'
                        onPress={handleContinue} />
                </View>
            </View>
        </View>
    )
}

export default SearchDetailScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.White
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        fontFamily: FONT_FAMILY.exo2_bold,
        fontSize: 24,
        color: COLORS.Black,
        marginTop: 10,
        // marginLeft:15,
        marginBottom: 20,
    },
    date: {
        marginBottom: 5,
        color: COLORS.Black,
        fontSize: 17,
        fontFamily: FONT_FAMILY.exo2_bold,
    },
    numberContainer: {
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 5,
    },
    numberRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    numberText: {
        color: COLORS.Black,
        fontSize: 17,
        fontFamily: FONT_FAMILY.exo2_bold,
    },
    plusMinusButton: {
        width: 40,
        height: 40,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: FONT_FAMILY.exo2_semibold,
        backgroundColor: '#D5DCFE',
        color: COLORS.Black,
        borderRadius: 12
    },
    button: {
        backgroundColor: COLORS.MainBlue,
        padding: 10,
        borderRadius: 25,
        marginTop: 30,
        alignItems: 'center',
        width: 320,
    },
    buttonText: {
        color: 'white',
        fontFamily: FONT_FAMILY.exo2_semibold,
        fontSize: 16,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 0,
        marginRight: 20,
    },
    backArrow: {
        width: 28,
        height: 28,
        marginLeft: 10,
        marginTop: 10,
        resizeMode: 'contain',
        marginRight: 0,
        marginBottom: 20,
    },
})