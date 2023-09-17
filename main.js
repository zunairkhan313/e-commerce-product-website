import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { collection, addDoc, getFirestore, getDocs, deleteDoc, doc, onSnapshot,query,where,updateDoc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import {getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

 const firebaseConfig = {
   apiKey: "AIzaSyBDc2RQn6Nh76wuOOIcgnGw0YdxG53KE30",
   authDomain: "my-website-b9f7e.firebaseapp.com",
   projectId: "my-website-b9f7e",
   storageBucket: "my-website-b9f7e.appspot.com",
   messagingSenderId: "332524188831",
   appId: "1:332524188831:web:ca4c9a34a23f5b28fb5eaa"
 };



 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
 const db = getFirestore(app);

 
 const q = collection(db, "signup")
 const unsubscribe = onSnapshot(q, (snapshot) => {
   snapshot.docChanges().forEach((change) => {

 document.getElementById("change").innerHTML = 
 `
 <p>${change.doc.data().firstName}</p>
 <p onclick="out(auth)">Logout</p>
 `
   
   });
 });

 function out(){

  const auth = getAuth();
signOut(auth).then(() => {
// Sign-out successful.
window.location.href = "./index.html"
}).catch((error) => {
// An error happened.
});
}
window.out = out

async function add(r,n,p){
    const rupee = r
    const product = p
    const name = n
    try {
        const docRef = await addDoc(collection(db, "zunair"), {
          rupees : rupee,
          names : name,
          img : product
         
        });
        location.reload()
        window.location.href = "./bucket.html"
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }


}
window.add = add





 // Initialize Firebase




 const querySnapshot = await getDocs(collection(db, "zunair"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
document.getElementById("show").innerHTML+=`

<div class="row">
<div class="col-lg-4">
    <img style="border-radius: 10px;" width="120px"  src="${doc.data().img}" alt="">
</div>

<div class="col-lg-8">
<div class="row">
    <div class="col-lg-11">
        <h4>${doc.data().names}</h4>
    </div>
    <div class="col-lg-1">
        <i onclick="del('${doc.id}')" class="fa-solid fa-x"></i>
    </div>
</div>
<p style="font-size: 14px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nam sapiente dicta optio aliquam nostrum. Quasi facilis rerum </p>
<select style="height: 35px;border-radius: 10px;">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
</select>
    
</div>

         </div>
`
document.getElementById("show2").innerHTML = `
<h4>Order Summary</h4>
<br>
<div class="row">
                <div class="col-lg-9">
                    <p>Subtotal</p>
                </div>
                <div class="col-lg-2">
                    <b>${doc.data().rupees}</b>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-lg-9">
                    <b>Order total</b>
                </div>
                <div class="col-lg-2">
                    <b>${doc.data().rupees}</b>
                </div>
            </div>
            <br>
            <button onclick ="me()" style="background-color: #4f46e5 ;color: white;" class="btn d-grid gap-2 col-12 mx-auto p-2" type="button"><b style="font-size: large;">Checkout</b></button>
`



});


function me(){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
       
          const uid = user.uid;
          window.location.href = "./checkout.html"
        // ...
      } else {
        window.location.href = "./login.html"
        // User is signed out
        // ...
      }
    });
}
window.me =  me

  


async function del(id) {
    await deleteDoc(doc(db, "zunair", id));
    location.reload()
  } 
  window.del = del







