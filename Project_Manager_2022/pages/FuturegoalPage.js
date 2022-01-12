import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import bulb from '../image/bulb.gif'

export default function FuturegoalPage(){
    console.disableYellowBox=true;
    return(
        <View>
        <Image style={styles.ahaimage} source={bulb}></Image>
        </View>
        
    )
    
}

const styles= StyleSheet.create({

    ahaimage:{
        alignSelf:"center",
        marginTop:150,
        width: 180,
        height: 180
    }




});