import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BookStackParamList } from '../../navigation/BookStack'
import { COLORS } from '../../themes/theme'
import { ICON_SEARCH, ICON_SETTING } from '../../../assets'

type PropsType = NativeStackScreenProps<BookStackParamList, 'SearchScreen'>
const SearchScreen: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const [text, setText] = React.useState('');
  const onPressSearch = () => {
    console.log("Search result: " + text)
    navigation.navigate('SearchScreen');
  };
  const onPressSearchUp = () => {
    console.log("Search result: " + text)
    navigation.navigate('SearchDetailScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewAll}>
        <View style={styles.inputContainer}>
          <Pressable onPress={onPressSearch}>
            <Image source={ICON_SEARCH} style={styles.iconSearch} />
          </Pressable>
          <TextInput
            value={text}
            placeholder=""
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
        <Pressable onPress={onPressSearchUp}>
          <Image source={ICON_SETTING} style={styles.iconSetting} />
        </Pressable>
      </View>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  viewAll: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.White,
  },
  inputContainer: {
    flex: 1,
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
  iconSetting: {
    width: 26,
    height: 26,
    marginRight: 20,
    marginTop: 25,
  },
})