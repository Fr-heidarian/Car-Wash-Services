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

// ANIMATION

// window.addEventListener("scroll", () => {
//   const titleElements = document.querySelectorAll(".section-title h1");
//   const colElements = document.querySelectorAll("img");

//   titleElements.forEach((element) => {
//     const position = element.getBoundingClientRect();

//     // Check if the element is in the viewport
//     if (position.top < window.innerHeight && position.bottom >= 0) {
//       element.classList.add("animate");
//     } else {
//       element.classList.remove("animate");
//     }
//   });

//   colElements.forEach((element) => {
//     const position = element.getBoundingClientRect();

//     // Check if the element is in the viewport
//     if (position.top < window.innerHeight && position.bottom >= 0) {
//       element.classList.add("active");
//     } else {
//       element.classList.remove("active");
//     }
//   });
// });

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
