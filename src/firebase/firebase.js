
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAnT4xFYP1JBE8GwSQRK2r71t6iP-tgfW4",
  authDomain: "vendelotuyo-c9644.firebaseapp.com",
  projectId: "vendelotuyo-c9644",
  storageBucket: "vendelotuyo-c9644.appspot.com",
  messagingSenderId: "446511776998",
  appId: "1:446511776998:web:5c73611cd4c4af273ce727"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)