// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// @refresh reset
// import * as firebase from 'firebase/app';
import firebase from "firebase/app";

import "firebase/auth";
// import "firebase/database";
// import { FirebaseAuthTypes } from '@react-native-firebase/auth';
// import auth from '@react-native-firebase/auth';
// import firebase from 'firebase/app';
import 'firebase/firestore';
import  getDatabase  from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDk23H7pU_hL5ZAr8VHN8r98aCyA3XoIPU",
  authDomain: "knockout-no-analtics.firebaseapp.com",
  projectId: "knockout-no-analtics",
  storageBucket: "knockout-no-analtics.appspot.com",
  messagingSenderId: "861089090862",
  appId: "1:861089090862:web:8504fd3673f8a08011febf",
  databaseURL:'https://knockout-no-analtics-default-rtdb.firebaseio.com'
};
// const clientCredentials = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// // const firebaseConfig = {
// //     apiKey: "AIzaSyDLLx563CZyDV4jlt3ZDxmcLn4Y5yyt33A",
// //     authDomain: "knockout-fitness.firebaseapp.com",
// //     projectId: "knockout-fitness",
// //     storageBucket: "knockout-fitness.appspot.com",
// //     messagingSenderId: "621017186844",
// //     appId: "1:621017186844:web:74c40b838cc2d0e71095d9",
// //     measurementId: "G-HYT86WW9NH"
// // };

let app;
  
// firebase.initializeApp(firebaseConfig);

if (firebase.apps.length === 0){

 app = firebase.initializeApp(firebaseConfig);

}else {
  app = firebase.app ();
}
// const admin = require('firebase-admin');
const db = app.firestore();
// const db = admin.firestore();
const auth = firebase.auth();
const database = firebase.database;

export {db, auth,firebase,database};

