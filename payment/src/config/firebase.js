import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore, collection, getDocs } from 'firebase/compat/firestore';


  // Your Firebase configuration
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
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = getFirestore();
const auth = firebase.auth();
const websiteCollectionRef = collection(db, 'Websites');

getDocs(websiteCollectionRef)
  .then((querySnapshot) => {
    const websites = [];
    querySnapshot.forEach((doc) => {
      websites.push({ ...doc.data(), id: doc.id });
    });
    console.log(websites);
  })
  .catch((error) => {
    console.log('Error getting documents: ', error);
  });
