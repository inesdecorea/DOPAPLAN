import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Today({date}){

    const year= date.getFullYear();
    const month=date.getMonth()+1; // Month의 값은 0~11
    const day=date.getDate();
    const hours=date.getHours();
    const minutes=date.getMinutes();
    const formatted= `지금은 ${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;

    return (
        <View style={styles.DateBar}>
            <Text style={styles.DateText}>{formatted}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

DateBar:{
    marginLeft: 15,
    marginTop: 10
},

DateText:{
    fontSize: 16,
    color: "black",
    fontWeight: "500",
    marginLeft:14,
    marginRight:15,
    marginTop: -10
}
});

export default Today;