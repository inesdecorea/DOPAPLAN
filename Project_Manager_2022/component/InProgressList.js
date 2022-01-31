import React,{useState, useEffect} from 'react';
import {Text, StyleSheet, ScrollView, View, Image, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import data from '../DB/data.json';
import AppTodo from '../component/AddTodo';
import check_blank from '../images/check_blank.png';
import check_done from'../images/check_done.png';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



export default function InProgressList({content}){
  const[count,setCount] = useState(0);
  const[state,setState] = useState([])

  useEffect(()=>{
    setState(data)},[])
    const onIncrease = () => setCount(count +1);


    return(
      <SafeAreaView style={styles.colorBar}>
    <ScrollView style={styles.ListLine}>
              <KeyboardAwareScrollView style={styles.avoid} extraScrollHeight={-150}>    
            <View style={styles.list} content={content} key={state.index}>
              <View style={styles.ListText}>
              <Text style={styles.ListTitle} numberOfLines={1}>{state.title}</Text>
              <Text style={styles.CountingNumber}>달성한 하위 목표: {count}</Text>
              <View style={styles.TouchaArea}>
              <TouchableOpacity count={count} onIncrease={onIncrease} onPress={onIncrease}>
                <Image style={styles.check_blank} source={check_blank}></Image></TouchableOpacity><Text style={styles.LevelFive} numberOfLines={1}>{state.Big1}</Text>
              </View>
              <View style={styles.TouchaArea}>
              <TouchableOpacity count={count} onIncrease={onIncrease} onPress={onIncrease}>
                <Image style={styles.check_blank} source={check_blank}></Image></TouchableOpacity><Text style={styles.LevelFive} numberOfLines={1}>{state.Big2}</Text>
              </View>
              <View style={styles.TouchaArea}>
              <TouchableOpacity count={count} onIncrease={onIncrease} onPress={onIncrease}>
                <Image style={styles.check_blank} source={check_blank}></Image></TouchableOpacity><Text style={styles.LevelFive} numberOfLines={1}>{state.Big3}</Text>
              </View>
              <View style={styles.TouchaArea}>
              <TouchableOpacity count={count} onIncrease={onIncrease} onPress={onIncrease}>
                <Image style={styles.check_blank} source={check_blank}></Image></TouchableOpacity><Text style={styles.LevelFive} numberOfLines={1}>{state.Big4}</Text>
              </View>
              <View style={styles.TouchaArea}>
              <TouchableOpacity count={count} onIncrease={onIncrease} onPress={onIncrease}>
                <Image style={styles.check_blank} source={check_blank}></Image></TouchableOpacity><Text style={styles.LevelFive} numberOfLines={1}>{state.Big5}</Text>
              </View>
              
              <AppTodo/>

              
              </View>
            </View>
            </KeyboardAwareScrollView>
      </ScrollView>
      </SafeAreaView>)
}



const styles = StyleSheet.create({

  colorBar:{
    backgroundColor: "white"
  },

ListLine:{
    backgroundColor: "white",
  flexDirection: "row",
  alignSelf:"center"
},

list:{
backgroundColor: "white",
marginLeft:10,
marginRight:10,
marginTop:15
},

ListTitle:{
    marginTop: 20,
    fontSize: 22,
    textAlign: "center",
    marginLeft:10,
    marginRight:10
},
CountingNumber: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom:10
},

LevelFive: {
    textAlign: "center",
    fontSize: 17,
    color: "black",
    marginLeft: 10,
    marginTop:20,
    marginBottom:20,
    textAlignVertical:"center"
},

TouchaArea:{
    flexDirection:"row",
    alignSelf: "auto",
    borderColor:"#8B00FF",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom:10,
    marginTop:10,
    marginLeft: 10,
    marginRight:10
},
check_blank:{
  alignSelf: "flex-start",
  width: 40,
  height: 40,
  marginLeft:10,
  marginTop:10,
  marginBottom:10,

},
check_done:{
  alignSelf: "flex-start",
  width: 40,
  height: 40,
  marginLeft:10,
  marginTop:10,
  marginBottom:10,

}
}
)