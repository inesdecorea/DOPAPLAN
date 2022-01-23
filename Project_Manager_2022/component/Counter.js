import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


function Counter({count, onIncrease}){

    return(
        <View style={styles.counterview}>
            <TouchableOpacity><Text style={styles.buttontext} onPress={onIncrease}>달성👍{"\n"}Click Here!</Text></TouchableOpacity> 
        </View> 
        
    );
}

const styles = StyleSheet.create({

    buttontext:{
        fontSize: 20,
        textAlign: "center",
        flexDirection:"row",
        fontSize: 15,
        color: "black",
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5,
    }

});

export default Counter;