import React from 'react';
import {  StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import checkskyblue from '../images/checkskyblue.gif';

export default function AchievedPage(){
    console.disableYellowBox=true;
    return(
      <ScrollView style={styles.displayAchieved}>
        <View>
        <Image style={styles.completeimage} source={checkskyblue}></Image>
        </View>
          </ScrollView>
              )
    };
    


const styles= StyleSheet.create({

    completeimage:{
        alignSelf:"center",
        marginTop: -50,
        width: 380,
        height: 380,
    },

    displayAchieved:{

      backgroundColor: "white"
  }
    
    });
