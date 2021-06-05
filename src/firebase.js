import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJfTOPaLHrM0ZOUYZAROWFyU4DftSqN44",
  authDomain: "flash-bazaar-277015.firebaseapp.com",
  databaseURL: "https://flash-bazaar-277015.firebaseio.com",
  projectId: "flash-bazaar-277015",
  storageBucket: "flash-bazaar-277015.appspot.com",
  messagingSenderId: "815544717046",
  appId: "1:815544717046:web:1c65b5b3cadc8e45e3a6d7"
};
  
const firebaseInstance = firebase.initializeApp(firebaseConfig);
const db = firebaseInstance.firestore();
const auth = firebase.auth();
const analytics = firebase.analytics();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, db, analytics, provider, storage };
