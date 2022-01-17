import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import startpagelogo from '../images/startpagelogo.png';
import { navigation } from '@react-navigation/native';
import MainPage from './MainPage';

export default function LoginPage({navigation, route}) {
    console.disableYellowBox=true;
    return (
    <ScrollView style={styles.displayLog}>   
       <View style={styles.Log}>
        <View style={styles.LoginMain}>
            <Image style={styles.LoginLogo} source={startpagelogo}></Image>
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate("MainPage")}}>
            <Text style={styles.buttontext}>시작하기</Text>
        </TouchableOpacity>
        </View> 
       </ScrollView> 
        
    )}




const styles = StyleSheet.create({

    displayLog:{
        backgroundColor: "white"
    },

    Log:{
        backgroundColor: "white"
    },

    LoginMain: {
        flexDirection: "column",
        marginVertical: 30
    },

    LoginLogo:{
        marginTop: 100,
        alignSelf: "center",
        width: 300,
        height: 400,
    },

    buttontext:{
        fontSize: 25,
        backgroundColor: "#8B00FF",
        color: "white",
        padding: 22,
        margin:50, 
        textAlign: "center",
        borderRadius: 20
    },

});