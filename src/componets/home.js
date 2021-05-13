import React from 'react'
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View} from 'react-native'
import { TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import AppIntro from 'rn-falcon-app-intro';
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'


  const HomeScreen = ({navigation}) => {
    
    return (
      <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }} level={20}>
        <TouchableOpacity style={styles.login} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}>Login <AntDesign name="arrowright" color='black' size={20}></AntDesign> </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.register} onPress={() => navigation.navigate("Form")}>
          <Text style={styles.registerText}>Register <AntDesign name="arrowright" color='white' size={20}></AntDesign> </Text>
        </TouchableOpacity>
        <AppIntro showSkipButton={false} showDoneButton={false} activeDotColor="#4bd1d7">
          <ImageBackground style={[styles.slide]} source={img2}>
            <View style={styles.opac}></View>
            
          </ImageBackground>
          <ImageBackground style={[styles.slide]} source={img1}>
            {/* <View level={10}><Text style={styles.text}>Page 2</Text></View> */}
            
          </ImageBackground>
          <ImageBackground style={[styles.slide]} source={img3}>
            {/* <View level={10}><Text style={styles.text}>Page 3</Text></View> */}
          </ImageBackground>
        </AppIntro>
      </View>
      

      
    );
  }

  export default HomeScreen;

  const styles = StyleSheet.create({
    slide: {
      flex: 1,
      justifyContent: 'center',
      // padding: 15,
      resizeMode: "cover",
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    login: {
      position: 'absolute', 
      bottom: '30%', 
      left: '20%', 
      width: '60%', 
      height: 60, 
      textAlign: 'center', 
      justifyContent: 'center',
      zIndex: 999, 
      backgroundColor: 'white', 
      borderRadius: 10
    },
    register: {
      position: 'absolute', 
      bottom: '19%', 
      left: '20%', 
      width: '60%', 
      height: 60, 
      textAlign: 'center', 
      justifyContent: 'center',
      zIndex: 999, 
      backgroundColor: '#4bd1d7', 
      borderRadius: 10
    },
    loginText: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold'
    },
    registerText: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    },
    opac: {
      backgroundColor: 'rgba(0,0,0,.2)', 
      width: '100%', 
      height: '100%'
    }
  });
  // AppRegistry.registerComponent('MyCarousel', () => MyCarousel);