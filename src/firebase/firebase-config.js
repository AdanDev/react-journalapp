import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
};

/* 
const firebaseConfigTesting = {
    apiKey: "AIzaSyC7H-4y3PskCxIW9bnCzxhLgIszwedwsv8",
    authDomain: "redux-demo-ab387.firebaseapp.com",
    databaseURL: "https://redux-demo-ab387.firebaseio.com",
    projectId: "redux-demo-ab387",
    storageBucket: "redux-demo-ab387.appspot.com",
    messagingSenderId: "738918522614",
    appId: "1:738918522614:web:b79586f7983560125856d7",
    measurementId: "G-S2R4YJJPQL"
  };

if(process.env.NODE_ENV === 'test'){
    //testing
    firebase.initializeApp(firebaseConfigTesting);
} else {
    //dev/prod
    firebase.initializeApp(firebaseConfig);
} */

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}