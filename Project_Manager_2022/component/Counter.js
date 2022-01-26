import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import check from '../images/check.png';


function Counter({count, onIncrease}){

    return(
        <View style={styles.counterview}>
            <TouchableOpacity onPress={onIncrease}>
            <View style={styles.ButtonPlus}>
                <Image style={styles.ButtonImg} source={check}/>
            </View>
            </TouchableOpacity> 
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
    },
    ButtonImg:{
        alignSelf: "flex-start",
        width: 40,
        height: 40,
        marginLeft:10,
        marginTop:10,
        marginBottom:10,

}
}
);

export default Counter;