import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import bulb from '../images/bulb.gif'

export default function FuturegoalPage(){
    console.disableYellowBox=true;
    return(
        <ScrollView style={styles.displayFuturegoal}>
        <View>
        <Image style={styles.ahaimage} source={bulb}></Image>
        </View>
        </ScrollView>
        
    )
    
}

const styles= StyleSheet.create({

    ahaimage:{
        alignSelf:"center",
        marginTop: 50,
        width: 160,
        height: 160
    },

    displayFuturegoal:{

        backgroundColor: "white"
    }




});