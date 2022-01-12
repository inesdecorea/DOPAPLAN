import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import LogoHorizon from '../image/LogoHorizon.png';
import main from '../icons/main.png';
import goal from '../icons/goal.png';
import delay from '../icons/delay.png';
import futuregoal from '../icons/futuregoal.png';
import share from '../icons/share.png';

export default function MainPage() {
  return (
      <ScrollView style={styles.display01}>
      
      <View style={styles.logopart}>
        <Image style={styles.mainlogo} source={LogoHorizon}></Image>
        <Text style={styles.Hi01}>안녕하세요, 도파루파님!</Text>
        <Text style={styles.Hi02}>Project Manager Dopaplan은 {"\n"}도파루파님이 목표를 이루시는 그날까지 함께합니다!</Text>
      </View>
        
        
        <TouchableOpacity style={styles.projectGoButton01}><Image style={styles.MainImage} source={main}></Image>
        <View style={styles.textBox01}>
          <Text style={styles.ButtonText01}>현재 진행중인 프로젝트 목록</Text>
          </View>
        </TouchableOpacity> 
     
        <ScrollView style={styles.display00} horizontal indicatorStyle>
      <View style={styles.FirstBox}>
        <TouchableOpacity style={styles.box01}><Image style={styles.Imagegoal} source={goal}></Image><View style={styles.textgoal}><Text style={styles.FourBoxtext}>달성한{"\n"}프로젝트</Text></View></TouchableOpacity>
        <TouchableOpacity style={styles.box02}><Image style={styles.Imagedelay} source={delay}></Image><View style={styles.textdelay}><Text style={styles.FourBoxtext}>미룬{"\n"}프로젝트</Text></View></TouchableOpacity>
        <TouchableOpacity style={styles.box03}><Image style={styles.Imagefuturegoal} source={futuregoal}></Image><View style={styles.textfuturegoal}><Text style={styles.FourBoxtext}>미래의{"\n"}프로젝트</Text></View></TouchableOpacity>
        <TouchableOpacity style={styles.box04}><Image style={styles.Imageshare} source={share}></Image><View style={styles.textshare}><Text style={styles.FourBoxtext}>프로젝트{"\n"}공유하기</Text></View></TouchableOpacity>
        </View>
        </ScrollView>
      <Text style={styles.made}>Designed by Doparupa{"\n"}Instagram @euphoria_sumin / Twitter @Doparupa_</Text>
    </ScrollView>
  
  );
}

const styles = StyleSheet.create({
  
  display01: {
    backgroundColor: "white"
  },

  mainlogo: {
    width: 200,
    height: 60,
    marginLeft: 20,
    marginTop:50
  },

  Hi01:{
    marginLeft: 30,
    fontSize: 25,
    marginTop: 20,
    fontWeight: "500"
  },

  Hi02:{
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10, 
    fontSize: 15
    
  },

  projectGoButton01:{
    flex:1,
    borderColor:"#8B00FF",
    borderWidth: 0.5,
    borderRadius: 20,
    margin: 20,
    flexDirection:"row",
  },

  MainImage:{
   width: 64,
   height: 64,
   marginLeft: 30, 
   marginTop: 10,
   marginBottom: 10,
   padding: 5
  },

  ButtonText01:{
    
    fontSize: 21,
    fontWeight:"600",
    padding: 10,
    textAlign: "center",
    marginTop: 20
  },


  //여기서부터는 4개의 메뉴 박스 스타일

  FirstBox:{
    flexDirection: "row",
    height: 150
  },

  box01:{
    flex: 1,
    marginLeft:20,
    marginTop:5,
    flexDirection:"column"
  },

  Imagegoal:{
    width: 70,
     height: 70,
     marginLeft: 30, 
     marginRight:30,
     marginTop: 10,
     marginBottom: 5,
     flex: 3
    },

  textgoal:{
    fontSize: 20,
    marginLeft:15,
    fontWeight:"600",
    textAlign: "center",
    flex:4
  },


  Box02:{
    flex: 1,
    marginLeft:120,
    marginTop:5,
    flexDirection:"column"
  },

  Imagedelay:{
    width: 70,
    height: 70,
    marginLeft: 30, 
    marginRight:30,
    marginTop: 10,
    marginBottom: 5,
    flex: 3
  },

  textdelay:{
    fontSize: 20,
    marginLeft:15,
    fontWeight:"600",
    textAlign: "center",
    flex:4
  },

    Box03:{
      flex: 1,
      marginLeft:20,
      marginTop:5,
      flexDirection:"column"
  },

  Imagefuturegoal:{
    width: 70,
     height: 70,
     marginLeft: 30, 
     marginRight:30,
     marginTop: 10,
     marginBottom: 5,
     flex: 3
    
    },

  textfuturegoal:{
    fontSize: 20,
    marginLeft:15,
    fontWeight:"600",
    textAlign: "center",
    flex:4
  },

  Box04:{
    flex: 1,
    marginLeft:20,
    marginTop:5,
    flexDirection:"column"
},

  Imageshare:{
    width: 70,
     height: 70,
     marginLeft: 30, 
     marginRight:30,
     marginTop: 10,
     marginBottom: 5,
     flex: 3
  },

  textshare:{
    fontSize: 20,
    marginLeft:15,
    fontWeight:"600",
    textAlign: "center",
    flex:4
  },

  FourBoxtext:{
    fontSize: 20,
    fontWeight:"600",
    padding: 5,
    textAlign: "center",
    marginRight: 10,
    marginTop: 10,
    alignSelf: "auto"
  },

  made:{
    textAlign: "center",
    color: "#808080",
    marginTop:10 

  }
  

});