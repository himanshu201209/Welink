const scrollContainer = document.querySelector("[custom-scroll]");
const customScrollbar = document.querySelector("[custom-bar]");
const customThumb = document.querySelector("[custom-thumb]");

function updateThumbSize() {
  const visibleRatio = scrollContainer.clientWidth / scrollContainer.scrollWidth;
  customThumb.style.width = `${customScrollbar.clientWidth * visibleRatio}px`;
}

function updateThumbPosition() {
  const scrollRatio = scrollContainer.scrollLeft / (scrollContainer.scrollWidth - scrollContainer.clientWidth);
  const maxThumbLeft = customScrollbar.clientWidth - customThumb.offsetWidth;
  customThumb.style.left = `${scrollRatio * maxThumbLeft}px`;
}

scrollContainer.addEventListener("scroll", updateThumbPosition);
window.addEventListener("resize", () => {
  updateThumbSize();
  updateThumbPosition();
});

// Drag logic
let isDragging = false;
let startX;
let startLeft;

customThumb.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
  startLeft = parseFloat(customThumb.style.left) || 0;
  document.body.style.userSelect = "none";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const dx = e.clientX - startX;
  const maxLeft = customScrollbar.clientWidth - customThumb.offsetWidth;
  let newLeft = Math.min(Math.max(startLeft + dx, 0), maxLeft);

  customThumb.style.left = `${newLeft}px`;

  // Convert thumb position back to scroll position
  const scrollRatio = newLeft / maxLeft;
  scrollContainer.scrollLeft = scrollRatio * (scrollContainer.scrollWidth - scrollContainer.clientWidth);
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  document.body.style.userSelect = "auto";
});

// Init
updateThumbSize();
updateThumbPosition();
