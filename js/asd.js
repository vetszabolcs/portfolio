// This changes everything
"use strict";

// retrieve the element
let asd = document.getElementById("asd");
let element = document.getElementById("logo");

// reset the transition by...
asd.addEventListener("click", function(e){
  e.preventDefault;

  element.classList.remove("run-animation")
  element.offsetWidth
  element.classList.add("run-animation")

}, false);