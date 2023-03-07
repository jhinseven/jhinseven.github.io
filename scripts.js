/* On-scroll header animation */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "16px";
  } else {
    document.getElementById("header").style.fontSize = "25px";
  }
}

/* Sidebar */

window.addEventListener("scroll", function() {
  var sidebar = document.querySelector(".sidebar");
  var showSidebar = window.scrollY > 50;
  if (showSidebar) {
    sidebar.classList.add("show");
  } else {
    sidebar.classList.remove("show");
  }
});

/* See more below */
window.addEventListener("scroll", function() {
  var sidebar = document.querySelector(".sm-below");
  var showSidebar = window.scrollY > 100;
  if (showSidebar) {
    sidebar.classList.add("hide");
  } else {
    sidebar.classList.remove("hide");
  }
});


/* Menu */
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/* Testimonials */

setInterval(function() {
  var scrollPos = document.querySelector('.sample-div').scrollLeft;
  document.querySelector('.sample-div').scrollLeft += 2;
  if (scrollPos == document.querySelector('.sample-div').scrollLeft) {
    document.querySelector('.sample-div').scrollLeft = 0;
  }
}, 20);