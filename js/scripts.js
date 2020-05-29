var mainFadeIn = document.querySelector('.hello');
var fi1 = document.getElementById("proj");
var fi2 = document.getElementById("portfolio");
var fi3 = document.getElementById("about");
var fi4 = document.getElementById("contact");
var close = document.getElementById("close");

// Intersection Observer========
var options = {
    rootMargin: '-33% 0%'
}

var observer = new IntersectionObserver(function (entries) {
    console.log(entries);
    if (entries.filter(entry => entry.isIntersecting)) {
        entries.filter(entry => entry.isIntersecting).map(entry => entry.target.style.opacity = 1);
    }
}, options)

observer.observe(fi1);
observer.observe(fi2);
observer.observe(fi3);
observer.observe(fi4);


//===============================

// Start fade in

mainFadeIn.style.opacity = 1;