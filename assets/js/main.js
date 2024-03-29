// TESTIMONIALS
$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [768, 1],
    pagination: true,
    transitionStyle: "backSlide",
    autoPlay: true,
  });
});
// SCROLL ANIMATION
window.addEventListener("scroll", () => {
  const [titleElements, colElements] = [
    [...document.querySelectorAll(".section-title h1")],
    [...document.querySelectorAll(".col")],
  ];

  const applyAnimation = (elements, className, condition) => {
    elements.forEach((element) => {
      const position = element.getBoundingClientRect();
      element.classList.toggle(className, condition(position));
    });
  };

  applyAnimation(
    titleElements,
    "animate",
    (position) => position.top < window.innerHeight && position.bottom >= 0
  );

  applyAnimation(
    colElements,
    "active",
    (position) => position.top < window.innerHeight && position.bottom >= 0
  );
});
// button animation
document.querySelectorAll(".roll-text").forEach((button) => {
  button.innerHTML =
    "<div><span>" +
    button.textContent.trim().split("").join("</span><span>") +
    "</span></div>";
});
