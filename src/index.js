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
  apiKey: "AIzaSyBZ5pNUAuYmtYj8VxCEX-BqFM2ZF03-sRM",
  authDomain: "miapp-3.firebaseapp.com",
  projectId: "miapp-3",
  storageBucket: "miapp-3.firebasestorage.app",
  messagingSenderId: "607831338910",
  appId: "1:607831338910:web:52f9c912897d744866708f",
  measurementId: "G-FG8SRZ6S5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <App />
 
);

