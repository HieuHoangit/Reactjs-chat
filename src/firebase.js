import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALSNBRDQyZFjgIi6NXzkRrP5aIVRDsDQA",
  authDomain: "chat-e1395.firebaseapp.com",
  projectId: "chat-e1395",
  storageBucket: "chat-e1395.appspot.com",
  messagingSenderId: "235566504464",
  appId: "1:235566504464:web:707fcfe9079713778d0895"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
