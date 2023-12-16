import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image';

const NewCard = () => {

    const [number, onChangeNumber] = React.useState('');
    const [date, onDate] = React.useState('');
    const [CGV, onCGV] = React.useState('');

    return (
        <View style={styles.container}>
            
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.Title}>New card</Text>
            </View>
            <View style={{ marginTop: 46, width: '100%' }}>
                <Text style={styles.titleItem}>Card Number</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="xxxx xxxx xxxx xxxx"
                    keyboardType="numeric"
                />
            </View>
            <View style={{ marginTop: 37, width: '100%' }}>
                <Text style={styles.titleItem}>Expiry Date</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onDate}
                    value={date}
                    placeholder="MM/YY"
                    keyboardType="number-pad"
                />
            </View>
            <View style={{ marginTop: 37, width: '100%' }}>
                <Text style={styles.titleItem}>CCV</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onCGV}
                    value={CGV}
                    placeholder="****"
                    keyboardType="visible-password"
                />
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text>Add Card</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NewCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
        alignItems: 'center'
    },
    topIcon: {
        width: '100%',
        flexDirection: 'row'

    }, Title: {
        fontSize: 24,
        color: '#FF5E00',

    },
    titleItem: {
        fontSize: 18,
        color: '#6D3805'
    },
    input: {
        height: 40,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#F3F3F3'
    },
    button: {
        backgroundColor: '#FF5E00',
        width: '100%',
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewButton: {
        width: '100%',
        position: 'absolute',
        bottom: 19
    }
})