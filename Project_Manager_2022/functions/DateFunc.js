import React from 'react';
import {View, StyleSheet} from 'react-native';
import Today from '../component/Today'

function DateFunc(){

    const Todaynow = new Date();
    console.log(Todaynow);

    return (
        <View>
         <Today date={Todaynow}/>
        </View>
    );
}

const styles = StyleSheet.create({});

export default DateFunc;