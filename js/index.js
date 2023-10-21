// Nav active
window.onload = function () {
  const navList = document.querySelector("#nav");
  const canvasEle = document.querySelector("#offcanvasNavbar");
  navList.addEventListener("click", () =>
    setTimeout(function () {
      const hash = window.location.hash.substr(1);
      if (hash) {
        navList.querySelector(".active").classList.remove("active");
        navList.querySelector(`#nav-${hash}`).classList.add("active");
      }
    })
  );
  const bsOffcanvas = new bootstrap.Offcanvas(canvasEle);
  canvasEle.addEventListener('click', (evnt) => {
    setTimeout(() => {bsOffcanvas.hide()}, 700);
  })
};

// Scroll active
const navLi = document.querySelectorAll("#nav li");
const contactLink = document.querySelector("#nav-contact");
const anchorEle = [];
let scrollCheck = true;

navLi.forEach((ele) => {
  anchorEle.push(document.querySelector(`#${ele.id.split("-")[1]}`));
})

anchorEle.pop();

console.log(anchorEle);
window.onscroll = () => {
  var current = "";

  anchorEle.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollCheck) {
    if (pageYOffset >= sectionTop - 90 || pageYOffset >= sectionTop) {
      current = `nav-${section.getAttribute("id")}`; }
    }
    else {
      current = "nav-contact";
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.id === current) {
      console.log(li);
      li.classList.add("active");
    }
  });
};

contactLink.addEventListener('click', () => {
  scrollCheck = false;
  contactLink.classList.add("active");
  setTimeout(() => {
    scrollCheck=true;
  }, 1000);
})


// Service
jQuery(document).ready(function ($) {
  var owl = $("#service-card");
  owl.owlCarousel({
    items: 3,
    loop: true,
    nav: true,
    dots: false,
    margin: 0,
    navContainer: ".slide-btn",
    navText: ["<h2 class='underlinePre'>Previous</h2>", "<h3 class='underlineNxt'>Next</h3>"],
    stagePadding: 0,
    responsive: {
      0: {
        items: 2,
        nav: true,
        loop: true,
      },
      480: {
        items: 2,
        nav: true,
        loop: true,
      },
      768: {
        items: 3,
        nav: true,
        loop: true,
      },
      992: {
        items: 4,
        nav: true,
        loop: true,
      },
    },
  });
});

// Gallery Card
jQuery(document).ready(function ($) {
  var owl = $("#gallery-card");
  owl.owlCarousel({
    items: 3,
    loop: true,
    nav: true,
    dots: false,
    margin: 20,
    navContainer: ".slide-arrow",
    navText: ["<h2 class='glyPre'>Previous</h2>", "<h3 class='glyNxt'>Next</h3>"],
    stagePadding: 0,
    responsive: {
      0: {
        items: 2,
        nav: true,
        loop: true,
      },
      600: {
        items: 2,
        nav: true,
        loop: true,
      },
    },
  });
});

