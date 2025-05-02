// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBXSHKNOwpVxZDqJAAagxVtr3Dt1kP22Z0",
    authDomain: "hwni-backend.firebaseapp.com",
    projectId: "hwni-backend",
    storageBucket: "hwni-backend.firebasestorage.app",
    messagingSenderId: "889911586081",
    appId: "1:889911586081:web:f03ea16b15f9a415c3a260",
    measurementId: "G-48N1G9PJ2Q"
  };
  

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);