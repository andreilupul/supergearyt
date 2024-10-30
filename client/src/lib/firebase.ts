// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYZ3Qzb_AEsyladM9vHJReJVT0Hwq4LwE",
  authDomain: "e-commerce-32d9c.firebaseapp.com",
  projectId: "e-commerce-32d9c",
  storageBucket: "e-commerce-32d9c.appspot.com",
  messagingSenderId: "87404220600",
  appId: "1:87404220600:web:9c6f48405c62bcc280a44d",
  measurementId: "G-FR2DCNLZJM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
