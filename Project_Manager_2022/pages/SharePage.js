import React from 'react';
import { View, StyleSheet, Image , ScrollView} from 'react-native';
import like from '../images/like.gif'

export default function SharePage(){
    console.disableYellowBox=true;
    return(
            <ScrollView style={styles.displayShared}>
        <View>
        <Image style={styles.shareimage} source={like}></Image>
        </View>
        </ScrollView>
        
    )
    
}

const styles= StyleSheet.create({

    shareimage:{
        alignSelf:"center",
        marginTop:-90,
        width: 420,
        height: 420
    },

    displayShared:{

        backgroundColor: "white"
    }








});