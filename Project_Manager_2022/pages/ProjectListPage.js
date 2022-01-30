import React from 'react';
import {Text, StyleSheet, ScrollView, View,  SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import data from '../DB/data.json';
import {navigation} from '@react-navigation/native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function ProjectListPage({navigation, route}){
  let goal = data.goal;

  return(
    <ScrollView style={styles.ListLine}>
    <SafeAreaView style={styles.colorBar}>
 
      { 
        goal.map((content,i)=> { 
          return (

            <KeyboardAwareScrollView style={styles.avoid} extraScrollHeight={-150}>    
          <View style={styles.list} key={i}>
            <View style={styles.ListText}>
           <TouchableOpacity onPress={()=>{navigation.navigate("InProgressPage")}}><Text style={styles.ListTitle} numberOfLines={1}>{content.title}</Text></TouchableOpacity>   
            </View>
          </View>
          </KeyboardAwareScrollView>
          )
        })
       }

    </SafeAreaView>
    </ScrollView>)
  
}    

const styles=StyleSheet.create({
  ListTitle:{
    textAlign: "center",
    fontSize: 17,
    color: "black",
    marginLeft: 10,
    marginTop:20,
    marginBottom:20,
    textAlignVertical:"center",
    borderColor:"#8B00FF",
    borderWidth: 1,
    borderRadius: 20,
    marginBottom:10,
    marginTop:10,
    marginLeft: 25,
    marginRight:25,
    padding:15
  }
,
ListLine:{
  backgroundColor:"white"
}
})

