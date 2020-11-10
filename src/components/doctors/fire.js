import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDynVV83kam8tG8z1OEjRN2V-2zUjS2Ci0",
    authDomain: "arthurx-login.firebaseapp.com",
    databaseURL: "https://arthurx-login.firebaseio.com",
    projectId: "arthurx-login",
    storageBucket: "arthurx-login.appspot.com",
    messagingSenderId: "155281522815",
    appId: "1:155281522815:web:74461936c1ef0ce09a3f4a"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;