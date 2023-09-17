import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { collection, addDoc, getFirestore, getDocs, deleteDoc, doc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";




const firebaseConfig = {
    apiKey: "AIzaSyBDc2RQn6Nh76wuOOIcgnGw0YdxG53KE30",
    authDomain: "my-website-b9f7e.firebaseapp.com",
    projectId: "my-website-b9f7e",
    storageBucket: "my-website-b9f7e.appspot.com",
    messagingSenderId: "332524188831",
    appId: "1:332524188831:web:ca4c9a34a23f5b28fb5eaa"
  };




const btn = document.getElementById("proceed")
btn.addEventListener('click',async()=>{
const fname = document.getElementById("name").value
const address = document.getElementById("Address").value
const city = document.getElementById("city").value
const state = document.getElementById("state").value
const code = document.getElementById("code").value

    try {
        const docRef = await addDoc(collection(db, "Address"), {
         fullname : fname,
         Address : address,
         City : city,
         State : state,
         Code : code
         
        });
        location.reload()
       window.location.href = "./final.html"
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }


})

   // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);






 const querySnapshot = await getDocs(collection(db, "zunair"));
 querySnapshot.forEach((doc) => {
   console.log(`${doc.id} => ${doc.data()}`);
document.getElementById("check").innerHTML+=`
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
document.getElementById("check1").innerHTML=`

<div class="row">
<div class="col-lg-7">
               
                </div>
                <div class="col-lg-2">
                    <p>Subtotal</p>
                </div>
                <div class="col-lg-1">
                    <b>${doc.data().rupees}</b>
                </div>
            </div>
            <br>
            <div class="row">
            <div class="col-lg-7">
               
                </div>
                <div class="col-lg-2">
                    <b>Order total</b>
                </div>
                <div class="col-lg-1">
                    <b>${doc.data().rupees}</b>
                </div>
            </div>

`


});


async function del(id) {
    await deleteDoc(doc(db, "zunair", id));
    location.reload()
  } 
  window.del = del