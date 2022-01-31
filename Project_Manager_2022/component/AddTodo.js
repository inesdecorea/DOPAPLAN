import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Image, TouchableOpacity, Alert} from 'react-native';
import create from '../images/create.png';
import data from '../DB/data.json';

function AddTodo(){

    const [text, setText] = useState('');

    const onPress= ()=> {
        setText('');
        keyboard.dismiss()
    };

    const [todos, setTodos] = useState('');
    const onInsert = text => {
        const bigGoal = todos.length >0 ? Math.max(...todos.map(goal=>goal.index))+1:1;
        const goal = data.goal        

    }


    return (
        <View style={styles.InputBox}>
            <TextInput placeholder='하위 목표를 입력하세요' style={styles.Input} value={text} onChangeText={setText} onSubmitEditing={onPress} returnKeyType="done"/>
            <TouchableOpacity onPress={()=>{Alert.alert('때려치자')}} >
            <View style={styles.ButtonStyle} >
                <Image style={styles.ButtonPlusImg} source={create} ></Image>
            </View>
            </TouchableOpacity> 
        
        </View>
        
    );
}

const styles = StyleSheet.create({

    InputBox:{
        flexDirection:"row",
        height: 64,
        paddingHorizontal: 10, //좌우측만 padding 주기
        borderColor: "#8B00FF",
        borderWidth: 1,
        justifyContent: "center",
        marginTop: 10,
        borderRadius: 10,
        marginHorizontal:10,   
        
    },
    Input:{
        fontSize: 17,
        paddingVertical:1,
        textAlign: 'center'

        
    },
    ButtonPlusImg:{
        width: 55,
        height: 55,
        marginVertical:3,
        right:-90,
        marginRight: 10,
        position:"absolute",
        alignSelf:"flex-end"

    }
});

export default AddTodo;