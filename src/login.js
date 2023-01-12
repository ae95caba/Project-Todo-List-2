import { initializeApp } from "firebase/app";
import {
  authStateObserver,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { loggingForm } from "./dom";

function initFirebase() {
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyBCtqexbhRqpEJrVOAR5c3sBD7yq6ZGVn0",
    authDomain: "todo-list-83b00.firebaseapp.com",
    projectId: "todo-list-83b00",
    storageBucket: "todo-list-83b00.appspot.com",
    messagingSenderId: "617100105345",
    appId: "1:617100105345:web:b3d533c322ad31c24e9f80",
    measurementId: "G-GSYQ3W6X5G",
  });

  const auth = getAuth(firebaseApp);

  const emailInput = document.getElementById("email-input");
  const passwordInput = document.getElementById("password-input");
  const openLogging = document.getElementById("open-logging");
  const loggingButton = document.getElementById("submit-button");

  /*  loggingButton.addEventListener("click", () => {
    createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }); */
  loggingButton.addEventListener("click", () => {
    signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
      .then((userCredential) => {
        loggingForm.close();
        openLogging.style.display = "none";
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  signOut(auth);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user is signed in");
    } else {
      console.log("user is signed out");
    }
  });
}

export default initFirebase;
