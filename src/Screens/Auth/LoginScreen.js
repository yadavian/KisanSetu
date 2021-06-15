import React, { useState } from 'react';
import { Text, Button, View, StyleSheet, Pressable, Image, TextInput } from 'react-native';
import smurfImg from '../../Assets/Auth/smurf.png';

import auth from '@react-native-firebase/auth';

export default LoginScreen = ({ navigation }) => {

  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  // Handle the button press
  async function getOTP(phoneNumber) {
    if (phoneNumber && phoneNumber.length > 9) {
      // console.log(phoneNumber)
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      console.log("confirmation on getOTP click" + confirmation.confirmResult)
      setConfirm(confirmation.confirmResult);
      if (confirm != null) {
        navigation.navigate('Otp', { "phoneNumber": phoneNumber, "confirm": confirm });
      } else {
        alert(confirm)
      }

    }
    else {
      alert("Please enter 10 digit phone number");
    }
  }

  const [phoneNumber, addPhoneNumber] = useState('+91');



  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={smurfImg} />
      <TextInput
        value={phoneNumber}
        style={{ height: 50, width: 300, paddingLeft: 20, backgroundColor: 'azure', fontSize: 20 }}
        placeholder="+91 1234567890"
        onChangeText={(text) => addPhoneNumber(text)}
      />
      <Pressable onPress={() => getOTP(phoneNumber)}
        style={({ pressed }) => ({ ...styles.btnContainer, backgroundColor: pressed ? 'white' : 'blue' })}>
        <Text style={styles.btnText}>
          Get OTP!
        </Text>
      </Pressable>
    </View>
  );
};
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