import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ57JeakZabDif9W0BrYRrKOvgtziPfkA",
  authDomain: "house-marketplace-app-f8eda.firebaseapp.com",
  projectId: "house-marketplace-app-f8eda",
  storageBucket: "house-marketplace-app-f8eda.appspot.com",
  messagingSenderId: "519064058682",
  appId: "1:519064058682:web:5be943f1829b7dedd8ae03"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()