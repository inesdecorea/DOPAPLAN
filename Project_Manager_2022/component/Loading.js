import React from 'react';
import {View,Image, StyleSheet} from 'react-native';
import loading from'../images/loading.gif';


export default function Loading(){
    return(<View style={styles.container}><Image style={styles.loadingimage} source={loading}></Image></View>)
}


const styles = StyleSheet.create({
    loadingimage:{
        alignSelf:"center",
        marginTop: 320,
        width: 250,
        height: 250
    }

})