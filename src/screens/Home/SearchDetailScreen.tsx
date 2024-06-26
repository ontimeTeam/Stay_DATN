import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
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
    hotelViews: number,
    selectedStartDate: string;
    selectedEndDate: string;
    people: number;
    roomID: string
};

type PropsType = NativeStackScreenProps<BookStackParamList, 'SearchDetailScreen'>
const SearchDetailScreen: React.FC<PropsType> = (props) => {
    const { navigation, route } = props;
    const minDate = new Date(); // Today
    const maxDate = new Date(2026, 6, 3);
    const [selectedStartDate, setSelectedStartDate] = useState('DD/MM/YYYY');
    const [selectedEndDate, setSelectedEndDate] = useState('DD/MM/YYYY');
    const [people, setPeople] = useState(1);

    // const hotelId = route.params?.hotelID;
    // const roomId = route.params;

    // const onDateChange = (date: any, type: string) => {
    //     console.log(JSON.stringify(date));
    //     const newDate = new Date(date);
    //     const formattedDate = newDate.toLocaleDateString('en-GB'); // Format: DD/MM/YYYY
    //     // const dates = formattedDate.split('/');
    //     // const day = dates[0];
    //     // const month = dates[1];
    //     // const year = dates[2];
    //     // console.log(day + '/' + month + '/' + year);

    //     if (type === 'END_DATE') {
    //         setSelectedEndDate(formattedDate);
    //     } else {
    //         setSelectedStartDate(formattedDate);
    //         setSelectedEndDate('DD/MM/YYYY');
    //     }

    // };
    const onDateChange = (date: any, type: string) => {
        const newDate = new Date(date);
        const day = String(newDate.getDate()).padStart(2, '0');
        const month = String(newDate.getMonth() + 1).padStart(2, '0');
        const year = newDate.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;

        console.log('Selected Start Date:', selectedStartDate);
        console.log('Selected End Date:', selectedEndDate);
        console.log('People:', people);

        if (type === 'END_DATE') {
            setSelectedEndDate(formattedDate);
        } else {
            setSelectedStartDate(formattedDate);
            setSelectedEndDate('DD/MM/YYYY');
        }
    };
    const { hotelID, hotelName, hotelAddress, hotelImage, hotelRates, hotelViews } = route.params as RoomListScreenNavigationParams;
    const handleContinue = () => {
        // Your existing logic to navigate to the next screen
        console.log('Đã nhấn nút "Continue"', hotelName);
        navigation.navigate('RoomListScreen', {
            hotelID,
            selectedStartDate,
            selectedEndDate,
            people,
            hotelName,
            hotelImage,
            hotelViews
        });
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Header
                styleContainer={{ backgroundColor: COLORS.White }}
                iconLeft={IC_BACK}
                eventLeft={() => navigation.goBack()}
                textLeft='Chọn ngày'
            />

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


            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.date}>{'Nhận Phòng'}</Text>
                    <Text style={styles.date}>{'Trả Phòng'}</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.numberContainer}>{selectedStartDate}</Text>
                    <Text style={styles.numberContainer}>{selectedEndDate}</Text>
                </View>
            </View>
            <View style={[styles.peopleContainer, { backgroundColor: 'white' }]}>
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
            <View style={styles.btnCont}>
                <Button
                    title='Continue'
                    onPress={() => handleContinue()}
                />
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
        marginBottom: 15,
    },
    date: {
        marginTop: 15,
        marginBottom: 5,
        color: COLORS.Black,
        fontSize: 17,
        fontFamily: FONT_FAMILY.exo2_bold,
    },
    numberContainer: {
        fontFamily: 'Exo2-Medium',
        fontSize: 16,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10
    },
    peopleContainer: {
        marginTop: 20,
        fontFamily: 'Exo2-Medium',
        fontSize: 16,
        borderRadius: 10,
        padding: 15
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
        marginTop: 20,
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
    btnCont: {
        padding: 15,
        marginTop: 15
    }
})