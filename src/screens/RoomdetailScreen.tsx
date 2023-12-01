import { ScrollView, StyleSheet, Text, View, Image, Dimensions, PixelRatio, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONT_FAMILY } from '../themes/theme'

const windowWIdth: number = Dimensions.get('window').width;
const windowHeight: number = Dimensions.get('window').height;

const TestFont = ():JSX.Element => {
    const handleRegistration = () => {
        // Xử lý logic đăng kí ở đây
    }
    return (
        <ScrollView style={{ backgroundColor: 'FFFFFF', }}>
        <Image style={styles.logo} source={require('../../assets/images/Rectangle17kingbed.png')} />
        <View style={{ padding: 10 }}>
                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 24 }}>Luxury Deluxe Room - 1 King Bed</Text>
                
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={require('../../assets/images/door-open.png')}
        style={{ width: 11, height: 11, top:3 }}/>
      <Text style={{ color: '#000000', fontSize: 12, marginLeft: 10, marginTop: 10 }} >40m2</Text>
                </View>
                
                <Text style={{ color: '#000000', fontSize: 15, marginLeft: 10, marginTop: 15 }} >_______________________________________________________</Text>               
                <Text style={{ color: '#000000', fontSize: 15, marginLeft: 10, marginTop: 15, fontWeight: 'bold' }} >Điểm đặc trưng</Text>
                <View>
                    <View style={{ padding: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/Bed.png')}
                    style={{ width: 11, height: 11, top:6 }}/>
                    <Text style={{ color: '#000000', fontSize: 14, marginLeft: 10, marginTop: 15 }} >1 giường đôi lớn</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/image4.png')}
                    style={{ width: 11, height: 11, top:6 }}/>
                    <Text style={{ color: '#000000', fontSize: 14, marginLeft: 10, marginTop: 15 }} >2 người lớn, 1 trẻ em (miễn phí dưới 6 tuổi)</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/User.png')}
                    style={{ width: 11, height: 11, top:6 }}/>
                    <Text style={{ color: '#000000', fontSize: 14, marginLeft: 10, marginTop: 15 }} >Hướng phòng: Thành phố</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/image3.png')}
                    style={{ width: 11, height: 11, top:6 }}/>
                    <Text style={{ color: '#000000', fontSize: 14, marginLeft: 10, marginTop: 15 }} >Ban công/sân hiên</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/image6.png')}
                    style={{ width: 11, height: 11, top:6 }}/>
                    <Text style={{ color: '#000000', fontSize: 14, marginLeft: 10, marginTop: 15 }} >Không hút thuốc</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/image7.png')}
                    style={{ width: 11, height: 11, top:6 }}/>
                    <Text style={{ color: '#000000', fontSize: 14, marginLeft: 10, marginTop: 15 }} >Bồn tắm/vòi sen riêng</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/image8.png')}
                    style={{ width: 11, height: 11, top:6 }}/>
                    <Text style={{ color: '#000000', fontSize: 14, marginLeft: 10, marginTop: 15 }} >Phòng tắm chung</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/User(1).png')}
                    style={{ width: 11, height: 11, top:6 }}/>
                    <Text style={{ color: '#000000', fontSize: 14, marginLeft: 10, marginTop: 15 }} >Wifi miễn phí</Text>
                    </View>
                    
                    </View>
                    <View style={{ backgroundColor: '#000000', height: 2, marginLeft: 10, marginTop: 15 }}>

                    </View>

                    <Text style={{ color: '#000000', fontSize: 15, marginLeft: 10, marginTop: 15, fontWeight: 'bold' }} >Giải trí</Text>
                    <View style={{ padding: 10 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/Bed(1).png')}
                    style={{ width: 11, height: 11, top:6 }}/>
                    <Text style={{ color: '#000000', fontSize: 14, marginLeft: 10, marginTop: 15 }} >Điện thoại</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/image4(1).png')}
                    style={{ width: 11, height: 11, top:6 }}/>
                    <Text style={{ color: '#000000', fontSize: 14, marginLeft: 10, marginTop: 15 }} >Tiện nghi bể bơi</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/User(2).png')}
                    style={{ width: 11, height: 11, top:6 }}/>
                    <Text style={{ color: '#000000', fontSize: 14, marginLeft: 10, marginTop: 15 }} >Truyền hình cáp/vệ tinh</Text>
                    </View>
                    </View>
                
                    <View style={{ backgroundColor: '#000000', height: 2, marginLeft: 10, marginTop: 15 }}></View>
                    <View style={{ padding: 10 }}>
                    <Text style={{ color: '#000000', fontSize: 15, marginLeft: 5, marginTop: 15, fontWeight: 'bold' }} >Tiện nghi</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/Bed(2).png')}
                    style={{ width: 11, height: 11, top:6 }}/>
                    <Text style={{ color: '#000000', fontSize: 14, marginLeft: 10, marginTop: 15 }} >Dịch vụ báo thức</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/image4(2).png')}
                    style={{ width: 11, height: 11, top:6 }}/>
                    <Text style={{ color: '#000000', fontSize: 14, marginLeft: 10, marginTop: 15 }} >Điều hòa</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/image4(2).png')}
                    style={{ width: 11, height: 11, top:6 }}/>
                    <Text style={{ color: '#000000', fontSize: 14, marginLeft: 10, marginTop: 15 }} >Rèm che ánh sáng</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/User.png')}
                    style={{ width: 11, height: 11, top:6 }}/>
                    <Text style={{ color: '#000000', fontSize: 14, marginLeft: 10, marginTop: 15 }} >Ổ cắm điện gần giường</Text>
                    </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleRegistration}>
                <Text style={styles.buttonText}>Đăng kí</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

  

export default TestFont

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.Blue_BG,
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    header:{
        fontFamily: FONT_FAMILY.exo2_bold,
        fontSize: 32,
        color: COLORS.Black,
    },
    testFont:{
        fontFamily: FONT_FAMILY.exo2_medium,
        fontSize: 20,
        color: COLORS.MainBlue,
        marginTop: 15,
    },
    logo:{
        borderRadius: 0,
        marginTop: 0,
        alignSelf: 'center',
        width: 411,
        height: 250,
    },
    button: {
        backgroundColor: '#4461F2',
        marginTop: 30,
        paddingVertical: 10,
        borderRadius: 30,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})