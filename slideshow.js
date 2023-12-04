document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const dotsContainer = document.querySelector(".dots");
  const images = Array.from(document.querySelectorAll(".slider img"));
  const totalImages = images.length;
  let currentIndex = 0;
  let timer;

  function createDots() {
    for (let i = 0; i < totalImages; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.addEventListener("click", () => {
        showImage(i);
        currentIndex = i;
      });
      dotsContainer.appendChild(dot);
    }
    dotsContainer.children[currentIndex].classList.add("active");
  }

  function showImage(index) {
    images.forEach((image) => {
      image.classList.remove("active");
    });
    dotsContainer.children[currentIndex].classList.remove("active");

    images[index].classList.add("active");
    dotsContainer.children[index].classList.add("active");
  }

  function nextImage() {
    currentIndex++;
    if (currentIndex >= totalImages) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalImages - 1;
    }
    showImage(currentIndex);
  }

  function startAutoPlay() {
    timer = setInterval(nextImage, 2000);
  }

  function stopAutoPlay() {
    clearInterval(timer);
  }

  prevBtn.addEventListener("click", prevImage);
  nextBtn.addEventListener("click", nextImage);

  slider.addEventListener("mouseover", stopAutoPlay);
  slider.addEventListener("mouseout", startAutoPlay);

  createDots();
  showImage(currentIndex);
  startAutoPlay();
});
