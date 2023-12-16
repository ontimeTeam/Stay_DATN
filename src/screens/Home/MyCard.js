import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import FastImage from 'react-native-fast-image';

const MyCard = () => {

    const dem = (Object.keys(DATA).length)
    const [selectedId, setSelectedId] = useState();

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
        const color = item.id === selectedId ? 'white' : 'black';
        return (
            <SwipeRow
                disableLeftSwipe={parseInt(item.key) % 2 === 0}
                // leftOpenValue={20 + Math.random() * 150}
                rightOpenValue={-70}>
                <View style={styles.delete}>
                    <FastImage source={require('../../../assets/images/trash.png')} />
                </View>
                <View style={styles.containerItem}>
                    <FastImage source={require('../../../assets/images/card.png')} />
                    <View style={{ marginLeft: 8 }}>
                        <Text style={styles.titleItem}>{item.title}</Text>
                        <Text style={styles.contentItem}>{item.stk}</Text>
                    </View>
                    <FastImage style={{ position: 'absolute', right: 0 }} source={require('../../../assets/images/righArrow.png')} />
                </View>
            </SwipeRow>
        );
    };

    const noSaveCard = () => {
        return (
            <View style={{ alignItems: 'center', width: '100%' }} >
                <FastImage source={require('../../../assets/images/noSaveCard.png')} />
                <Text style={styles.textNoSave}>No Saved Card</Text>
                <Text style={[styles.textNoSave, { fontSize: 16, textAlign: 'center', paddingHorizontal: 61 }]}>You can save your card info to make purchase easier, faster.</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.topIcon}>
                <FastImage source={require('../../../assets/images/Arrow.png')} />
                <FastImage source={require('../../../assets/images/add.png')} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.Title}>My card</Text>
            </View>
            <View>
                {
                    dem != 0 ?
                        <SwipeListView
                            data={DATA} renderItem={renderItem}
                            keyExtractor={item => item.id}
                            extraData={selectedId}
                        />
                        :
                        noSaveCard()
                }
            </View>

        </View>
    )
}

export default MyCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff"
    },
    topIcon: {
        width: '100%',
        flexDirection: 'row'
        , justifyContent: 'space-between'
    },
    Title: {
        fontSize: 24,
        color: '#FF5E00',

    },
    containerItem: {
        flexDirection: 'row',
        width: '100%',
        height: 72,
        marginVertical: 12,
        alignItems: "center",
        backgroundColor: '#fff'
    },
    titleItem: {
        fontSize: 18,
        color: '#6D3805'
    }, contentItem: {
        fontSize: 14,
        color: '#6D3805'
    },


    textNoSave: {
        color: '#6D3805',
        fontSize: 24
    },

    delete: {
        position: 'absolute',
        height: 72,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        marginVertical: 12,
        width: 70
    }
})

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'My card',
        stk: '4324234342'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'My card',
        stk: '4324234342'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'My card',
        stk: '4324234342'
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
        <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    </TouchableOpacity>
);