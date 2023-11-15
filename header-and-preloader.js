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