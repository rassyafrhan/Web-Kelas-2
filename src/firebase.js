// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAk52MDSaA4QIvt0CcC-eL6eMsg1UUYPE4",
  authDomain: "kelas-v2-4aa04.firebaseapp.com",
  projectId: "kelas-v2-4aa04",
  storageBucket: "kelas-v2-4aa04.appspot.com",
  messagingSenderId: "740272318297",
  appId: "1:740272318297:web:457f91f3382f5fedd78e48",
  measurementId: "G-DTN0GXKRM9"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();