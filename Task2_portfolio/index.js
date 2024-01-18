let nav = document.querySelector("nav");
window.onscroll = function () {
  if (window.scrollY > 0) {
    nav.classList.add("box");
  } else {
    nav.classList.remove("box");
  }
};

let htmlText = document.querySelector(".inner");
let cssText = document.querySelector(".css");
let jsText = document.querySelector(".js");
let reactText = document.querySelector(".react");

function skillCount() {
  let counter = 0;
  setInterval(() => {
    if (counter === 70) {
      clearInterval();
    } else {
      counter++;
      htmlText.innerHTML = counter + "%";
      cssText.innerHTML = counter + "%";
    }
  }, 19);

  let jsCount = 0;
  setInterval(() => {
    if (jsCount === 60) {
      clearInterval();
    } else {
      jsCount++;

      jsText.innerHTML = jsCount + "%";
    }
  }, 80);

  let reactCount = 0;
  setInterval(() => {
    if (reactCount === 20) {
      clearInterval();
    } else {
      reactCount++;

      reactText.innerHTML = reactCount + "%";
    }
  }, 300);
}
skillCount();

function scrollOption() {
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  // header container
  ScrollReveal().reveal(".left-text h1 ", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".header__content .left-text p", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".left-text .header__btn", {
    ...scrollRevealOption,
    delay: 1000,
  });

  // about container
  ScrollReveal().reveal(".about-content .right-text", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".about-content .section__description", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".about-content .about__btn", {
    ...scrollRevealOption,
    delay: 1000,
  });

  // service container
  ScrollReveal().reveal(".service-box", {
    ...scrollRevealOption,
    interval: 500,
  });

  // portfolio container
  ScrollReveal().reveal(".project-box", {
    duration: 1000,
    interval: 500,
  });
  ScrollReveal().reveal(".social-icon social-icon i", {
    duration: 1000,
    interval: 500,
  });

  
  }

  scrollOption();
  if (window.innerWidth > 768) {
    gsap.to(".ul-list li", {
      y: 0,
      duration: 1,
      stagger: 1,
    });
  gsap.from(".skill-container .scrolll", {
    scale: 0,
    duration: 1,
    stagger: 1,
    ScrollTrigger: {
      trigger: ".skill-container",
      markers: true,
      scroller: "body",
      start: "top 80%",
      stop: "top 100%",
      scrub: 2,
      pin: true,
    },
  });

  gsap.from(".middle-img img", {
    scale: 0,
    duration: 1,
    stagger: 1,
  });
  gsap.from(".img-box", {
    scale: 0,
    duration: 1,
    stagger: 2,
  });
}


let menuBtn = document.querySelector(".menuBtn");
let ulList = document.querySelector(".ul-list");

menuBtn.addEventListener("click", () => {
  ulList.classList.toggle("visibility");
});
