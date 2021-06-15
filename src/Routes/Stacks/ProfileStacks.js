import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'; 
import ProfileScreen from '../../Screens/Profile/ProfileScreen';

const Stack = createStackNavigator();
export default function ProfileStacks() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={ProfileScreen} /> 
        </Stack.Navigator>
    )
}
