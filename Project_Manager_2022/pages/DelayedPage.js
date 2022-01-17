import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import hourglass from '../images/hourglass.gif'

export default function DelayedPage(){
    console.disableYellowBox=true;
    return(
        <ScrollView style={styles.displayDelayed}>
        <View>
        <Image style={styles.delayimage} source={hourglass}></Image>
        </View>
        </ScrollView>
        
    )
    
}

const styles= StyleSheet.create({

    delayimage:{
        alignSelf:"center",
        marginTop: 10,
        width: 250,
        height: 250
    },

    displayDelayed:{

        backgroundColor: "white"
    }





});