// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4hh9-8f9DhFMyjsnRE43-7GvsJazg4fQ",
  authDomain: "link-sharing-app-7e7e2.firebaseapp.com",
  projectId: "link-sharing-app-7e7e2",
  storageBucket: "link-sharing-app-7e7e2.appspot.com",
  messagingSenderId: "493197134568",
  appId: "1:493197134568:web:a8e42e3b2e62e8fc4ed75d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);