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
  apiKey: "AIzaSyCRNtujmuAeZ7a55SI5aXpB76IQ1DD5LIE",
  authDomain: "miapp5.firebaseapp.com",
  projectId: "miapp5",
  storageBucket: "miapp5.appspot.com",
  messagingSenderId: "670596680227",
  appId: "1:670596680227:web:3d2008474c8503655aff96",
  measurementId: "G-FKXFFMGKPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <App />
 
);

