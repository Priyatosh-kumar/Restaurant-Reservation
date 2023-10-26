//sticking header
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//preloader
var loader= document.getElementById("preloader") ;
window.addEventListener("load", function() {
    loader.style.display = "none";
})

//

  let currentRadio = 1; // Start with the first radio button
  const intervalDuration = 5000; // Change slides every 5 seconds (adjust as needed)

  function changeSlide() {
    currentRadio++; // Increment the current radio button
    if (currentRadio > 4) {
      currentRadio = 1; // Reset to the first radio button
    }
    document.getElementById(`radio-${currentRadio}`).checked = true; // Check the corresponding radio button
  }

  // Automatically change slides at the specified interval
  setInterval(changeSlide, intervalDuration);

