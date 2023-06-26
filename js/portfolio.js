var div = document.getElementById('popupcontent');
var popup = document.getElementById("popup");
var overlay = document.getElementById("overlay");



//================================== Portfolio menu divs==============================================

let projDivs = [
  document.getElementById("a"),
  document.getElementById("b"),
  document.getElementById("c"),
  document.getElementById("d"),
  document.getElementById("e"),
  document.getElementById("f"),
]

// =================================Individual Project Data=================================================

let data = [
  {
    title: "RayN Lighting",
    lang: ["Next.js", "CSSModules"],
    site: "https://raynlighting.vercel.app/",
    source: "https://github.com/Abrar74774/raynlighting",
    description: "Lighting company website example",
    img: './img/rayn.png'
  },
  {
    title: "Angular Data Visualizer",
    lang: ["Angular", "Rest API", "CSS", "HTML"],
    site: "https://abrar74774.github.io/AngularDataVisualizer/",
    source: "https://github.com/Abrar74774/AngularDataVisualizer",
    description: "Visualize input data as bar chart, line chart or pie chart. Uses Chart.js",
    img: "./img/datvis.jpg"
  },
  {
    title: "Restaurant Website",
    lang: ["CSS", "HTML", "Javascript"],
    site: "https://abrar74774.github.io/Restaurant",
    source: "https://github.com/Abrar74774/Restaurant",
    description: "This is a Restaurant Website, which is responsive, designed with CSS.",
    img: './img/rest.jpg'
  },
  {
    title: "Dictionary App",
    lang: ["Javascript", "OwlBot API", "CSS", "HTML"],
    site: "https://abrar74774.github.io/Dictionary/",
    source: "https://github.com/Abrar74774/Dictionary",
    description: "This is a dictionary app. It takes a word as user input, and displays the meaning and description of the word along with the word type.<br><br>The app uses Javascript ES6's fetch API to fetch data from OwlBot API.",
    img: './img/dict.jpg'
  },
  {
    title: "Car Tuner App",
    lang: ["React", "Javascript", "CSS", "HTML"],
    site: "https://abrar74774.github.io/CarTunerApp",
    source: "https://github.com/Abrar74774/CarTunerApp",
    description: "Customize your car using range sliders.",
    img: './img/Car_Tuner.jpg'
  },
  {
    title: "Construction Website",
    lang: ["Javascript", "CSS", "HTML"],
    site: "https://abrar74774.github.io/Construction-Website",
    source: "https://github.com/Abrar74774/Construction-Website",
    description: "This is a construction company website.<br> The page is designed with CSS, it is responsive, and has some javascript effects.",
    img: './img/const.jpg'
  }
]

//Portfolio popup
function popupEffect(data) {
  console.log(data);
  popup.innerHTML =
    `
      <div id="close">&times;</div>
      <div class="content">
      <div class="view" style="background-image:url('${data.img}');"></div>
      <div class="lang" data-simplebar >
      <h2>${data.title}</h2>
      <ul>
      ${data.lang.map(lang => '<li>' + lang + '</li>').join('')}
      </ul>
      <br>
      <a href="${data.site}" target="_blank">Visit Site</a><a href="${data.source}" target="_blank">View Source on GitHub</a>
      <p>${data.description}</p>
      </div>
      </div>
    ` ;
  popup.style.zIndex = '99999999';
  popup.style.opacity = '1';
  overlay.style.zIndex = '3';
  overlay.style.opacity = '0.7';
  //popupclose====
  var close = document.getElementById("close");
  close.addEventListener("click", closepopup);
  //==============
};
    
function closepopup() {

  console.log("closing attempted")
  overlay.style.opacity = '0';
  setTimeout(function () {
    popup.style.zIndex = '-9';
    overlay.style.zIndex = '-999';
  }, getComputedStyle(popup).transitionDuration.replace('s', '') * 1000)
  popup.style.opacity = '0';
}
    
    //============================================Click Event Handler================================================


projDivs.forEach((div, index) => {
  div.addEventListener("click", () => {popupEffect(data[index])})
  div.querySelector("h2").innerText = data[index].title;
  div.querySelector(".learn-more").innerText = data[index].lang.join(", ")
})

overlay.addEventListener("click", closepopup);

