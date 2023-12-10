import React, { useState } from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { COLORS, FONT_FAMILY } from '../themes/theme';

const Calendar = () => {
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
    console.log('Đã nhấn nút "Continue"');
  };

  return (
    <View>
        <View style={styles.headerContainer}>
            <Image source={require('../../assets/images/back-arrow.png')} style={styles.backArrow} />
            <Text style={styles.header}>Chọn ngày</Text>
        </View>  
      <CalendarPicker
        startFromMonday={true}
        allowRangeSelection={true}
        minDate={minDate}
        maxDate={maxDate}
        todayBackgroundColor='#f2e6ff'
        selectedDayColor='#7300e6'
        selectedDayTextColor='#FFFFFF'
        onDateChange={onDateChange}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.date}>{'Nhận Phòng'}</Text>
          <Text style={styles.date}>{'Trả Phòng '}</Text>
        </View>

        <View style={styles.header}>
          <Text>{selectedStartDate}</Text>
          <Text>{selectedEndDate}</Text>
        </View>

        {/* Them luong nguoi */}
        <View style={[styles.numberContainer, { backgroundColor: 'white' }]}>
          <View style={styles.numberRow}>
            <Text style={styles.numberText}>Số người:</Text>
            <TouchableOpacity onPress={() => setPeople(people + 1)}>
              <Text style={styles.plusMinusButton}>+</Text>
            </TouchableOpacity>
            <Text>{people}</Text>
            <TouchableOpacity
              onPress={() => (people > 1 ? setPeople(people - 1) : setPeople(0))}
            >
              <Text style={styles.plusMinusButton}>―</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Phan nut tiep tuc */}
        <TouchableOpacity style={[styles.button, { alignSelf: 'center' }]} onPress={handleContinue}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    fontFamily: FONT_FAMILY.exo2_bold,
    fontSize: 24,
    color: COLORS.Black,
    marginTop:10,
    // marginLeft:15,
    marginBottom:20,
  },
  date: {
    marginBottom: 5,
    color: COLORS.Black,
    fontSize:17,
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
    fontSize:17,
    fontFamily: FONT_FAMILY.exo2_bold,
  },
  plusMinusButton: {
    fontSize: 20,
    marginRight: 25, // Thay đổi giá trị này để điều chỉnh khoảng cách giữa các nút
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 25,
    marginTop: 30,
    alignItems: 'center',
    width:320,
  },
  buttonText: {
    color: 'white',
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
    marginLeft:10,
    marginTop:10,
    resizeMode: 'contain',
    marginRight: 0,
    marginBottom:20,
  },
});
