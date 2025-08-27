// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLLvlVCHjhaWZty5PpJoWPdH8c7kBIr5Q",
  authDomain: "gudangpd-project.firebaseapp.com",
  projectId: "gudangpd-project",
  storageBucket: "gudangpd-project.firebasestorage.app",
  messagingSenderId: "259576155613",
  appId: "1:259576155613:web:044875f3d74c44c25b3a34",
  measurementId: "G-RJ929SXFGZ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
