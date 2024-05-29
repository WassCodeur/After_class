//Email Registration Process//
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import dotenv from "dotenv";

dotenv.config()

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//getting inputs//
const RegistrationButton = document.getElementById("reg-submit");

RegistrationButton.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
        alert("Account created......")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
});


const loginIn = document.querySelector("button")

loginIn.addEventListener('click', (e) =>{
  e.preventDefault()
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
      alert("successfully logined")
      window.location.href="product.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})