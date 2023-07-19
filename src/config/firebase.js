// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import 'firebase/auth';
import {getFirestore} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBNl1hYVwzBOtiVv4beauV1QaiA9Yx4_pQ",
  authDomain: "kreate-test.firebaseapp.com",
  databaseURL: "https://kreate-test-default-rtdb.firebaseio.com",
  projectId: "kreate-test",
  storageBucket: "kreate-test.appspot.com",
  messagingSenderId: "568422480914",
  appId: "1:568422480914:web:b9329eb2698ad94b08eccb",
  measurementId: "G-3HQH0FRDVX"
};

const app=initializeApp(firebaseConfig)



export const db=getFirestore(app);

