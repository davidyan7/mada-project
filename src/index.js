import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
