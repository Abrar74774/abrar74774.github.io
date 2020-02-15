var mainFadeIn = document.querySelector('.hello');
var fi1 = document.getElementById("proj");
var fi2 = document.getElementById("portfolio");
var fi3 = document.getElementById("about");
var fi4 = document.getElementById("contact");
var close = document.getElementById("close");

// Intersection Observer========
var options = {
    rootMargin:'-33% 0%'
}

var observer = new IntersectionObserver(function(entries) {
    console.log(entries);
    if (entries.filter(entry => entry.isIntersecting)) {
        console.log(entries.filter(entry => entry.isIntersecting).map(entry => entry.target.style.opacity = 1))
    }
}, options)

observer.observe(fi1);
observer.observe(fi2);
observer.observe(fi3);
observer.observe(fi4);


//===============================

// Start fade in
window.addEventListener('load', function() {
    mainFadeIn.style.opacity = 1;
    
})




// //Responsive fade on scroll
// var width = window.innerWidth;
// var addedScroll = 600;    
// if (width >= 872) {addedScroll = 200;};
// if (width >= 1308) {addedScroll = 0}
// // for (skills) expanding
// var addedScroll2 = 0;
// if (width >= 787) {addedScroll2 = 0};


 

// window.addEventListener('scroll', function() {
//     console.log(pageYOffset);
//     if (pageYOffset >= 170) {fi1.style.opacity = 1};
//     if (pageYOffset >= 570) {fi2.style.opacity = 1};
//     if (pageYOffset >= 1400 + addedScroll) {fi3.style.opacity = 1};
//     if (pageYOffset >= 1870 + addedScroll) {fi4.style.opacity = 1};
// })

