import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { collection, getFirestore, getDocs, } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";



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
 const db = getFirestore(app);




 const querySnapshot = await getDocs(collection(db, "Address"));
 querySnapshot.forEach((doc) => {
   console.log(`${doc.id} => ${doc.data()}`);

 document.getElementById("this").innerHTML = `

<h5>Shipping Address</h5>
<hr>
<div class="row">
<div class="col-lg-6">
<b>Delivery Details</b><br><br>
<p>${doc.data().fullname}</p>
<p>${doc.data().Address}</p>
<p>${doc.data().City}</p>
<p>${doc.data().State}</p>
<p>${doc.data().Code}</p>

</div>
<div class="col-lg-4">
<b>Shipping Updates</b><br><br>
<p>zunairkhan742@gmail.com</p>
</div>
</div>


`
});