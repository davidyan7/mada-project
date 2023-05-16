import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC38-KVYpwA1Mtu6k1OZBF5I1lsDzSOCbY",
    authDomain: "mada-project-d60cb.firebaseapp.com",
    databaseURL: "https://mada-project-d60cb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mada-project-d60cb",
    storageBucket: "mada-project-d60cb.appspot.com",
    messagingSenderId: "96511398940",
    appId: "1:96511398940:web:f2696d7db14a3ec490bbd9",
    measurementId: "G-K7P5K0W58C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const database = getFirestore();
