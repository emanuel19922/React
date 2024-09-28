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
  apiKey: "AIzaSyCJnNxXpzXVEZpF15lASRyxGAXRvhYaht8",
  authDomain: "proyecto1-15cfd.firebaseapp.com",
  projectId: "proyecto1-15cfd",
  storageBucket: "proyecto1-15cfd.appspot.com",
  messagingSenderId: "219755330051",
  appId: "1:219755330051:web:b42aff9d1b0c6f63656c36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <App />
 
);

