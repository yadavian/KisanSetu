import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../Screens/Auth/LoginScreen';
import RegisterScreen from '../../Screens/Auth/RegisterScreen';
import OTPScreen from '../../Screens/Auth/OTPScreen';

const Stack = createStackNavigator();
export default function AuthStacks({navigation}) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Otp" component={OTPScreen} />
            {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
        </Stack.Navigator>
    )
}
