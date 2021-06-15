
import React, { useState } from 'react';
import { Text, Button, View, StyleSheet, Pressable, Image, TextInput } from 'react-native';
import smurfImg from '../../Assets/Auth/smurf.png';

import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { setIsLogged, setUser } from '../../Redux/Slice/loginSlice';

export default function OPTScreen({ route, navigation }) {

    const dispatch = useDispatch();

    const { phoneNumber, confirm } = route.params;

    console.log(phoneNumber, confirm);

    const [code, setCode] = useState('')

    async function confirmCode() {

        try {

            const result = await confirm.confirm(code);
            console.log(JSON.stringify(result))
            // alert(JSON.stringify(result));

            if (result) {
                // alert("Success!")
                console.log("success!")
                dispatch(setUser({ "phoneNumber": phoneNumber }))
                dispatch(setIsLogged(true))
                
                alert("success!")
                navigation.navigate('HomeScreen'); 
            }

            // navigation.navigate('Product', { screen: 'AddCrop', params: { "phoneNumber": phoneNumber }, });


        } catch (error) {
            console.log('Invalid code.', error.message);
            alert(error.message)
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