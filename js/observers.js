const mainFadeIn = document.querySelector('.hello');
const fi1 = document.querySelector("#proj");
const fi2 = document.querySelector("#portfolio");
const fi3 = document.querySelector("#about");
const fi4 = document.querySelector("#contact");
const close = document.querySelector("#close");

// Intersection Observer========
const options = {
    rootMargin: '-45% 0%'
}

const observer = new IntersectionObserver(function (entries) {
    console.log(entries);
    if (entries.filter(entry => entry.isIntersecting)) {
        entries.filter(entry => entry.isIntersecting).map(entry => {
            entry.target.style.opacity = 1;
            if (entry.target.id == "portfolio") {
                anime({
                    targets: '.project',
                    translateY: [-30, 0],
                    opacity: 1,
                    easing: 'easeOutSine',
                    delay: anime.stagger(50),
                    duration: 500
                });
            }
            observer.unobserve(entry.target)
        });
    }
}, options)

observer.observe(fi1);
observer.observe(fi2);
observer.observe(fi3);
observer.observe(fi4);


//===============================

// Start fade in

// setTimeout(() => mainFadeIn.style.opacity = 1, 1000);