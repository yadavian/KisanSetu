import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../Screens/Auth/SplashScreen';
import AuthStacks from './Stacks/AuthStacks';
import Drawers from './Drawers/Drawers';


const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="Auth" component={AuthStacks} />
                <Stack.Screen name="Home" component={Drawers} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
