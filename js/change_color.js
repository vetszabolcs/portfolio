let element = document.getElementById("contact-link");
let touch = document.getElementById("touch");

element.addEventListener("click", function (e){
  touch.style.color = "white";
  setTimeout(() => {touch.style.color = "black";}, 250);
});
