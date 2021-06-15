import React from 'react'
import { createDrawerNavigator, } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'; 
import DrawerContent from './DrawerContent';
import BottomTab from '../BottomTabs/BottomTab';

const Drawer = createDrawerNavigator();
export default function Drawers(props) {
    return (

        <Drawer.Navigator
            initialRouteName="UserActivity"
            openByDefault={false}
            drawerContent={props => <DrawerContent {...props} />}
            drawerStyle={{
                backgroundColor: 'white',
                width: 220,
            }}
            >
            <Drawer.Screen name="UserActivity" component={BottomTab} />
        </Drawer.Navigator>

    )
}
