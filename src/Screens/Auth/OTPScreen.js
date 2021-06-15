
import React, { useState } from 'react';
import { Text, Button, View, StyleSheet, Pressable, Image, TextInput } from 'react-native';
import smurfImg from '../../Assets/Auth/smurf.png';

import auth from '@react-native-firebase/auth';

export default function OPTScreen({ route, navigation }) {

    const { phoneNumber, confirm } = route.params;

    const [code, setCode] = useState('')


    console.log(code)
    console.log("on page load function : ", confirm)
    console.log(phoneNumber)

    async function confirmCode() {
        try {
            console.log("inside function : ", confirm)
            await confirm.confirm(code);
            console.log("success")
            alert("Success")
            // navigation.navigate('Product', { screen: 'AddCrop', params: { "phoneNumber": phoneNumber }, });
            navigation.navigate('Home');

        } catch (error) {

            console.log('Invalid code.', error.message);
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={smurfImg} />
            <TextInput
                value={code}
                style={{ height: 50, width: 300, paddingLeft: 20, backgroundColor: 'azure', fontSize: 20 }}
                placeholder="+91 1234567890"
                onChangeText={(text) => setCode(text)}
            />
            <Pressable onPress={() => confirmCode()}
                style={({ pressed }) => ({ ...styles.btnContainer, backgroundColor: pressed ? 'white' : 'blue' })}>
                <Text style={styles.btnText}>
                    Verify OTP!
                </Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        padding: 20,
        borderRadius: 10,
        marginTop: 30,
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageStyle: {
        height: 200, width: 150,
        resizeMode: 'contain',
        marginBottom: 50,
    },
    text: {
        color: 'black',
        fontSize: 20,
    },
});