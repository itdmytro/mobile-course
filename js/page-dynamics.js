// Accordion

document.querySelectorAll(".accordion__header").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector(".accordion__icon");
    const isOpen = header.classList.contains("active");

    document.querySelectorAll(".accordion__content").forEach((el) => {
      el.style.maxHeight = null;
      el.classList.remove("open");
      el.previousElementSibling.classList.remove("active");
    });

    if (isOpen) {
      header.classList.remove("active");
      content.classList.remove("open");
      content.style.maxHeight = null;
      return;
    }

    header.classList.add("active");
    content.classList.add("open");
    content.style.maxHeight = content.scrollHeight + "px";
  });
});

// Show button
document.addEventListener("scroll", () => {
  const button = document.querySelector(".button--fixed");
  const scrollY = window.scrollY;
  const screenHeight = window.innerHeight;

  if (scrollY > screenHeight) {
    button.classList.add("visible");
  } else {
    button.classList.remove("visible");
  }
});
