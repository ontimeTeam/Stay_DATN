import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, FONT_FAMILY } from '../themes/theme'

const PaymentScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={require('../../assets/images/back-arrow.png')} style={styles.backArrow} />
                <Text style={styles.header}>Thanh toán</Text>
            </View>
            <View style={styles.hotelImage}>
                <Image source={require('../../assets/images/LaVelaHotel.png')} style={styles.hotelImage} />
                <Text style={styles.hotelImageText}>La Vela SaiGon Hotel</Text>
                
                <View style={styles.ratingContainer}>
                <Image source={require('../../assets/images/star_icon.png')} style={styles.starIcon} />
                <Text style={styles.ratingText}>5.0</Text>
                </View>
            </View>
            
            <View style={styles.infoContainer}>

                <View style={styles.infoRow}>
                    <Text style={styles.infoTextR}>Ngày nhận phòng: </Text>
                    <Text style={styles.infoText}>01/01/2024</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.infoTextR}>Ngày đặt phòng: </Text>
                    <Text style={styles.infoText}>31/12/2023</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.infoTextR}>Số khách: </Text>
                    <Text style={styles.infoText}>2</Text>
                </View>

            </View>

            <View style={styles.infoContainer}>

                <View style={styles.infoRow}>
                    <Text style={styles.infoTextR}>2 đêm </Text>
                    <Text style={styles.infoText}>5,619,948 ₫</Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.infoTextR}>Thuế và Phí (10%)</Text>
                    <Text style={styles.infoText}>561, 994 ₫ </Text>
                </View>
                <View style={styles.line}></View>

                <View style={styles.infoRow}>
                    <Text style={styles.infoTextR}>Tổng cộng </Text>
                    <Text style={styles.infoText}>6,181,942 ₫</Text>
                </View>

            </View>

            <View style={styles.infoMC}>
                <View style={styles.infoRow}>
                <Image source={require('../../assets/images/mastercard.png')} style={styles.masterCardImage} />
                <Text style={styles.infoTextMC}>**** **** **** ****4679</Text>
                <Text style={styles.infoTextMCR}>Thay đổi</Text>
                </View>
            </View>
            
            <Text style={styles.paymentButton}>Thanh toán</Text>
        </ScrollView>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Blue_BG,
        paddingVertical: 15,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginRight: 150,
        flex:1,
    },
    backArrow: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 20,
    },
    header: {
        fontFamily: FONT_FAMILY.exo2_bold,
        fontSize: 32,
        color: COLORS.Black,
    },
    hotelImage: {
        width: 371,
        height: 160,
        resizeMode: 'cover',
        marginBottom: 20,
        borderRadius: 10,
    },
    infoContainer: {
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: 'red', // Thêm màu đỏ vào đây
        padding: 10, // Thêm padding để tạo khoảng cách xung quanh
        borderRadius: 5, // Thêm bo góc cho khung view
        width: 371, //khung
        height: 126,
    },
    infoMC: {
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: 'yellow', // Thêm màu đỏ vào đây
        padding: 10, // Thêm padding để tạo khoảng cách xung quanh
        borderRadius: 5, // Thêm bo góc cho khung view
        width: 371, //khung
        height: 67,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        
    },
    infoText: {
        fontFamily: FONT_FAMILY.exo2_medium,
        fontSize: 16,
        color: COLORS.MainBlue,
        marginBottom: 10,
        flex: 0,
    },
    infoTextR: {
        fontFamily: FONT_FAMILY.exo2_medium,
        fontSize: 16,
        color: COLORS.MainBlue,
        marginBottom: 10,
        flex: 1,
    },
    paymentButton: {
        fontFamily: FONT_FAMILY.exo2_bold,
        fontSize: 20,
        color: COLORS.White,
        backgroundColor: COLORS.MainBlue,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        width: 381,
        height: 46,
        textAlign: 'center',
    },
    line: {
        height: 1,
        backgroundColor: '#dcdcdc',
        marginBottom: 5,
        width: 360,
        
    },
    masterCardImage: {
        width: 45,
        height: 28,
        justifyContent:'flex-start',
        flexDirection:'row',
        top:10,
        right:30,
        
    },
    infoTextMC: {
        fontFamily: FONT_FAMILY.exo2_medium,
        fontSize: 17,
        color: COLORS.MainBlue,
        marginBottom: 10,
        top : 12,
        
    },
    infoTextMCR: {
        fontFamily: FONT_FAMILY.exo2_medium,
        fontSize: 17,
        color: COLORS.MainBlue,
        marginBottom: 10,
        top : 12,
        textAlign:'left',
        left:30,
    },
    hotelImageText: {
        position: 'absolute',
        top: 10,
        left: 10,
        fontFamily: FONT_FAMILY.exo2_medium,
        fontSize: 18,
        color: COLORS.White,
    },
    starIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginLeft: 5,
    },
    ratingContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4461F2', // Add red background color
        padding: 5, // Add padding to create space around the view
        borderRadius: 5, // bo goc
    },
    ratingText: {
        fontFamily: FONT_FAMILY.exo2_medium,
        fontSize: 16,
        color: COLORS.White,
        marginLeft: 5, // Khoang cach le va ngoi sao
    },
    
})
