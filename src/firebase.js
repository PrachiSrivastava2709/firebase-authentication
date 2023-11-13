// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1wS6C2TEe6jk6drfxK3mk9I9yWH9ORpI",
  authDomain: "learning-e1e04.firebaseapp.com",
  projectId: "learning-e1e04",
  storageBucket: "learning-e1e04.appspot.com",
  messagingSenderId: "482609426528",
  appId: "1:482609426528:web:2c7be7809226be628ed305"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);