document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langue");

  const loadLanguage = async (lang) => {
    const response = await fetch(`${lang}.json`);
    const translations = await response.json();
    applyTranslations(translations);
  };

  const applyTranslations = (translations) => {
    document.querySelectorAll("[data-lang]").forEach((element) => {
      const key = element.getAttribute("data-lang");
      if (translations[key]) {
        if (element.tagName.toLowerCase() === "title") {
          document.title = translations[key];
        } else {
          element.textContent = translations[key];
        }
      }
    });
  };

  langSelect.addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    loadLanguage(selectedLang);
  });

  // Load the default language
  loadLanguage("fr");
});

//#endregion j'ai rajouté ça wola

document.addEventListener("DOMContentLoaded", (event) => {
  const togglePassword = document.querySelector("#togglePassword");
  const password = document.querySelector("#password");

  togglePassword.addEventListener("click", function (e) {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the text of the button
    this.textContent = this.textContent === "Afficher" ? "Masquer" : "Afficher";
  });

  const toggleConfirmPassword = document.querySelector("#toggleConfirmPassword");
  const confirmPassword = document.querySelector("#confirmPassword");

  toggleConfirmPassword.addEventListener("click", function (e) {
    // toggle the type attribute
    const type = confirmPassword.getAttribute("type") === "password" ? "text" : "password";
    confirmPassword.setAttribute("type", type);

    // toggle the text of the button
    this.textContent = this.textContent === "Afficher" ? "Masquer" : "Afficher";
  });
});
