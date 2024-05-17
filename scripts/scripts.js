const tours = Array.from(
  document.querySelector(".first__section-tours").children
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    const intersecting = element.isIntersecting;
    if (intersecting) {
      console.log(element.target);
      element.target.style.animation = "right-fade-effect forwards 1.5s";
    }
  });
});

tours.forEach((el) => {
  observer.observe(el);
});
