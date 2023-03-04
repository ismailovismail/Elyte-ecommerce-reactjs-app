import firebase from 'firebase/app';
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDKHVxOf01bbBHNCSQvYP8DD9Xu9QZ_b0Q",
  authDomain: "blog-apps-79d02.firebaseapp.com",
  databaseURL: "https://blog-apps-79d02-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blog-apps-79d02",
  storageBucket: "blog-apps-79d02.appspot.com",
  messagingSenderId: "790796699902",
  appId: "1:790796699902:web:1738a4411d27d72f01fdaf",
  measurementId: "G-DS2GH8VQ1W"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const database = firebase.database()
export { database as default }

