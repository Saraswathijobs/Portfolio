// navbar

function navSlide(){
  const nav=document.querySelector(".navbar");
  const menu = document.querySelector(".nav-links");
  const burger = document.querySelector(".burger");



  burger.addEventListener("click",()=>{
    menu.classList.toggle("nav-active");


    burger.classList.toggle("toggle")
  })
}
navSlide();



// sign button

function toggleSignInPopup() {
  var popup = document.getElementById("signin-popup");
  popup.style.display = (popup.style.display === "block") ? "none" : "block";
}

function signIn() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
// GST
function calculate() {
  var laptop = parseFloat(document.getElementById('laptop').value) || 0;
  var smartphone = parseFloat(document.getElementById('smartphone').value) || 0;
  var tablet = parseFloat(document.getElementById('tablet').value) || 0;
  var camera = parseFloat(document.getElementById('camera').value) || 0;
  var headphones = parseFloat(document.getElementById('headphones').value) || 0;
  var gstRate = parseFloat(document.getElementById('GST').value) || 0;

  var total = laptop + smartphone + tablet + camera + headphones;
  var gstAmount = (total * gstRate) / 100;
  var finalAmount = total + gstAmount;

  
  if (finalAmount >= 25000) {
      finalAmount -= 1000; 
  }

  document.getElementById('answer').innerText = "Total Amount: ₹" + total.toFixed(2);
  document.getElementById('final').innerText = "Final Amount (including GST): ₹" + finalAmount.toFixed(2);
}
}

// image change



document.body.addEventListener('click', function(event) {
  var overlay = document.getElementById("overlay");
  var container = document.querySelector(".container");
  if (!container.contains(event.target)) {
    // overlay.style.backgroundColor = "grayish"; // Reset overlay color
    overlay.innerHTML = "Our Process<br>How we are work on this part.<br> This is our work prccess.."; // Change overlay text
    overlay.style.display = "none";
  }
});

function displayColor() {
  var overlay = document.getElementById("overlay");
  overlay.style.backgroundColor = "gray"; // Change overlay color
  overlay.innerHTML = "Our Process<br>How we are work on this part.<br> This is our work prccess.."; // Change overlay text
  overlay.style.display = "flex";
}


// flip the card
// document.addEventListener("DOMContentLoaded", function(){
//   const cards= document.querySelectorAll('card1');
//   let currentCardIndex=0;

//   cards[currentCardIndex].classList.add('active');

//   function goToNextCard(){
//     cards[currentCardIndex].classList.remove('active');
//     currentCardIndex++;
//     if(currentCardIndex>=card1.length){
//       currentCardIndex=0;
//     }
//     cards[currentCardIndex].classList.add('active');
//   }
//   cards.forEach(card1=>{
//     card1.addEventListener('click', goToNextCard);
//   });
// });




// // Sign in
// document.getElementById('showFormBtn').addEventListener('click', function() {
//   var form = document.getElementById('signInForm');
//   form.style.display = form.style.display === 'none' ? 'block' : 'none';
// });

// document.getElementById('signInForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent form submission

//   var username = document.getElementById('username').value;
//   var password = document.getElementById('password').value;

//   // Perform authentication here (dummy example)
//   if (username === 'user' && password === 'pass') {
//     document.getElementById('message').textContent = 'Login successful!';
//   } else {
//     document.getElementById('message').textContent = 'Invalid username or password';
//   }
// });



// navbar

function navslide(){
  const nav=document.querySelector(".navbar");
  const menu=document.querySelector("nav-items");
  const hamburger=document.querySelector(".hamburger");

  hamburger.addEventListener("click",()=>{
    menu.classList.add("navbar-active");
  })
}

navslide();