// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1Th3oQdzirakQt8KpVnBjE219y4W9p9M",
  authDomain: "cac-proyecto-app-react.firebaseapp.com",
  projectId: "cac-proyecto-app-react",
  storageBucket: "cac-proyecto-app-react.appspot.com",
  messagingSenderId: "220227712331",
  appId: "1:220227712331:web:3633c9fd7d79f2cbe8e4ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };