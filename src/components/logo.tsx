import { useEffect, useState } from "react"
import SignUpUser from "../users/register";
import { View,Image,StyleSheet } from "react-native";
import * as Animatable from 'react-native-animatable';
import React from 'react'


const LogoScreen = ({navigation}: any) =>{
    const[showLogo, setLogo]= useState(true)
    useEffect(() =>{
        const setTimeOut = setTimeout(() => {
            setLogo(false)
            navigation.navigate(SignUpUser)
        },4000);
        return ()=> clearTimeout(setTimeOut)
    },[navigation])

    return (
        <View style={styles.container}>
          {showLogo && (
            <Animatable.Image
            animation="rotate"
            iterationCount="infinite"
            direction="normal"
            duration={2000}
            source={require('../../assets/Coredao_logo.svg.png')}
            style={styles.logo}
            />
          )}
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 200,
      height: 200,
    },
  });
  

  export default LogoScreen;