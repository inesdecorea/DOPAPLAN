import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import checkskyblue from '../image/checkskyblue.gif';

export default function AchievedPage(){
    console.disableYellowBox=true;
    return(
        <View>
        <Image style={styles.completeimage} source={checkskyblue}></Image>
        </View>
        
    )
    
}

const styles= StyleSheet.create({

    completeimage:{
        alignSelf:"center",
        width: 450,
        height: 450,
        marginTop: 20
    }




});