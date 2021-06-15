import React from 'react'
import {
    Image,
    View,
    SafeAreaView,
    ImageBackground,
    Dimensions,
    Text,
    StyleSheet,
} from 'react-native';
import Header from '../../Component/Header/Header'

export default function HomeScreen({ navigation,route }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Home" navigation={navigation} route={route} >
                <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                    <Text>HomeScreen</Text>
                </View>
            </Header>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 25,
        padding: 15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    contentCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'white',
        padding: 10,
    },
});