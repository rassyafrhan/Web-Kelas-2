// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAyyPcAV7LyiC9t4QXx0dSvyGmPYcOkAM8",
  authDomain: "kelas-v2-f0005.firebaseapp.com",
  projectId: "kelas-v2-f0005",
  storageBucket: "kelas-v2-f0005.appspot.com",
  messagingSenderId: "385026297165",
  appId: "1:385026297165:web:08b6b4df83584e0896fb04",
  measurementId: "G-ZL6YST4P3D"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();