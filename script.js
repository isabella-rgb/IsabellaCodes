
document.addEventListener("DOMContentLoaded", () => {

  const sidebarItems = document.querySelectorAll(".sidebar li");

  const sections = {
    "About me": "about-section",
    "HTML – Module 1": "html-section",
    "CSS – Module 2": "css-section",
    "JavaScript – Module 3": "js-section",
    "Grok Learning Achievements": "grok-section",
    "CodeCombat Achievements":"CodeCombat",
    "Weather App (API) – Module 4": "weather-section",
    "Web Framework Work (React/Vue) – Module 5": "framework-section"
  };

  sidebarItems.forEach(item => {
    item.addEventListener("click", () => {

      // Remove active class from other items
      sidebarItems.forEach(li => li.classList.remove("active"));
      item.classList.add("active");

      const sectionID = sections[item.textContent.trim()];
      const target = document.getElementById(sectionID);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });











  const icons = document.querySelectorAll("[data-popup]");
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popupTitle");
  const popupText = document.getElementById("popupText");
  const closePopup = document.getElementById("closePopup");

  const questions = {
    html: {
      title: "HTML Questions",
      text: "• In your own words, what is HTML?<br>•How do you think HTML helps structure a website?<br>• Which HTML element do you feel more usefull?"
    },


    css: {
      title: "CSS Questions",
      text: "• In your own words, what does CSS do?<br>• How do colours and fonts affect how a website feels?<br>• What do you find hardest about using CSS?"
    },

    js: {
      title: "JavaScript Questions",
      text: "• In your own words, what is JavaScript used for?<br>• Name one example of JavaScript on a website.<br>• Is JavaScript used for actions or design?"
    }
  };

  icons.forEach(icon => {
    icon.addEventListener("click", () => {
      const type = icon.dataset.popup;
      popupTitle.textContent = questions[type].title;
      popupText.innerHTML = questions[type].text;
      popup.style.display = "flex";
    });
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === popup) popup.style.display = "none";
  });











  // GROK BUTTONS
const htmlBtn = document.querySelector(".logh");
const cssBtn = document.querySelector(".logc");
const jsBtn = document.querySelector(".logj");

// GROK IMAGES
const htmlImgs = [
  document.getElementById("grok-html-img-1"),
  document.getElementById("grok-html-img-2")
];

const cssImgs = [
  document.getElementById("grok-css-img-1"),
  document.getElementById("grok-css-img-2")
];

const jsImg = document.getElementById("grok-js-img-1");

// STATE COUNTERS
let htmlClick = 0;
let cssClick = 0;
let jsClick = 0;

function hideAllGrokImages() {
  [...htmlImgs, ...cssImgs, jsImg].forEach(img => {
    if (img) img.style.display = "none";
  });
}

// HTML clicks
htmlBtn.addEventListener("click", () => {
  hideAllGrokImages();
  cssClick = 0;
  jsClick = 0;

  htmlClick++;

  if (htmlClick === 1) {
    htmlImgs[0].style.display = "block";
  } else if (htmlClick === 2) {
    htmlImgs[1].style.display = "block";
  } else {
    htmlClick = 0;
  }
});

// CSS clicks
cssBtn.addEventListener("click", () => {
  hideAllGrokImages();
  htmlClick = 0;
  jsClick = 0;

  cssClick++;

  if (cssClick === 1) {
    cssImgs[0].style.display = "block";
  } else if (cssClick === 2) {
    cssImgs[1].style.display = "block";
  } else {
    cssClick = 0;
  }
});

// JS clicks
jsBtn.addEventListener("click", () => {
  hideAllGrokImages();
  htmlClick = 0;
  cssClick = 0;

  jsClick++;

  if (jsClick === 1) {
    jsImg.style.display = "block";
  } else {
    jsClick = 0;
  }
});

});





function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    const items = document.querySelectorAll('.sidebar li');

    // hide all pages
    pages.forEach(p => p.classList.remove('active'));
    // remove active highlight from all sidebar items
    items.forEach(i => i.classList.remove('active'));

    // show clicked page
    document.getElementById(pageId).classList.add('active');
    // highlight clicked sidebar item
    event.target.classList.add('active'); 
  }









  document.addEventListener("DOMContentLoaded", () => {

  const combatBtn = document.querySelector(".loghc");

  const combatImgs = [
    document.getElementById("combat-1-img-1"),
    document.getElementById("combat-2-img-2")
  ];

  let combatClick = 0;

  function hideAllCombatImages() {
    combatImgs.forEach(img => {
      if (img) img.style.display = "none";
    });
  }

  combatBtn.addEventListener("click", () => {
    hideAllCombatImages();
    combatClick++;

    if (combatClick === 1) {
      combatImgs[0].style.display = "block";
    } else if (combatClick === 2) {
      combatImgs[1].style.display = "block";
    } else {
      combatClick = 0;
    }
  });

});




   