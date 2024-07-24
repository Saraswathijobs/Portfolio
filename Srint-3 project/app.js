
// --------------------navbar-----------------

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

  

//   // ------------Hero section------------------
//   // Array of image URLs
// const images = [
//   'image1.jpg',
//   'image2.jpg',
//   'image3.jpg',
//   // Add more image paths here
// ];

// let currentIndex = 0;
// const slideshowElement = document.getElementById('slideshow');

// // Function to change image
// function showNextImage() {
//   currentIndex = (currentIndex + 1) % images.length;
//   slideshowElement.src = images[currentIndex];
// }

// // Change image every 3 seconds
// setInterval(showNextImage, 3000);


//--------------Marque funtionality---------------
document.getElementById('loadMoreBtn').addEventListener('click', loadMoreContent);

        function loadMoreContent() {
            const content = document.getElementById('content');
            const newContent = document.createElement('p');
            newContent.textContent = 'More content...';
            content.appendChild(newContent);
        }


        // ----------read more and less-----------
        function myFunction() {
          var dots = document.getElementById("dots");
          var moreText = document.getElementById("more");
          var btnText = document.getElementById("myBtn");
        
          if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more"; 
            moreText.style.display = "none";
          } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less"; 
            moreText.style.display = "inline";
          }
        }


        // ------------Adding the denoters details------------
        document.addEventListener('DOMContentLoaded', function() {
          const donorForm = document.getElementById('donorForm');
          const totalDonationAmountElem = document.getElementById('totalDonationAmount');
      
          function updateTotalDonationAmount() {
              let donors = localStorage.getItem('donors');
              donors = donors ? JSON.parse(donors) : [];
              const totalDonationAmount = donors.reduce((sum, donor) => sum + parseFloat(donor.donationAmount), 0);
              totalDonationAmountElem.textContent = totalDonationAmount.toFixed(2);
          }
      
          donorForm.addEventListener('submit', function(event) {
              event.preventDefault();
      
              const donor = {
                  firstName: document.getElementById('firstName').value,
                  lastName: document.getElementById('lastName').value,
                  email: document.getElementById('email').value,
                  phone: document.getElementById('phone').value,
                  address: document.getElementById('address').value,
                  donationAmount: parseFloat(document.getElementById('donationAmount').value),
                  donationDate: document.getElementById('donationDate').value,
                  donationType: document.getElementById('donationType').value,
              };
      
              
              let donors = localStorage.getItem('donors');
              donors = donors ? JSON.parse(donors) : [];
              donors.push(donor);
              localStorage.setItem('donors',JSON.stringify(donors));
      
              
              updateTotalDonationAmount();
      
              
              donorForm.reset();
      
              alert('Donor details added successfully!');
          });
      
         
          updateTotalDonationAmount();
      });
      



// --------------vedio-------------------

      document.addEventListener('DOMContentLoaded', () => {
        const video = document.getElementById('bgVideo');
    
        // Play the video
        video.play();
    
        // Add an event listener for clicking to toggle play/pause
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    
        // Optionally, you can add more controls or interactivity here
    });
    