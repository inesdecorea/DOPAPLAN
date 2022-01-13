import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import like from '../images/like.gif'

export default function SharePage(){
    console.disableYellowBox=true;
    return(
        <View>
        <Image style={styles.shareimage} source={like}></Image>
        </View>
        
    )
    
}

const styles= StyleSheet.create({

    shareimage:{
        alignSelf:"center",
        marginTop:0,
        width: 500,
        height: 500
    }




});