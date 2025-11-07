// Custom input

const input = document.getElementById("phone");

Inputmask({
  mask: "+380 (99) 999-99-99",
  showMaskOnHover: false,
  showMaskOnFocus: true,
  clearIncomplete: true,
}).mask(input);

//Send form

(function () {
  emailjs.init("jr8THs6HWl0ig_ODQ");
})();

document.getElementById("formSend").addEventListener("click", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const form = document.querySelector("form");
  const popup = document.querySelector(".popup");

  function showMessage(text, type, callback) {
    popup.innerHTML = text;
    popup.classList.add("active", type);

    setTimeout(() => {
      popup.classList.remove("active", type);
      popup.innerHTML = "";
      if (callback) callback(); // вызываем колбэк после анимации
    }, 2000); // длительность анимации
  }

  if (!email || !phone) {
    showMessage("Будь ласка, заповніть всі поля", "error");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showMessage("Будь ласка, введіть коректний email", "error");
    return;
  }

  const params = {
    email: email,
    phone: phone,
    to_email: "spilkasd@gmail.com",
  };

  emailjs
    .send("service_9z809d1", "template_8tjxx76", params)
    .then(() => {
      showMessage("Дякуємо за заявку!", "success", () => {
        document.querySelector(".modal")?.classList.remove("modal-open");
        form.reset();

        // редирект только после анимации
        window.location.href =
          "https://secure.wayforpay.com/page?vkh=690cd939-b63c-4946-8bc9-067d22d1dba8";
      });
    })
    .catch(() => {
      showMessage(
        "Не вдалося відправити, будь ласка, спробуйте пізніше",
        "error"
      );
    });
});
