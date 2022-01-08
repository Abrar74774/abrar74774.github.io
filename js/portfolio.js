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

// var div1 = document.getElementById("a");
// var div2 = document.getElementById("b");
// var div3 = document.getElementById("c");
// var div4 = document.getElementById("d");
// var div5 = document.getElementById("e");
// var div6 = document.getElementById("f");

// =================================Individual Project Data=================================================

let data = [
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
  },
  {
    title: "Word Counter App",
    lang: ["Javascript", "CSS", "HTML"],
    site: "https://abrar74774.github.io/Word-Counter",
    source: "https://github.com/Abrar74774/Word-Counter",
    description: "This is a Word Counter App built with Javascript.",
    img: './img/wc.jpg'
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

// div1.addEventListener("click", function () {
//   popupEffect(data1);
// });
// div2.addEventListener("click", function () {
//   popupEffect(data2);
// });
// div3.addEventListener("click", function () {
//   popupEffect(data3);
// });
// div4.addEventListener("click", function () {
//   popupEffect(data4);
// });
// div5.addEventListener("click", function () {
//   popupEffect(data5);
// });
// div6.addEventListener("click", function () {
//   popupEffect(data6);
// });

//Portfolio popup close

overlay.addEventListener("click", closepopup);

// ================================= Set Titles ============================================================





// var data1 = {
//   title: "Angular Data Visualizer",
//   lang: ["Angular", "Rest API", "CSS", "HTML"],
//   site: "https://abrar74774.github.io/AngularDataVisualizer/",
//   source: "https://github.com/Abrar74774/AngularDataVisualizer",
//   description: "Visualize input data as bar chart, line chart or pie chart. Uses Chart.js",
//   img: "./img/datvis.jpg"
// }

// var data2 = {
//   title: "Dictionary App",
//   lang: ["Javascript", "REST API (OwlBot)", "CSS", "HTML"],
//   site: "https://abrar74774.github.io/Dictionary/",
//   source: "https://github.com/Abrar74774/Dictionary",
//   description: "This is a dictionary app. It takes a word as user input, and displays the meaning and description of the word along with the word type.<br><br>The app uses Javascript ES6's fetch API to fetch data from OwlBot API.",
//   img: './img/dict.jpg'
// }

// var data3 = {
//   title: "Doodle Clock",
//   lang: ["Javascript", "CSS", "HTML"],
//   site: "https://abrar74774.github.io/myClock",
//   source: "https://github.com/Abrar74774/myClock",
//   description: "This is a Javascript clock, which is designed with the most famous design tool in the world, MS Paint.",
//   img: './img/clock.jpg'
// }

// var data4 = {
//   title: "Construction Website",
//   lang: ["CSS", "HTML", "Javascript"],
//   site: "https://abrar74774.github.io/Construction-Website",
//   source: "https://github.com/Abrar74774/Construction-Website",
//   description: "This is a construction company website.<br> The page is designed with CSS, it is responsive, and has some javascript effects.",
//   img: './img/const.jpg'
// }

// var data5 = {
//   title: "Word Counter App",
//   lang: ["Javascript", "CSS", "HTML"],
//   site: "https://abrar74774.github.io/Word-Counter",
//   source: "https://github.com/Abrar74774/Word-Counter",
//   description: "This is a Word Counter App built with Javascript.",
//   img: './img/wc.jpg'
// }

// var data6 = {
//   title: "Restaurant Website",
//   lang: ["CSS", "HTML", "Javascript"],
//   site: "https://abrar74774.github.io/Restaurant",
//   source: "https://github.com/Abrar74774/Restaurant",
//   description: "This is a Restaurant Website, which is responsive, designed with CSS.",
//   img: './img/rest.jpg'
// }