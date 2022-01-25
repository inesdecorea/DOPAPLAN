import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
  apiKey: "AIzaSyB1_eAhzYomSjz2kb1t8T274UoNOfXzTYY",
  authDomain: "dopaplan-4eee7.firebaseapp.com",
  databaseURL: "https://dopaplan-4eee7-default-rtdb.firebaseio.com",
  projectId: "dopaplan-4eee7",
  storageBucket: "dopaplan-4eee7.appspot.com",
  messagingSenderId: "1032063648583",
  appId: "1:1032063648583:web:3af600bb2ba3114a8b8262",
  measurementId: "G-YGF2JV7RWJ"
  };
  

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()




