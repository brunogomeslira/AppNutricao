// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBqcxiTPBIIMQUQ-Jw7DIE0119wbml-zzQ",
  authDomain: "hospital-67eb0.firebaseapp.com",
  databaseURL: "https://hospital-67eb0-default-rtdb.firebaseio.com",
  projectId: "hospital-67eb0",
  storageBucket: "hospital-67eb0.appspot.com",
  messagingSenderId: "674942051035",
  appId: "1:674942051035:web:6ddb87ffc484b3b0b8a2fe",
  measurementId: "G-ZY3MDTJYKT",
};

// Initialize Firebasee

export const InitializeApp = () => initializeApp(firebaseConfig);
