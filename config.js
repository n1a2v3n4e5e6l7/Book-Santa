import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBWAg41c52IA6f_A-RgkjESjU61W2zw_E0",
    authDomain: "book-santa-b86dd.firebaseapp.com",
    databaseURL: "https://book-santa-b86dd.firebaseio.com",
    projectId: "book-santa-b86dd",
    storageBucket: "book-santa-b86dd.appspot.com",
    messagingSenderId: "623115362476",
    appId: "1:623115362476:web:35bff7efc08df41fe63f09"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
