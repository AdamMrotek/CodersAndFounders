const prevArrow = document.querySelector(".arrow-left");
const nextArrow = document.querySelector(".arrow-right");
const carusel = document.querySelector(".carusel-images");
const navbar = document.querySelector(".carusel-nav");

//creates arrays so we can use findIndex methods
const caruselImages = Array.from(carusel.children);
const navbarDots = Array.from(navbar.children);

// Rendering functions
const moveSlides = (carusel, currentSlide, tragetSlide, indexOfTargetImage) => {
  // move carusel to the slide 100% * indexOfSlide
  carusel.style.transform = `translateX(-${indexOfTargetImage * 100}%)`;
  // reset new current slide
  currentSlide.classList.remove("current-slide");
  tragetSlide.classList.add("current-slide");
};
const setCurrentDot = (currentSlideIndex) => {
  navbarDots.forEach((dot, i) => {
    if (currentSlideIndex === i) {
      dot.classList.add("current-dot");
      return;
    }
    dot.classList.remove("current-dot");
  });
};
const arrowShowHide = (currentSlideIndex) => {
  console.log(currentSlideIndex);
  if (currentSlideIndex === 0) {
    prevArrow.classList.add("is-hidden");
    nextArrow.classList.remove("is-hidden");
  } else if (currentSlideIndex === caruselImages.length - 1) {
    prevArrow.classList.remove("is-hidden");
    nextArrow.classList.add("is-hidden");
  } else {
    prevArrow.classList.remove("is-hidden");
    nextArrow.classList.remove("is-hidden");
  }
};

const settingInitialState = () => {
  arrowShowHide(0);
  setCurrentDot(0);
};
settingInitialState();

// EVENT LISTENERS
/////////////////////////
navbar.addEventListener("click", (e) => {
  const dotCliked = e.target.closest("li");
  if (dotCliked) {
    const currentSlide = carusel.querySelector(".current-slide");
    // we search of index of cliked dot
    const indexOfTargetDot = navbarDots.findIndex(
      (slide) => slide === dotCliked
    );
    const targetSlide = caruselImages[indexOfTargetDot];
    moveSlides(carusel, currentSlide, targetSlide, indexOfTargetDot);
    arrowShowHide(indexOfTargetDot);
    setCurrentDot(indexOfTargetDot);
  }
});

nextArrow.addEventListener("click", (e) => {
  // chceking current situation and picking up current and prev/next slide
  const currentSlide = carusel.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  // finding an Index of next/prev slide Array.from was required for that step to work
  const indexOfTargetImage = caruselImages.findIndex(
    (slide) => slide === nextSlide
  );

  moveSlides(carusel, currentSlide, nextSlide, indexOfTargetImage);
  arrowShowHide(indexOfTargetImage);
  setCurrentDot(indexOfTargetImage);
});

prevArrow.addEventListener("click", (e) => {
  // chceking current situation and picking up current and prev/next slide
  const currentSlide = carusel.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;

  // finding an Index of next/prev slide Array.from was required for that step to work
  const indexOfTargetImage = caruselImages.findIndex(
    (slide) => slide === prevSlide
  );

  moveSlides(carusel, currentSlide, prevSlide, indexOfTargetImage);
  arrowShowHide(indexOfTargetImage);
  setCurrentDot(indexOfTargetImage);
});
