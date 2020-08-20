// Store all slides in an array
let slides = Array.from(document.getElementsByClassName("slide"))
// Setting the first slide
let currentSlide = 1
// Grabbing Buttons
let nextBtn = document.getElementById("nextBtn")
let prevBtn = document.getElementById("prevBtn")


// Hiding prev button if on first slide, Hiding next button if on last slide
function updateButtons(){
  if (currentSlide == 1){
    prevBtn.classList.add("invisible")
  }else if(currentSlide == slides.length){
    nextBtn.classList.add("invisible")
  }else{
    nextBtn.classList.remove("invisible")
    prevBtn.classList.remove("invisible")
  }
}




// Updates slide when user clicks "next"
function nextSlide(){
  // Updating slide and buttons 
  currentSlide += 1
  updateButtons()

  // Hide all slides
  slides.forEach(function(slide){
    slide.classList.add("invisible")
  })

  // Show current slide
  currentSlideElement = document.getElementById(currentSlide)
  currentSlideElement.classList.remove("invisible")
}


// Updates slide when user clicks "prev"
function prevSlide(){
  // Updating slide and buttons 
  currentSlide -= 1
  updateButtons()

  // Hide all slides
  slides.forEach(function(slide){
    slide.classList.add("invisible")
  })

  // Show current slide 
  currentSlideElement = document.getElementById(currentSlide)
  currentSlideElement.classList.remove("invisible")
}




// Listen for click on next and prev button
nextBtn.addEventListener("click", nextSlide)
prevBtn.addEventListener("click", prevSlide)
