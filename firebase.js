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
