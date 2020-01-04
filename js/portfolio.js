var div = document.getElementById('popupcontent');
var popup = document.getElementById("popup");
var overlay = document.getElementById("overlay");
var close = document.getElementById("close");


//================================== Portfolio menu divs==============================================

var div1 = document.getElementById("a");
var div2 = document.getElementById("b");
var div3 = document.getElementById("c");
var div4 = document.getElementById("d");
var div5 = document.getElementById("e");
var div6 = document.getElementById("f");


//===================================Function=========================================================

function popupEffect(data)  {
  div.innerHTML = 
      `<div id="first">
      <h2>${data.title}</h2>
      <div class="viewlang">
        <div class="view" style="background-image:url('${data.img}');"></div>
        <div class="lang">
          <h3>Technologies used:</h3>
          <ul>
            ${data.lang.map(lang =>'<li>' + lang + '</li>').join('')}
          </ul>
          <br>
          <a href="${data.site}">Visit Site</a><a href="${data.source}">View Source on GitHub</a>
        </div>
      </div>
      <p>${data.description}</p>
    </div>` ;
  popup.style.zIndex = '99999999';
  popup.style.opacity = '1'; 
  overlay.style.zIndex = '3';
  overlay.style.opacity='0.5';
};


//============================================Click Event Handler================================================

//Portfolio popup

div1.addEventListener("click", function() {
  popupEffect(data1);
});
div2.addEventListener("click", function() {
  popupEffect(data2);
});
div3.addEventListener("click", function() {
  popupEffect(data3);
});
div4.addEventListener("click", function() {
  popupEffect(data4);
});
div5.addEventListener("click", function() {
  popupEffect(data5);
});
div6.addEventListener("click", function() {
  popupEffect(data6);
});

//Portfolio popup close

function closepopup() {
  
  overlay.style.opacity = '0';
  setTimeout(function(){
    popup.style.zIndex = '-9';
    overlay.style.zIndex = '-999';
  }, getComputedStyle(popup).transitionDuration.replace('s','') * 1000)
  popup.style.opacity = '0';
}
overlay.addEventListener("click", closepopup);
close.addEventListener("click", closepopup);


// =================================Individual Project Data=================================================

var data1 = {
  title:"React Weather App",
  lang:["React","REST API(Darksky and arcgis)", "CSS", "HTML"],
  site:"https://abrar74774.github.io/ReactWeatherApp",
  source:"https://github.com/Abrar74774/ReactWeatherApp",
  description:"This is an app, where user enters the location or location coordinates, and the app displays current temperature of the location with highest and lowest temperature of the day, along with those of the next five days.<br><br>This is a web app built with React. It uses fetch API for fetching data from arcgis autocomplete REST API, and searches weather data from DarkSky API, and displays it. It uses React Router for showing two pages of the app.",
  img:"./img/reactweatherapp2.png"
}

var data2 = {
  title:"Dictionary App",
  lang:["Javascript", "REST API (OwlBot)", "CSS", "HTML"],
  site:"https://abrar74774.github.io/Dictionary/",
  source:"https://github.com/Abrar74774/Dictionary",
  description:"This is a dictionary app. It takes a word as user input, and displays the meaning and description of the word along with the word type.<br><br>The app uses Javascript ES6's fetch API to fetch data from OwlBot API.",
  img:'./img/dict.jpg'
}

var data3 = {
  title:"Doodle Clock",
  lang:["Javascript", "CSS", "HTML"],
  site:"https://abrar74774.github.io/myClock",
  source:"https://github.com/Abrar74774/myClock",
  description:"This is a Javascript clock, which is designed with the most famous design tool in the world, MS Paint.",
  img:'./img/clock.jpg'
}

var data4 = {
  title:"Construction Website",
  lang:["CSS", "HTML", "Javascript"],
  site:"https://abrar74774.github.io/Construction-Website",
  source:"https://github.com/Abrar74774/Construction-Website",
  description:"This is a construction company website.<br> The page is designed with CSS, it is responsive, and has some javascript effects.",
  img:'./img/const.jpg'
}

var data5 = {
  title:"Word Counter App",
  lang:["Javascript","CSS", "HTML"],
  site:"https://abrar74774.github.io/Word-Counter",
  source:"https://github.com/Abrar74774/Word-Counter",
  description:"This is a Word Counter App built with Javascript.",
  img:'./img/wc.jpg'
}

var data6 = {
  title:"Restaurant Website",
  lang:["CSS", "HTML","Javascript"],
  site:"https://abrar74774.github.io/Restaurant",
  source:"https://github.com/Abrar74774/Restaurant",
  description:"This is a Restaurant Website, which is responsive, designed with CSS.",
  img:'./img/rest.jpg'
}