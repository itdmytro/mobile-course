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

// Modal window

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  const openButtons = document.querySelectorAll(".modal-open");
  const closeButton = modal.querySelector(".modal-close");
  const underlay = modal.querySelector(".modal__underlay");

  function openModal() {
    modal.classList.add("opened");
  }

  function closeModal() {
    modal.classList.remove("opened");
    document.body.style.overflow = "";
  }

  openButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeButton.addEventListener("click", closeModal);

  underlay.addEventListener("click", (e) => {
    if (e.target === underlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("opened")) {
      closeModal();
    }
  });
});
