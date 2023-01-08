let slideIndex = 0;
let slidesList = document.querySelectorAll(".image-slider");
let conatinerdots = document.querySelector("#conatiner-dots");
let TIME_SET = 4000;
displayslider(slideIndex);
let dotDisplay = document.querySelectorAll(".dots");

// dots indexs
conatinerdots.addEventListener("click", (event) => {
  if (event.target.className === "dots") {
    jumpSlider(Number(event.target.dataset.index));
  }
});

setInterval(() => {
  if (slideIndex === slidesList.length - 1) {
    slideIndex = 0;
    jumpSlider(slideIndex);
  } else {
    slideIndex = slideIndex + 1;
    jumpSlider(slideIndex);
  }
}, TIME_SET);

const jumpSlider = (index) => {
  slideIndex = index;
  displayslider(slideIndex);
};

function displayslider(val) {
  let dots = document.querySelectorAll(".dots");

  if (val < slideIndex.length) {
    slideIndex = 0;
  }
  // display all to none
  for (let i = 0; i < slidesList.length; i++) {
    slidesList[i].style.display = "none";
  }
  // if current index matches then display the slider
  slidesList[slideIndex].style.display = "block";

  // display active to none
  for (let i = 0; i < dots.length; i++) {
    dots[i].setAttribute("data-index", i);
    dots[i].classList.remove("active");
  }
  dots[slideIndex].classList.add("active");
}

// prev
let prev = document.getElementById("prev");
// next
let next = document.getElementById("next");

// move previous
prev.addEventListener("click", () => {
  if (slideIndex) {
    slideIndex -= 1;
    displayslider(slideIndex);
  }
});

// move next
next.addEventListener("click", () => {
  if (slideIndex < slidesList.length - 1) {
    slideIndex = slideIndex + 1;
    displayslider(slideIndex);
  }
});
