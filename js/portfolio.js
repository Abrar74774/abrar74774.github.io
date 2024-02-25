const div = document.getElementById('popupcontent');
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const projDivs = document.querySelectorAll(".project")

//Portfolio popup
function popupEffect(data) {
  console.log(data);
  popup.innerHTML =
    `
      <div id="close">&times;</div>
      <div class="content">
      <div class="view" style="background-image:url('${data.img}');"></div>
      <div class="lang">
      <h2>${data.title}</h2>
      <ul>
      ${data.lang.map(lang => '<li>' + lang + '</li>').join('')}
      </ul>
      <br>
      <a href="${data.site}" target="_blank" class="btn">Visit Site</a> ${data.source ? `<a href="${data.source}" class="btn target="_blank">View Source</a>` : ``}
      <p>${data.description}</p>
      </div>
      </div>
    ` ;
  popup.style.zIndex = '99999';
  popup.style.opacity = '1';
  overlay.style.zIndex = '3';
  overlay.style.opacity = '0.7';
  document.querySelector(".main-content").style.overflowY = 'hidden'
  document.getElementById("close").addEventListener("click", closepopup);
};
    
function closepopup() {
  // console.log("closing attempted")
  document.querySelector(".main-content").style.overflowY = 'auto'
  overlay.style.opacity = '0';
  setTimeout(function () {
    popup.style.zIndex = '-9';
    overlay.style.zIndex = '-999';
  }, getComputedStyle(popup).transitionDuration.replace('s', '') * 1000)
  popup.style.opacity = '0';
}

projDivs.forEach((div, index) => {
  div.style.backgroundImage = `url(${data[index].img})`
  div.addEventListener("click", () => {popupEffect(data[index])})
  div.querySelector("h2").innerText = data[index].title;
  div.querySelector(".techs").innerText = data[index].lang.join(", ")
})

overlay.addEventListener("click", closepopup);

