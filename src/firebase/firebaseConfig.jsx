import firebase from 'firebase/app';
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAt20ewwnh0cygs2FiWEte41hHkme5ChBA",
  authDomain: "elyte-blogs.firebaseapp.com",
  databaseURL:"https://elyte-blogs-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "elyte-blogs",
  storageBucket: "elyte-blogs.appspot.com",
  messagingSenderId: "1029699139864",
  appId: "1:1029699139864:web:0f2b2aa1b1381a5d3f466d",
  measurementId: "G-VY6RTXGNNT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const database = firebase.database()
export { database as default }

