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


// our process container

document.body.addEventListener('click', function(event){
  var overlay = document.getElementById("overlay");
  var rectangle = document.querySelector(".rectangle-img-container");
  if (!rectangle.contains(event.target)) {
    overlay.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
    overlay.innerHTML = "Our Process<br>How we are work on this part.<br> This is our work prccess.."; 
    overlay.style.display = "none";
  }
})

function displayCard() {
    var overlay = document.getElementById("overlay");
    overlay.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
    overlay.innerHTML = "Our Process<br>How we are work on this part.<br> This is our work prccess..";
    overlay.style.display = "flex";
  }

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

// login form

function toggleSignInPopup() {
  var popup = document.getElementById("signin-popup");
  popup.style.display = (popup.style.display === "block") ? "none" : "block";
}

function signIn() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  console.log("Username: " + username);
  console.log("Password: " + password);

  document.getElementById("signin-form").reset();

  toggleSignInPopup();
}