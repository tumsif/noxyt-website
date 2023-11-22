"use strict";

window.addEventListener("scroll", function () {
  if (window.scrollY > 45) {
    document.querySelector(".navbar").classList.add("sticky-top", "shadow-sm");
  } else {
    document
      .querySelector(".navbar")
      .classList.remove("sticky-top", "shadow-sm");
  }
});
//dropdown javascript for making dropdown items
const dropdown = document.querySelector(".dropdown");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");
const showClass = "show";

function handleDropdown() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    dropdown.addEventListener("mouseenter", function () {
      dropdown.classList.add(showClass);
      dropdownToggle.setAttribute("aria-expanded", "true");
      dropdownMenu.classList.add(showClass);
    });

    dropdown.addEventListener("mouseleave", function () {
      dropdown.classList.remove(showClass);
      dropdownToggle.setAttribute("aria-expanded", "false");
      dropdownMenu.classList.remove(showClass);
    });
  } else {
    dropdown.removeEventListener("mouseenter", handleDropdown);
    dropdown.removeEventListener("mouseleave", handleDropdown);
  }
}

window.addEventListener("load", handleDropdown);
window.addEventListener("resize", handleDropdown);
//progess bars
document.querySelectorAll(".skill").forEach(
  function (element) {
    element.querySelectorAll(".progress .progress-bar").forEach(function (bar) {
      bar.style.width = bar.getAttribute("aria-valuenow") + "%";
    });
  },
  {
    offset: "80%",
  }
);
// property for scrolling to the top
//this property is for showing the button for scrolling to the top
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    document.querySelector(".back-to-top").style.display = "block";
  } else {
    document.querySelector(".back-to-top").style.display = "none";
  }
});
//this property is for smooth scrolling to the top
document.querySelector(".back-to-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
//this is for counterup of data
const counterUp = window.counterUp.default;

const callback = (entries) => {
  entries.forEach((entry) => {
    const el = entry.target;
    if (entry.isIntersecting && !el.classList.contains("is-visible")) {
      counterUp(el, {
        duration: 1000,
        delay: 10,
      });
      el.classList.add("is-visible");
    }
  });
};
//now for each element the funtion is run
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  const IO = new IntersectionObserver(callback, { threshold: 1 });
  IO.observe(counter);
});
