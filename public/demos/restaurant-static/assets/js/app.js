const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const bookingForm = document.querySelector("#bookingForm");
const successMessage = document.querySelector("#successMessage");

const today = new Date();
const dateInput = document.querySelector("#date");

if (dateInput) {
  const isoDate = today.toISOString().split("T")[0];
  dateInput.setAttribute("min", isoDate);
}

function updateHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeMenu() {
  navToggle.setAttribute("aria-expanded", "false");
  navMenu.classList.remove("is-open");
}

function openMenu() {
  navToggle.setAttribute("aria-expanded", "true");
  navMenu.classList.add("is-open");
}

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", updateHeaderState);
updateHeaderState();

function setError(field, message) {
  const wrapper = field.closest(".form-row");
  const error = wrapper.querySelector(".error-message");

  field.setAttribute("aria-invalid", "true");
  error.textContent = message;
}

function clearError(field) {
  const wrapper = field.closest(".form-row");
  const error = wrapper.querySelector(".error-message");

  field.removeAttribute("aria-invalid");
  error.textContent = "";
}

function validateField(field) {
  const value = field.value.trim();

  if (field.required && !value) {
    setError(field, "Ce champ est obligatoire.");
    return false;
  }

  if (field.type === "tel" && value.length < 10) {
    setError(field, "Indiquez un numéro de téléphone valide.");
    return false;
  }

  if (field.type === "date") {
    const selectedDate = new Date(value);
    selectedDate.setHours(23, 59, 59, 999);

    if (selectedDate < new Date()) {
      setError(field, "Choisissez une date à venir.");
      return false;
    }
  }

  clearError(field);
  return true;
}

function getFormData(form) {
  return Object.fromEntries(new FormData(form).entries());
}

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fields = bookingForm.querySelectorAll("input[required], select[required]");
  const isValid = [...fields].every(validateField);

  if (!isValid) {
    successMessage.classList.remove("is-visible");
    return;
  }

  const data = getFormData(bookingForm);

  successMessage.textContent = `Merci ${data.name}. Votre demande de réservation a bien été préparée.`;
  successMessage.classList.add("is-visible");

  bookingForm.reset();

  if (dateInput) {
    const isoDate = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", isoDate);
  }
});

bookingForm.querySelectorAll("input, select").forEach((field) => {
  field.addEventListener("blur", () => validateField(field));
  field.addEventListener("input", () => clearError(field));
});
