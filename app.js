// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

let toggle = document.querySelector(".nav-toggle");
let navCenter = document.querySelector(".nav-center");
let links = document.querySelector(".links");

toggle.addEventListener("click", () => {
  //  ========== 1. solution -> height: 0 by default, height: 10rem after ==========
  //  ** height is important **

  //   if (links.classList.contains("show-links")) {
  //     links.classList.remove("show-links");
  //   } else {
  //     links.classList.add("show-links");
  //   }
  //  ========== 2. solution -> active (display:none by default) ==========
  //   if (links.classList.contains("active")) {
  //     links.classList.remove("active");
  //   } else {
  //     links.classList.add("active");
  //   }
  // ========== 3. solution -> toggle()  ** height is important ** ==========
  links.classList.toggle("show-links");
});
