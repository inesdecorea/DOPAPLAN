import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import InProgressList from "../component/InProgressList";

export default function InProgressPage(){

    return(
    
    <ScrollView style={styles.ProgressView}>
        <InProgressList/>
    </ScrollView>
    )
}

const styles = StyleSheet.create({

    ProgressView:{
     backgroundColor: "white",   
    },

    progressText:{
        textAlign:"center",
        fontSize: 20
    }


})