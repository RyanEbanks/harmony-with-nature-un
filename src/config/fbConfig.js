import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize firebase
const firebaseConfig = {
    apiKey: "AIzaSyBXSHKNOwpVxZDqJAAagxVtr3Dt1kP22Z0",
    authDomain: "hwni-backend.firebaseapp.com",
    projectId: "hwni-backend",
    storageBucket: "hwni-backend.firebasestorage.app",
    messagingSenderId: "889911586081",
    appId: "1:889911586081:web:f03ea16b15f9a415c3a260",
    measurementId: "G-48N1G9PJ2Q"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.firestore().settings({ timestampsInSnapshots: true });

 export default firebase;