const menu = document.querySelector(".menu-toggle"),
  menuOpen = document.querySelector(".menu-control"),
  menuClose = document.querySelector(".nav-control ion-icon");

menuOpen.onclick = () => {
  menu.classList.add("active");
  document.body.style.overflow = "hidden";
};

menuClose.onclick = () => {
  menu.classList.remove("active");

  document.body.style.overflow = "inherit";
};

control.onclick = () => {
  document.querySelector(".soc-list").classList.toggle("active");
};

// Start Slider Feature
const sections = document.querySelectorAll("body > section");
sections.forEach(function (section) {
  if (section.classList.contains("featured")) {
    const slideFeat = document.querySelector(".featured .slide-container"),
      itemsFeat = slideFeat.children;
    const sizeFeat = itemsFeat[0].clientWidth,
      prevFeat = document.querySelector("#prev-feat"),
      nextFeat = document.querySelector("#next-feat");

    let gap = slideFeat.clientWidth * 0.03,
      currentFeat = 0;

    checkerFeat();

    prevFeat.onclick = () => {
      if (prevFeat.classList.contains("disabled")) {
        return 0;
      } else {
        currentFeat--;

        slideFeat.style.transform = `translateX(${
          (-sizeFeat - gap) * currentFeat
        }px)`;
      }
      checkerFeat();
    };
    nextFeat.onclick = () => {
      if (nextFeat.classList.contains("disabled")) {
        return 0;
      } else {
        currentFeat++;

        slideFeat.style.transform = `translateX(${
          (-sizeFeat - gap) * currentFeat
        }px)`;

        checkerFeat();

        console.log(currentFeat);
      }
    };

    function checkerFeat() {
      if (itemsFeat[currentFeat] == slideFeat.firstElementChild) {
        prevFeat.classList.add("disabled");
      } else {
        prevFeat.classList.remove("disabled");
      }

      if (slideFeat.clientWidth >= 940) {
        if (itemsFeat[currentFeat + 3] == slideFeat.lastElementChild) {
          nextFeat.classList.add("disabled");
        } else {
          nextFeat.classList.remove("disabled");
        }
      } else if (slideFeat.clientWidth >= 510) {
        if (itemsFeat[currentFeat + 1] == slideFeat.lastElementChild) {
          nextFeat.classList.add("disabled");
        } else {
          nextFeat.classList.remove("disabled");
        }
      } else {
        if (itemsFeat[currentFeat] == slideFeat.lastElementChild) {
          nextFeat.classList.add("disabled");
        } else {
          nextFeat.classList.remove("disabled");
        }
      }
    }
  } else {
    return 0;
  }
});

// End Slider Feature

// Start Slider Testimonials

const slideContainer = document.querySelector(".testimonials .slide-container");

const slide = document.querySelectorAll(".testimonials .slide");

const prevBtn = document.querySelector(".testimonials #prevbtn");

const nextBtn = document.querySelector(".testimonials #nextbtn");

let currentSlide = 0;

const size = slide[0].clientWidth;

const bulletContainer = document.querySelector(
  ".testimonials .bullet-container"
);

for (let i = 0; i < slide.length; i++) {
  const createBull = document.createElement("li");

  createBull.setAttribute("data-index", i);

  bulletContainer.appendChild(createBull);
}

const bullets = document.querySelectorAll(".testimonials .bullet-container li");

checkerBtn();

bullets.forEach((bullet) => {
  bullet.onclick = function () {
    currentSlide = parseInt(this.dataset.index);

    this.classList.add("active");

    slideContainer.style.transition = "transform 0.7s ease";

    slideContainer.style.transform = `translateX(${
      -size * currentSlide - 1
    }px)`;
    checkerBtn();
  };
});

prevBtn.onclick = () => {
  if (prevBtn.classList.contains("disabled")) {
    return 0;
  } else {
    currentSlide--;
    checkerBtn();

    slideContainer.style.transition = "transform 0.7s ease";

    slideContainer.style.transform = `translateX(${-size * currentSlide}px)`;
  }
  bullets[currentSlide].classList.add("active");
};
nextBtn.onclick = () => {
  if (nextBtn.classList.contains("disabled")) {
    return 0;
  } else {
    currentSlide++;
    slideContainer.style.transform = `translateX(${
      -size * currentSlide - 1
    }px)`;

    slideContainer.style.transition = "transform 0.7s ease";
    checkerBtn();
    bullets[currentSlide].classList.add("active");
  }
};

function checkerBtn() {
  bullets.forEach((bul) => {
    bul.classList.remove("active");
  });
  bullets[currentSlide].classList.add("active");
  if (slide[currentSlide] == slideContainer.lastElementChild) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
  if (slide[currentSlide] == slideContainer.firstElementChild) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
}

// End Slider Testimonials
