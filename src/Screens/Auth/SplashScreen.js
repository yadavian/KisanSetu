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
import { useSelector } from 'react-redux';


export default function SplashScreen({ navigation }) {
  const login = useSelector(state => state.login)
  const { isLogged } = login
  setTimeout(() => {
    if (isLogged) {
      alert(isLogged)
      navigation.replace('Home');
    } else {
      alert(isLogged)
      navigation.replace('Auth');
    }
  }, 3000);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header title="Home" navigation={navigation} noFab={true} route={route}> */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
        <Text>SplashScreen</Text>
      </View>
      {/* </Header> */}
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
