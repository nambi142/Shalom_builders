// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdJF7w4p1kUvArCpBhVMsTv4UImky7qsY",
  authDomain: "shalom-builders-40aa2.firebaseapp.com",
  projectId: "shalom-builders-40aa2",
  storageBucket: "shalom-builders-40aa2.appspot.com", // <-- fixed
  messagingSenderId: "663535551381",
  appId: "1:663535551381:web:c9a6a0ed51f5e94ca4ec9c",
  measurementId: "G-CXZ83BBCWL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
