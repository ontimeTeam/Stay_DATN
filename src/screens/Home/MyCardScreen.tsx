import { Image, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../navigation/ProfileStack';
import Header from '../../components/header/Header';
import { COLORS } from '../../themes/theme';
import { ICON_ADD, ICON_ARROW, ICON_CHECK_GREEN, ICON_TRASH, IC_BACK, MASTERCARD_1, NOCARD, VISA } from '../../../assets';
import { SwipeListView } from 'react-native-swipe-list-view';

type PropsType = NativeStackScreenProps<ProfileStackParamList, 'MyCardScreen'>;
const MyCardScreen: React.FC<PropsType> = props => {
    const { navigation } = props;

    type Item = {
        id: number,
        nameCard: string,
        numberCard: string,
        status: boolean,
        avatar: boolean
    }
    const [listData, setListData] = useState<Item[]>([
        { id: 0, nameCard: 'Master Card', numberCard: '5432 **** **** 6745', status: true, avatar: true },
        { id: 1, nameCard: 'Visa Card', numberCard: '6589 **** **** 7850', status: false, avatar: false },
    ]);

    const closeRow = (rowMap: any, rowKey: any) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap: any, rowKey: any) => {
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.id === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
        closeRow(rowMap, rowKey);
    };

    const renderItem = (data: any) => (
        <TouchableHighlight style={styles.rowFront}>
            <TouchableOpacity
                style={styles.container2}
                onPress={() => console.log('Nhấn vào thẻ')}>
                <View style={styles.view1}>
                    {
                        data.item.avatar ? <Image style={{
                            marginEnd: 20,
                            width: 60,
                            height: 45,
                            resizeMode: 'contain'
                        }} source={MASTERCARD_1} /> : <Image style={{
                            marginEnd: 20,
                            width: 60,
                            height: 45,
                            resizeMode: 'contain'
                        }} source={VISA} />
                    }
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                        <Text style={styles.textCard}>{data.item.nameCard}</Text>
                        <Text style={styles.textIDCard}>{data.item.numberCard}</Text>
                    </View>
                </View>
                {
                    data.item.status ?
                        <Image style={styles.icTick} source={ICON_ARROW} />
                        :
                        <Image style={styles.icTick} source={ICON_CHECK_GREEN} />
                }
            </TouchableOpacity>
        </TouchableHighlight>
    );

    const renderHiddenItem = (data: any, rowMap: any) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.item.id)}>
                <Image source={ICON_TRASH} style={{
                    width: 24,
                    height: 24,
                    resizeMode: 'contain'

                }} />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Header
                styleContainer={{ backgroundColor: 'white' }}
                isCheck={false}
                iconLeft={IC_BACK}
                textLeft="Thẻ của tôi"
                iconRight={ICON_ADD}
                styleIconRight={{ width: 20, height: 20 }}
                eventRight={() => navigation.navigate('AddNewCardScreen')}
                eventLeft={() => navigation.goBack()}
            />
            {listData.length === 0 ?
                <View style={styles.nocard}>
                    <Image source={NOCARD} style={{
                        width: 250,
                        height: 100,
                        resizeMode: 'contain',
                        marginBottom: 20

                    }} />
                    <Text style={styles.txtNocard}>Không có thẻ</Text>
                    <Text style={styles.txtNoidung}>Bạn có thể lưu thẻ của mình để{'\n'}thanh toán bất cứ lúc nào.</Text>
                </View>
                :
                <SwipeListView
                    data={listData}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    rightOpenValue={-72}
                    disableRightSwipe={true}
                />
            }
        </View>
    )
}

export default MyCardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.Blue_BG,
    },
    nocard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtNocard: {
        color: COLORS.Black,
        fontFamily: 'Exo2-Bold',
        fontSize: 20,
        marginVertical: 10
    },
    txtNoidung: {
        color: "#696969",
        fontFamily: 'Exo2-Regular',
        fontSize: 16,
        textAlign: 'center'
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        height: 98,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 70,
    },

    backRightBtnRight: {
        backgroundColor: '#A42B32',
        right: 0,
    },
    trash: {
        height: 25,
        width: 25,
    },
    container2: {
        width: '100%',
        height: 98,
        padding: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#804F1E24',
        paddingTop: 20,
        paddingBottom: 20
    },
    view1: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    textCard: {
        color: COLORS.Black,
        fontSize: 18,
        fontFamily: "Exo2-Bold",
        marginTop: 13,
    },

    textIDCard: {
        color: COLORS.Black,
        fontSize: 14,
        fontFamily: "Exo2-Regular",
        marginTop: 11,
    },
    icTick: {
        width: 13,
        height: 13,
        resizeMode: 'contain'
    }
})
