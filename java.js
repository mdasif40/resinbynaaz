function toggleMenu() {
    document.querySelector('.menu').classList.toggle('show');
}

// code to scroll product card horizontally for infinite time

const slider = document.getElementById('slider-track');

// Duplicate the content once to make the loop
slider.innerHTML += slider.innerHTML;

let isScrolling = false;

slider.addEventListener('scroll', () => {
  if (isScrolling) return;
  const scrollLeft = slider.scrollLeft;
  const scrollWidth = slider.scrollWidth / 2; // because we duplicated

  if (scrollLeft >= scrollWidth) {
    // Instantly jump back to the start of original content
    isScrolling = true;
    slider.scrollLeft = 0;
    isScrolling = false;
  }
});

