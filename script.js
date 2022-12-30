const message = "Thank you for submitting";

document.getElementById("contactForm");
document.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});
