  // Initialize Firebase
  import firebase from "firebase/app";
  import "firebase/auth";

  const config = {
    apiKey: "AIzaSyDGgOOJ-SGq5n7izRz0k6bZuGHq_p29PXY",
    authDomain: "kowope-bank.firebaseapp.com",
    databaseURL: "https://kowope-bank.firebaseio.com",
    projectId: "kowope-bank",
    storageBucket: "kowope-bank.appspot.com",
    messagingSenderId: "692066717521"
  };

  if (!firebase.apps.length){
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();

  export {
    auth,
  };