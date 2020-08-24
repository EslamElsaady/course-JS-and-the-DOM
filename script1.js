let home = document.querySelector('#home');
let services = document.querySelector('#services');
let tuturials = document.querySelector('#tuturials');
let about = document.querySelector('#about');
let contact = document.querySelector('#contact');

window.addEventListener("scroll",()=>{
  var windo = window.pageYOffset;
  if (services.offsetTop < windo && tuturials.offsetTop > windo){
   console.log("Services");
   document.querySelector(".services").setAttribute("id","active");
   document.querySelector(".home").removeAttribute("id","active");
   document.querySelector(".Tuturials").removeAttribute("id","active");
   document.querySelector(".about").removeAttribute("id","active");
   document.querySelector(".contact").removeAttribute("id","active");
  }
  else if (tuturials.offsetTop < windo && about.offsetTop > windo){
   console.log("Tuturials");
   document.querySelector(".Tuturials").setAttribute("id","active");
   document.querySelector(".home").removeAttribute("id","active");
   document.querySelector(".services").removeAttribute("id","active");
   document.querySelector(".about").removeAttribute("id","active");
   document.querySelector(".contact").removeAttribute("id","active");
   }
  else if (about.offsetTop < windo && contact.offsetTop > windo){
   console.log("About");
   document.querySelector(".about").setAttribute("id","active");
   document.querySelector(".home").removeAttribute("id","active");
   document.querySelector(".services").removeAttribute("id","active");
   document.querySelector(".Tuturials").removeAttribute("id","active");
   document.querySelector(".contact").removeAttribute("id","active");
   }
  else if (contact.offsetTop <= windo){
   console.log("Contact");
   document.querySelector(".contact").setAttribute("id","active");
   document.querySelector(".home").removeAttribute("id","active");
   document.querySelector(".services").removeAttribute("id","active");
   document.querySelector(".Tuturials").removeAttribute("id","active");
   document.querySelector(".about").removeAttribute("id","active");   
   }
  else {
console.log("Home");
   document.querySelector(".home").setAttribute("id","active");
   document.querySelector(".contact").removeAttribute("id","active");
   document.querySelector(".services").removeAttribute("id","active");
   document.querySelector(".Tuturials").removeAttribute("id","active");
   document.querySelector(".about").removeAttribute("id","active");
   }
});
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Setup isScrolling variable
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {

	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

		// Run the callback
		document.querySelector('nav').style ="display:none";

	}, 2000);
   document.querySelector('nav').style ="display:flex";
}, false)