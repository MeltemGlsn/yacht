// Contact form: show a thank-you message instead of reloading the page
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("form-success");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    successMessage.hidden = false;
    form.reset();
});
