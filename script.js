import { db } from './firebase.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('question-form');
  const status = document.getElementById('status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const questionText = document.getElementById('question').value.trim();

    if (!questionText) return;

    try {
      await addDoc(collection(db, "questions"), {
        text: questionText,
        createdAt: serverTimestamp(),
        answerA: null,
        answerB: null,
        passwordA: null,
        passwordB: null
      });

      status.textContent = "保存しました！";
      form.reset();
    } catch (error) {
      console.error("エラー:", error);
      status.textContent = "保存に失敗しました。";
    }
  });
});

