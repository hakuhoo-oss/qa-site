// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNX8OXM7kgf9GACq1IiFUfYHuoOaWYpIw",
  authDomain: "qa-site-1d9f3.firebaseapp.com",
  projectId: "qa-site-1d9f3",
  storageBucket: "Yqa-site-1d9f3.firebasestorage.app",
  messagingSenderId: "355019180448",
  appId: "1:355019180448:web:256c84cb66dcc4f28dfcc5"
};

// Firebase初期化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNX8OXM7kgf9GACq1IiFUfYHuoOaWYpIw",
  authDomain: "qa-site-1d9f3.firebaseapp.com",
  projectId: "qa-site-1d9f3",
  storageBucket: "qa-site-1d9f3.firebasestorage.app",
  messagingSenderId: "355019180448",
  appId: "1:355019180448:web:256c84cb66dcc4f28dfcc5",
  measurementId: "G-RQ8FJQ7P1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
