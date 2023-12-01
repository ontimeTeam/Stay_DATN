import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONT_FAMILY } from '../themes/theme'

const TestFont = () => {
    return (
        <View style={styles.container}>
            <View style={styles.hotelContainer}>
                <Text style={styles.hotelName}>La Vela SaiGon Hotel</Text>
                <Text style={styles.hotelDetail}>03 - 05/08/2023, 2 Người </Text>
            </View>
            <View style={styles.roomContainer}>
                <View style={styles.roomImageContainer}>
                    <Image source={require('../../assets/images/Rectangle17.png')} style={styles.roomImage} />
                    <Text style={styles.testFontDetail}>Deluxe Double Room </Text>  
                    <View style={styles.priceButtonContainer}>
                        <Text style={styles.roomPrice}>1,852,637đ</Text>
                        <TouchableOpacity style={styles.chooseButton}>    
                            <Text style={styles.chooseButtonText}>Chọn</Text>    
                        </TouchableOpacity>  
                    </View>
                    <Text style={styles.roomDetails}>Chưa bao gồm thuế và các loại phí</Text>
                </View>
            </View>

            <View style={styles.roomContainer}>
                <View style={styles.roomImageContainer}>
                    <Image source={require('../../assets/images/Rectangle17kingbed.png')} style={styles.roomImage} />
                    <Text style={styles.testFontDetail}>Luxury Deluxe Room  </Text>  
                    <View style={styles.priceButtonContainer}>
                        <Text style={styles.roomPrice}>2,809,974 ₫</Text>
                        <TouchableOpacity style={styles.chooseButton}>    
                            <Text style={styles.chooseButtonText}>Chọn</Text>    
                        </TouchableOpacity>  
                    </View>
                    <Text style={styles.roomDetails}>Chưa bao gồm thuế và các loại phí</Text>
                </View>
            </View>

        </View>
        
    )
}

export default TestFont

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Blue_BG,
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    hotelContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    hotelName: {
        fontFamily: FONT_FAMILY.exo2_bold,
        fontSize: 20,
        color: COLORS.Black,
    },
    hotelDetail: {
        fontFamily: FONT_FAMILY.exo2_medium,
        fontSize: 16,
        color: COLORS.Black,
    },
    header: {
        fontFamily: FONT_FAMILY.exo2_bold,
        fontSize: 32,
        color: COLORS.Black,
    },
    testFont: {
        fontFamily: FONT_FAMILY.exo2_medium,
        fontSize: 20,
        color: COLORS.MainBlue,
        marginTop: 15,
    },
    testFontDetail: {
        fontFamily: FONT_FAMILY.exo2_medium,
        fontSize: 20,
        color: '#111111',
        right: 60,
        width: 'auto',
    },
    roomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        width: 351,
        height: 258,
        left: 10,
        borderRadius: 16,
        padding: 10,
        marginTop: 20,
       paddingTop : 30,
    },
    roomImageContainer: {
        borderRadius: 16,
        width: 331,
        height: 140,
        padding: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    roomImage: {
        width: 351,
        height: 140,
        borderRadius: 16,
    },
    priceButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },
    roomPrice: {
        fontFamily: FONT_FAMILY.exo2_medium,
        fontSize: 20,
        color:'#111111',
        right:65,
    },
    roomDetail: {
        fontFamily: FONT_FAMILY.exo2_medium,
        fontSize: 20,
        color: COLORS.MainBlue,
        alignSelf: 'flex-start',
        marginTop: 15,
    },
    roomDetails: {
        fontFamily: FONT_FAMILY.exo2_medium,
        fontSize: 12,
        color:'#777E90',
        alignSelf: 'flex-start',
        marginTop: 15,
    },
    chooseButton: {
        backgroundColor: '#4461F2',
        paddingVertical: 10,
        paddingHorizontal: 15,
        left: 50,
        borderRadius:25,
        width:83,
      
    },
    chooseButtonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    }
})
