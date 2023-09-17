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




 const querySnapshot = await getDocs(collection(db, "zunair"));
 querySnapshot.forEach((doc) => {
   console.log(`${doc.id} => ${doc.data()}`);


document.getElementById("price").innerHTML = `
        
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
         <button onclick="zun()" style="background-color: #4f46e5 ;color: white;" class="btn d-grid gap-2 col-12 mx-auto p-2" type="button"><b style="font-size: large;">Place Order</b></button>  
        
        `
        document.getElementById("sho").innerHTML+=`
        

        
        <div class="row">
<div class="col-lg-4">
    <img style="border-radius: 10px;" width="120px"  src="${doc.data().img}" alt="">
</div>

<div class="col-lg-8">
<div class="row">
    <div class="col-lg-11">
        <h4>${doc.data().names}</h4>
    </div>
   
</div>
<p style="font-size: 14px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nam sapiente dicta optio aliquam nostrum. Quasi facilis rerum </p>
<br>

<p>Price : ${doc.data().rupees}</p>
    
</div>

         </div>
        
        
        `


});





function zun(){

  alert("Place order")
}
window.zun = zun


