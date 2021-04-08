// window.addEventListener('scroll', () => {
//   document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
// }, false);

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

function myFunction() {

  var x = document.getElementById("hamburger_links1");
  var y = document.getElementById("hamburger_links2");
  var z = document.getElementById("hamburger_links3");

  var $ = document.getElementById("hamburger_links_i");
  // var $$ = document.getElementById("hamburger_links_ii");
  // var $$$ = document.getElementById("hamburger_links_iii");

  if (x.classList.contains("d-none")) {
    console.log("MEEP");
    x.classList.remove("d-none");
    $.classList.remove("hamburger_links_ml");
  } else {
    console.log("MOOP");
    x.classList.add("d-none");
    $.classList.add("hamburger_links_ml");
  }

  if (y.classList.contains("d-none")) {
    console.log("MEEP");
    y.classList.remove("d-none");
  } else {
    console.log("MOOP");
    y.classList.add("d-none");
  }

  if (z.classList.contains("d-none")) {
    console.log("MEEP");
    z.classList.remove("d-none");
  } else {
    console.log("MOOP");
    z.classList.add("d-none");
  }

}