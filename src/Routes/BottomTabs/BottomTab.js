import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import HomeStacks from '../Stacks/HomeStacks';
import ProfileStacks from '../Stacks/ProfileStacks';

const Tab = createBottomTabNavigator();
export default function BottomTab() {
    return (
        <Tab.Navigator initialRouteName='HomeStack' tabBarOptions={{
            keyboardHidesTabBar: true,
            activeTintColor: 'black',
            // inactiveTintColor:'red',
            // activeBackgroundColor:'blue',
            showLabel: false,
            // style: {
            //     backgroundColor: 'white',
            //     position: 'absolute',
            //     bottom: 10,
            //     marginHorizontal: 20,
            //     // Max Height...
            //     height: 60,
            //     borderRadius: 10,
            //     // Shadow...
            //     shadowColor: '#000',
            //     shadowOpacity: 0.06,
            //     shadowOffset: {
            //         width: 10,
            //         height: 10
            //     },
            //     // paddingHorizontal: 20,
            // }
        }}>
            <Tab.Screen name="HomeStack" component={HomeStacks}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                    tabBarBadge: 3,

                }} />
            <Tab.Screen name="ProfileStack" component={ProfileStacks}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="adduser" color={color} size={size} />
                    ),
                    tabBarBadge: 5,
                }} />

            <Tab.Screen name="UserForm" component={HomeStacks}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={{
                            width: 55,
                            height: 55,
                            backgroundColor: 'white',
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 10000,
                            marginBottom: Platform.OS == "android" ? 50 : 30
                        }}>
                            <Icon name="pluscircleo" color={color} size={40} />
                        </View>

                    ),
                }} />
            <Tab.Screen name="DomainStack" component={ProfileStacks}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="hearto" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="DomainForm" component={HomeStacks}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator>

    )
}
