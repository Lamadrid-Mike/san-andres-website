const tours = Array.from(
  document.querySelector(".first__section-tours").children
);
const headerBtn = document.querySelector(".header__btn");

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

//scroll down effect
headerBtn.addEventListener("click", function () {
  const displayHeight = window.innerHeight;

  window.scroll({
    top: window.scrollY + displayHeight / 2,
    behavior: "smooth",
  });
});
