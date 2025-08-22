document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("h1, p");
  
    const fadeInOnScroll = () => {
      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (position < windowHeight - 100) {
          element.style.opacity = 1;
          element.style.transition = "opacity 1s ease-out";
        }
      });
    };
  
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // to apply on initial load
  });
  