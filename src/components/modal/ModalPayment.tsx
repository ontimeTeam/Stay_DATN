import { Dimensions, Image, ImageSourcePropType, Modal, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppContext } from '../../share-state/context/AppContext';
import { CARD, MOMO, ZALOPAY } from '../../../assets';
import Button from '../button/Button';
import { COLORS } from '../../themes/theme';

type Props = {
    visible?: boolean;
    onPress: () => void;
    Cancel: () => void;
};

const ModalPayment: React.FC<Props> = props => {
    const { onPress, visible, Cancel } = props;
    const { pay, setPay } = React.useContext(AppContext);
    const [selected, setSelected] = useState<string>(pay);

    useEffect(() => {
        if (selected === 'Momo') {
            setSelected('Momo');
        } else if (selected === 'ZaloPay') {
            setSelected('ZaloPay');
        } else if (selected === 'Card') {
            setSelected('Card');
        }
    }, [selected]);

    const handleSelectMomo = () => {
        setSelected('Momo');
    };

    const handleSelectZaloPay = () => {
        setSelected('ZaloPay');
    };

    const handleSelectViettelPay = () => {
        setSelected('Card');
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                {
                    !visible;
                }
            }}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={'rgba(31, 76, 107, 0.9)'}
                translucent
            />
            <View style={_styles.background}>
                <View style={_styles.centeredView}>
                    <View style={_styles.modalView}>
                        <Text style={_styles.textBold}>Chọn phương thức thanh toán</Text>
                        <View style={_styles.line}></View>
                        <Pressable
                            onPress={handleSelectMomo}
                            style={[_styles.item,
                            { borderColor: selected === 'Momo' ? 'red' : 'rgba(0, 0, 0, 0.25)' }
                            ]}>
                            <Image source={MOMO} style={_styles.image} />
                            <Text style={_styles.textBold}>Ví MoMo</Text>
                        </Pressable>
                        <Pressable
                            onPress={handleSelectZaloPay}
                            style={[_styles.item,
                            { borderColor: selected === 'ZaloPay' ? 'red' : 'rgba(0, 0, 0, 0.25)' }
                            ]}>
                            <Image source={ZALOPAY} style={_styles.image} />
                            <Text style={_styles.textBold}>Ví ZaloPay</Text>
                        </Pressable>
                        <Pressable
                            onPress={handleSelectViettelPay}
                            style={[_styles.item,
                            { borderColor: selected === 'Card' ? 'red' : 'rgba(0, 0, 0, 0.25)' }
                            ]}>
                            <Image source={CARD} style={_styles.image} />
                            <Text style={_styles.textBold} ellipsizeMode='tail'>Thẻ (MasterCard, Visa)</Text>
                        </Pressable>
                    </View>
                    <View style={_styles.row}>
                        <Button
                            title="Thay đổi"
                            stylePressable={{ width: '40%', backgroundColor: COLORS.MainBlue }}
                            onPress={() => {
                                setPay(selected);
                                onPress();
                            }}
                        />
                        <Button
                            title="Hủy"
                            stylePressable={{ width: '40%', backgroundColor: COLORS.MainBlue }}
                            onPress={() => {
                                setSelected(pay);
                                Cancel();
                            }}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const _styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(31, 76, 107, 0.9)',
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * 1,
        position: 'absolute',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * 0.6,
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textBold: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Exo2-SemiBold',
        color: COLORS.Black,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        gap: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.25)',
        borderRadius: 10,
        padding: 10,
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        marginVertical: 30,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: 70,
        width: '100%',
        position: 'absolute',
    },
    image: {
        height: 30,
        width: 30,
    },
});

export default ModalPayment
