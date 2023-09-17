import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBDc2RQn6Nh76wuOOIcgnGw0YdxG53KE30",
    authDomain: "my-website-b9f7e.firebaseapp.com",
    projectId: "my-website-b9f7e",
    storageBucket: "my-website-b9f7e.appspot.com",
    messagingSenderId: "332524188831",
    appId: "1:332524188831:web:ca4c9a34a23f5b28fb5eaa"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const btn1 = document.getElementById("login2")
btn1.addEventListener('click',()=>{
const email1 = document.getElementById("em").value
const password1 = document.getElementById("pass").value
const sign = document.getElementById("sign")    
    signInWithEmailAndPassword(auth, email1, password1)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        window.location.href = "./index.html"
        
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        alert("Wrong Email and password");
        window.location.href = "./signup.html"
    });
})
    