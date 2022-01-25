import React,{useState} from 'react';
import {Text, StyleSheet, ScrollView, View,  KeyboardAvoidingView, Platform} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Counter from '../component/Counter';
import data from '../DB/data.json';
import AppTodo from '../component/AddTodo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function InProgressList() {
    const[count,setCount] = useState(0);

    const onIncrease = () => setCount(count +1);

    let goal = data.goal;
    return(
      <SafeAreaProvider>
    <ScrollView style={styles.ListLine} horizontal indicatorStyle>
        { 
          goal.map((content,i)=> { 
            return (

              <KeyboardAwareScrollView style={styles.avoid} extraScrollHeight={-150}>    
            <View style={styles.list} key={i}>
              <View style={styles.ListText}>
              <Text style={styles.ListTitle} numberOfLines={1}>{content.title}</Text>
              <Text style={styles.CountingNumber}>달성한 하위 목표: {count}</Text>
              <View style={styles.TouchaArea}>
              <Counter count={count} onIncrease={onIncrease}/><Text style={styles.LevelFive} numberOfLines={1}>{content.Big1}</Text>
              </View>
              <View style={styles.TouchaArea}>
              <Counter count={count} onIncrease={onIncrease}/><Text style={styles.LevelFive} numberOfLines={1}>{content.Big2}</Text>
              </View>
              <View style={styles.TouchaArea}>
              <Counter count={count} onIncrease={onIncrease}/><Text style={styles.LevelFive} numberOfLines={1}>{content.Big3}</Text>
              </View>
              <View style={styles.TouchaArea}>
              <Counter count={count} onIncrease={onIncrease}/><Text style={styles.LevelFive} numberOfLines={1}>{content.Big4}</Text>
              </View>
              <View style={styles.TouchaArea}>
              <Counter count={count} onIncrease={onIncrease}/><Text style={styles.LevelFive} numberOfLines={1}>{content.Big5}</Text>
              </View>
              
              <AppTodo/>

              
              </View>
            </View>
            </KeyboardAwareScrollView>
            )
          })
         }
      </ScrollView>
      </SafeAreaProvider>)
    }    



const styles = StyleSheet.create({
ListLine:{
    backgroundColor: "white",
    padding:10,
  flexDirection: "row"
},

list:{
backgroundColor: "white",
marginLeft:15,
marginRight:50
},

ListTitle:{
    marginTop: 20,
    fontSize: 25,
    textAlign: "center"
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
    marginTop: 15,
    marginBottom: 10
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
    marginRight:10,
    padding: 5
}
}
)