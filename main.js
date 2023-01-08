let slideIndex = 0;
let slidesList = document.querySelectorAll(".image-slider");

displayslider(slideIndex);
let dotDisplay = document.querySelectorAll(".dots");

for (let i = 0; i < dotDisplay.length; i++) {
  dotDisplay[i].addEventListener("click", () => jumpSlider(i));
}

const jumpSlider = (index) => {
  slideIndex = index;
  displayslider(slideIndex);
};

function displayslider(val) {
  let dots = document.querySelectorAll(".dots");
  if (val > slideIndex.length) {
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
    dots[i].className = dots[i].className.replace("active", "");
  }

  // display active when index matches
  dots[slideIndex].className = dots[slideIndex].className.replace(
    "",
    " active "
  );
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
    slideIndex += 1;
    displayslider(slideIndex);
  }
});
