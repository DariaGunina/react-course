import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBQKWSSr7A7wMmrmtRzHhmegqjsSxyEH1A",
  authDomain: "react-course-a1736.firebaseapp.com",
  databaseURL: "https://react-course-a1736-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-course-a1736",
  storageBucket: "react-course-a1736.appspot.com",
  messagingSenderId: "814785296655",
  appId: "1:814785296655:web:da866477edf291d2ae667a",
  measurementId: "G-GZKXXK4K8M"
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);
