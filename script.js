let index = 0;
let carouselContainer = document.getElementById('carousel-container');
let carousel = document.getElementById('carousel');
let carouselImage = document.getElementById('cur-image');

let images = ['login.jpeg','main.jpeg','profile.JPG'];


function showCarousel(){
  carouselContainer.style.display = 'flex';
  disableScroll();
  carouselImage.src = images[index];
}

function closeCarousel(){
  carouselContainer.style.display = 'none';
  enableScroll();
}

function nextImage(){
  index = (index + 1) % images.length;

  carouselImage.src = images[index];
}

function prevImage(){
  index = index - 1;
  if (index < 0){
    index = images.length - 1;
  }
  carouselImage.src = images[index];
}

//Functions to enable and disable scroll
function disableScroll() {
  document.body.style.overflow = 'hidden';
  window.addEventListener('scroll', preventScroll, { passive: false });
}

function enableScroll() {
  document.body.style.overflow = 'auto';
  window.removeEventListener('scroll', preventScroll, { passive: false });
}

function preventScroll(e) {
  e.preventDefault();
}

let tooltip = document.getElementById('tooltip');
let span = document.getElementById('warning');

function showTooltip(conf){
  tooltip.style.display = conf;
  tooltip.style.left = span.offsetLeft + 30 + "px";
  tooltip.style.top = span.offsetTop - 15 + "px";
}
  