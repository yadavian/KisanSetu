import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'; 
import HomeScreen from '../../Screens/Home/HomeScreen';

const Stack = createStackNavigator();
export default function HomeStacks() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} /> 
        </Stack.Navigator>
    )
}
