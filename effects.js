var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("color-slide");
  var dots = document.getElementsByClassName("color-button");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" red", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " red";
}

$(document).ready(function(){
        $("#critics-ratings").animate({width: '87%'},1000);
});

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}