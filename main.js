
//TIMER
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();


var x = setInterval(function () {


  var now = new Date().getTime();


  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + " ";
  ;
  document.getElementById("hours").innerHTML = hours + " ";
  ;
  document.getElementById("minutes").innerHTML = minutes + " ";
  ;
  document.getElementById("seconds").innerHTML = seconds + " ";
  ;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("seconds").innerHTML = "EXPIRED";
  }
}, 1000);



//NAVIGATION --------------------

const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");


navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("area-expanded", false)
    : navToggle.setAttribute("area-expanded", true)
  primaryNav.toggleAttribute("data-visible");
});


//FAQ --------------------



var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    this.classList.toggle("active");


    var body = this.nextElementSibling;
    if (body.style.display === "block") {
      body.style.display = "none";
    } else {
      body.style.display = "block";
    }
  });
}
