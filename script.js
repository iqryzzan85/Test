const buttons = document.querySelectorAll(".service-card button");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    alert("Скоро мы с вами свяжемся!");
  });
});

const form = document.querySelector("#contact-form");
const message = document.querySelector("#form-message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const phone = document.querySelector("#phone").value.trim();

  if (name === "" || phone === "") {
    message.textContent = "Заполните все поля.";
    return;
  }

  message.textContent =
    "Спасибо, " + name + "! Мы скоро свяжемся с вами.";

  form.reset();
});