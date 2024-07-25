const mainFadeIn = document.querySelector('.hello');
const fi1 = document.querySelector("#proj");
const fi2 = document.querySelector("#portfolio");
const fi3 = document.querySelector("#about");
const fi4 = document.querySelector("#contact");
const observables = [fi1, fi2, fi3, fi4]
const close = document.querySelector("#close");

const el = document.querySelector(".home-content");
const homepic = document.querySelector(".homepic");
const mouseMoveDivisor = 60

el.addEventListener("mousemove", (e) => {
    homepic.style.transform = `translateX(${-e.clientX / mouseMoveDivisor}px) translateY(${-e.clientY / mouseMoveDivisor}px)`;
});

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
    

    // First animation
    gsap.from(".hello .frame div", {
        yPercent: 100,
        ease: "power2.out",
        stagger: 0.5,
        duration: 1.5,
        delay: 0.3
    }) 

    // Navbar
    gsap.from("nav .nav-background", {
        scrollTrigger: {
            trigger: "#about",
            toggleActions: "play none none reverse",
            start: "top bottom",
            end: "+=100",
            
        },
        x: '-100vw',
        ease: "power2.in",
        duration: 0.5
    })
    
    // Section Titles
    document.querySelectorAll(".section-title div").forEach(titleContent => {
        gsap.from(titleContent, {
            scrollTrigger: {
                trigger: titleContent,
                start: "top bottom-=200px",
            },
            yPercent: 100,
            ease: "power2.out",
            duration: 1,
        })
    })
    
});




// // Intersection Observer========
// const options = {
//     rootMargin: '-45% 0%'
// }

// const vanisherOptions = {
//     rootMargin: '10% 0%'
// }

// const vanisher = new IntersectionObserver(entries => {
//     if (entries.filter(entry => entry.isIntersecting)) {
//         entries.filter(entry => entry.isIntersecting).map(entry => {
//             entry.target.style.opacity = 0;
//             vanisher.unobserve(entry.target)
//         })
//     }
// }, vanisherOptions)

// const observer = new IntersectionObserver(function (entries) {
//     console.log(entries);
//     if (entries.filter(entry => entry.isIntersecting)) {
//         entries.filter(entry => entry.isIntersecting).map(entry => {
//             anime({
//                 targets: entry.target,
//                 opacity: 1,
//                 easing: 'easeOutSine',
//                 delay: 100,
//                 duration: 500
//             });
//             if (entry.target.id == "portfolio") {
//                 anime({
//                     targets: '.project',
//                     translateY: [-30, 0],
//                     opacity: [0, 1],
//                     easing: 'easeOutSine',
//                     delay: anime.stagger(50),
//                     duration: 500
//                 });
//             }
//             if (entry.target.id == "about") {
//                 anime({
//                     targets: 'p, ul',
//                     translateY: [30, 0],
//                     opacity: [0, 1],
//                     easing: 'easeOutSine',
//                     delay: anime.stagger(200),
//                     duration: 600
//                 });
//             }
//             observer.unobserve(entry.target)
//         });
//     }
// }, options)


// observables.forEach(observable => {
//     observer.observe(observable)
//     vanisher.observe(observable)
// })
// // observer.observe(fi1);
// // observer.observe(fi2);
// // observer.observe(fi3);
// // observer.observe(fi4);


// //===============================

// // Start fade in

// // setTimeout(() => mainFadeIn.style.opacity = 1, 1000);