
document.body.addEventListener('click', function(event) {
    var overlay = document.getElementById("overlay");
    var container = document.querySelector(".container");
    if (!container.contains(event.target)) {
      // overlay.style.backgroundColor = "grayish"; // Reset overlay color
      overlay.innerHTML = "Our Process<br>How we are work on this part.<br> This is our work prccess.."; // Change overlay text
      overlay.style.display = "none";
    }
  });
  