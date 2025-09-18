const ctaWrapper = document.querySelectorAll(".global-banner");
let animationFrame;
let currentAngle = 145; // Initial angle, should match your CSS
let running = false;

function setGradient(angle) {
  ctaWrapper.forEach((wrapper) => {
    wrapper.style.backgroundImage = `linear-gradient(${angle}deg, #2f6dcd, #ff8d6d)`;
  });
}

function animateCta() {
  if (!running) return;
  currentAngle = (currentAngle + 0.6) % 360;
  setGradient(currentAngle);
  animationFrame = requestAnimationFrame(animateCta);
}

// Start animation 5 seconds after page load
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    running = true;
    animateCta();
  }, 5000); // 5000 ms = 5 seconds
});
