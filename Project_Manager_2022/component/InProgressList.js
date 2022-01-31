import React,{useState, useEffect} from 'react';
import {Text, StyleSheet, ScrollView, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import data from '../DB/data.json';
import AppTodo from '../component/AddTodo';
import check_blank from '../images/check_blank.png';


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



export default function InProgressList({navigation, route}){
  const[count,setCount] = useState(0);
  const[state,setState] = useState( {

    "index":"0",
    "title":"첫번째 목표, Dopaplan Project 완성",
    "Big1":"Notion에 기획안 작성하기",
    "Big2":"화면 구성하고 이미지 모으기",
    "Big3":"VSCode에 폴더 만들고 코딩하기",
    "Big4":"Firebase DB로 Login 기능 넣기",
    "Big5":"개발일지 작성"
    
});

  useEffect(()=>{
    setState(route.params),[]})

    const onIncrease = () => setCount(count +1);


    return(
      

      
    <ScrollView style={styles.ListLine}>
              <KeyboardAwareScrollView style={styles.avoid} extraScrollHeight={30}>    
            <View style={styles.list} state={state} key={state.index}>
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
    )
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
  backgroundColor: "white",
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
  backgroundColor: "white",
    textAlign:"left",
    fontSize: 17,
    color: "black",
    marginLeft: 10,
    marginRight:10,
    marginTop:20,
    marginBottom:20,
    textAlignVertical:"center",
    width: 300
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

},
avoid:{
  backgroundColor: "white"
}
}
)