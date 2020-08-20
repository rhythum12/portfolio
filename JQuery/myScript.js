function validateForm() {
	var fname = document.forms["messageForm"]["firstname"].value;
	var lname = document.forms["messageForm"]["lastname"].value;
	var gender = document.forms["messageForm"]["gender"].value;
	var message = document.forms["messageForm"]["message"].value;

	if (fname == "" || lname == "" || message == ""){
		alert("Empty fields found. Please fill the form.");
	}
	else {
		alert("Thank you for the feedback.");
	}
}


/* From Index page|Home page */
<script>
var slideIndex = 1;
showSlides(slideIndex);
</script>

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

