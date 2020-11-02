import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAylYOyGlLYT0EPVZttyKin5I2BvW1ggTo",
    authDomain: "reactapp-4bb6d.firebaseapp.com",
    databaseURL: "https://reactapp-4bb6d.firebaseio.com",
    projectId: "reactapp-4bb6d",
    storageBucket: "reactapp-4bb6d.appspot.com",
    messagingSenderId: "947331040089",
    appId: "1:947331040089:web:f3f231e7334fcdcb384248",
    measurementId: "G-HGV6TR46P6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;