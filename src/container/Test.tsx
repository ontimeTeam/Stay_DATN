import { Platform, StyleSheet, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/button/Button';
import DateTimePicker from '@react-native-community/datetimepicker';

const Test = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentMode = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentMode);

    let tempDate = new Date(currentMode);
    let fDay = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + "/" + tempDate.getFullYear();
    setText(fDay);
    console.log(fDay);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
  };


  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <TextInput
        style={{ width: 200, height: 50, backgroundColor: 'white', borderColor: 'black', borderWidth: 1, textAlign: 'center', marginBottom: 20, fontSize: 20, fontFamily: 'Exo2-Regular', color: 'black', borderRadius: 10 }}
        placeholder="DD/MM/YYYY"
        value={text}
      />
      <Button
        title="Show modal Calendar"
        onPress={() => showMode('date')}
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          display="calendar"
          onChange={onChange}
        />
      )}
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})
