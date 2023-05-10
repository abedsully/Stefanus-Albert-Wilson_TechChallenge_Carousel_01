var position = 1;
slide(position);

// Previous and Next Buton
function control(n) {
  slide(position += n);
}

// Current Position
function current(n) {
  slide(position = n);
}

function slide(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-container");
  var circles = document.getElementsByClassName("dots");
  
  // Reset ke slide 1, kalo udah melebihi length slide
  if(n > slides.length) {
    position = 1;
  }

  // Ke slide 4, kalo button prev di slide 1 dipencet
  if(n < 1) {
    position = slides.length;
  }

  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }

  for(i = 0; i < circles.length; i++){
    circles[i].className = circles[i].className.replace(" enable", "");
  }


  slides[position-1].style.display = "block";
  circles[position-1].className += " enable";

}
