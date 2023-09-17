import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

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
const db = getFirestore(app);

const btn = document.getElementById("signup")
btn.addEventListener('click',async()=>{



    
  const fName = document.getElementById("na").value;
  const useremail = document.getElementById("em").value;


  try {
     const docRef = await addDoc(collection(db, "signup"), {
    firstName : fName,
    UserEmail : useremail
  
     });
     console.log("Document written with ID: ", docRef.id);
   } catch (e) {
     console.error("Error adding document: ", e);
   }

  const email = document.getElementById("em").value
  const password = document.getElementById("pass").value
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        window.location.href = ".//login.html"
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorCode);
          console.log(errorMessage);
      });
  })