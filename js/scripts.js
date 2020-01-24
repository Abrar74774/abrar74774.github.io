var fi1 = document.getElementById("proj");
var fi2 = document.getElementById("portfolio");
var fi3 = document.getElementById("about");
var fi4 = document.getElementById("contact");


window.addEventListener('scroll', function() {
    console.log(pageYOffset);
    if (pageYOffset >= 170) {fi1.style.opacity = 1};
    if (pageYOffset >= 570) {fi2.style.opacity = 1};
    if (pageYOffset >= 1400) {fi3.style.opacity = 1};
    if (pageYOffset >= 1870) {fi4.style.opacity = 1};
})