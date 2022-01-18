import React from 'react';
import {Calendar} from 'react-native-calendars';
import { StyleSheet } from 'react-native';

function CalendarView(){

    return <Calendar style={styles.calendar}/>

}

const styles = StyleSheet.create({

    calendar:{
        borderWidth: 1,
        borderColor:"#8B00FF",
        marginLeft:20,
        marginTop: 10,
        marginRight: 20,
        marginBottom:20,
        borderRadius: 20,
        padding: 6
    }

});

export default CalendarView;