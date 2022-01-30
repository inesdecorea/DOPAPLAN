import React ,{useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import check_blank from '../images/check_blank.png';
import check_done from'../images/check_done.png';



function Counter({count, onIncrease}){

if(count>=1){
    return(
        <View style={styles.counterview}>
            <TouchableOpacity onPress={onIncrease}>
            <View style={styles.ButtonPlus} >
                <Image style={styles.ButtonImg} nativeID='done' source={check_done}/>
            </View>
            </TouchableOpacity> 
        </View> 
    )
}{  return( <View style={styles.counterview}>
<TouchableOpacity onPress={onIncrease}>
<View style={styles.ButtonPlus} >
    <Image style={styles.ButtonImg} nativeID='blank' source={check_blank}/>
</View>
</TouchableOpacity> 
</View> )}}


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