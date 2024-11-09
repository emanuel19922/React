import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd7J2Dxu44r6xMc8m08uX3xfFrsx5qJGc",
  authDomain: "miapp-2.firebaseapp.com",
  projectId: "miapp-2",
  storageBucket: "miapp-2.firebasestorage.app",
  messagingSenderId: "386683713513",
  appId: "1:386683713513:web:75d8e9650b84691bc53d78",
  measurementId: "G-QEY2EEQ3CL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <App />
 
);

