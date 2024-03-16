import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWSMXz9IhbgY87o9s4YT4aSThZWyqMlgM",
  authDomain: "miapp4-eef65.firebaseapp.com",
  projectId: "miapp4-eef65",
  storageBucket: "miapp4-eef65.appspot.com",
  messagingSenderId: "604480295545",
  appId: "1:604480295545:web:b14d4624898d4108ebfaa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <App />
 
);

