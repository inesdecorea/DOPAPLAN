import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import hourglass from '../image/hourglass.gif'

export default function DelayedPage(){
    console.disableYellowBox=true;
    return(
        <View>
        <Image style={styles.delayimage} source={hourglass}></Image>
        </View>
        
    )
    
}

const styles= StyleSheet.create({

    delayimage:{
        alignSelf:"center",
        marginTop:100,
        width: 320,
        height: 320
    }




});