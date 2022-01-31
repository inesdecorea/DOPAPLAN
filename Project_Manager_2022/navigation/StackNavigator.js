import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AchievedPage from '../pages/AchievedPage';
import MainPage from '../pages/MainPage';
import DelayedPage from '../pages/DelayedPage';
import FuturegoalPage from '../pages/FuturegoalPage';
import SharedPage from '../pages/SharePage';
import LoginPage from '../pages/LoginPage';
import ProjectListPage from '../pages/ProjectListPage';
import InProgressList from '../component/InProgressList';

//스택 네비게이션 라이브러리가 제공해주는 여러 기능이 담겨있는 객체를 사용합니다
//그래서 이렇게 항상 상단에 선언하고 시작하는게 규칙입니다!
const Stack = createStackNavigator();

const StackNavigator = () =>{
    return (

        //컴포넌트들을 페이지처럼 여기게끔 해주는 기능을 하는 네비게이터 태그를 선언합니다.
        //위에서 선언한 const Stack = createStackNavigator(); Stack 변수에 들어있는 태그를 꺼내 사용합니다.
        //Stack.Navigator 태그 내부엔 페이지(화면)를 스타일링 할 수 있는 다양한 옵션들이 담겨 있습니다.
        <Stack.Navigator
        
        screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: "white",
                borderBottomColor: "white",
                shadowColor: "white",
                height:100,
                
                
            },  
        
            headerTintColor: "#8B00FF",
            headerBackTitleVisible: false
        }}
        >
            {/* 컴포넌트를 페이지로 만들어주는 엘리먼트에 끼워 넣습니다. 이 자체로 이제 페이지 기능을 합니다*/}
            <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown:false}}/>    
            <Stack.Screen name="MainPage" component={MainPage} options={{title:'Home'}}/>           
            <Stack.Screen name="AchievedPage" component={AchievedPage} options={{title: '달성한 프로젝트'}}/>
            <Stack.Screen name="DelayedPage" component={DelayedPage} options={{title: '미룬 프로젝트'}}/>
            <Stack.Screen name="FuturegoalPage" component={FuturegoalPage} options={{title: '미래의 프로젝트'}}/>
            <Stack.Screen name="SharedPage" component={SharedPage} options={{title: '프로젝트 공유하기'}}/>
            <Stack.Screen name="InProgressList" component={InProgressList} options={{title: '현재 진행중인 하위 계획'}}/>
            <Stack.Screen name="ProjectListPage" component={ProjectListPage} options={{title: '현재 진행중인 계획'}}/>
        </Stack.Navigator>
    )
}

export default StackNavigator;
