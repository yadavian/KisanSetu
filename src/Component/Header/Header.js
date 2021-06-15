import React from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'



export default function Header({ title, children, navigation }) {
    return (
        <>
            <View style={{ height: 50, justifyContent: 'space-between', flexDirection: 'row' }}>
                <Icon name="menu" color="black" size={30} style={{ alignSelf: 'center', marginLeft: 10 }} onPress={() => navigation.toggleDrawer()} />
                <Text style={{ alignSelf: 'center', fontSize: 20 }}>{title}</Text>
                <Icon name="dots-three-vertical" color="black" size={25} style={{ alignSelf: 'center', marginRight: 10 }} />
            </View>
            <View style={{ borderWidth: 0.2 }} />

            {children}
        </>
    )
}
