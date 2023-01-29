import firebase from 'firebase/app';
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCnaZk2l3j_N1-s-4BU0octtz_18j8gs60",
  authDomain: "blog-news-4503f.firebaseapp.com",
  projectId: "blog-news-4503f",
  databaseURL:'https://blog-news-4503f-default-rtdb.europe-west1.firebasedatabase.app/',
  storageBucket: "blog-news-4503f.appspot.com",
  messagingSenderId: "755510234712",
  appId: "1:755510234712:web:1a0fffa73df07572b0042d",
  measurementId: "G-LSYMR36Q91"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const database=firebase.database()
export {database as default}

