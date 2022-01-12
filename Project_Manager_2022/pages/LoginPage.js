import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import startpagelogo from '../image/startpagelogo.png';

export default function LoginPage() {
    return (

        <View style={styles.LoginMain}>
            <Image style={styles.LoginLogo} source={startpagelogo}></Image>
            <TouchableOpacity activeOpacity={0.8} style={styles.buttonGo}><Text style={styles.buttontext}>시작하기</Text></TouchableOpacity>
        </View>



    );
}

const styles = StyleSheet.create({

    LoginMai: {
        flexDirection: "column"
    },

    LoginLogo:{
        marginTop: 140,
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
    }



});