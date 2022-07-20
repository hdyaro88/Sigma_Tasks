// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa1UBDOxUkLtvFxwkGLILUXOTGDxuFCk0",
  authDomain: "to-do-sigma.firebaseapp.com",
  databaseURL: "https://to-do-sigma-default-rtdb.firebaseio.com",
  projectId: "to-do-sigma",
  storageBucket: "to-do-sigma.appspot.com",
  messagingSenderId: "736959554173",
  appId: "1:736959554173:web:7f971f5658761d728b4714",
  measurementId: "G-56FSZ2P593",
  databaseURL : "https://to-do-sigma-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
const analytics = getAnalytics(app);