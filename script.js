document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("themeToggle");

    // aplica tema global
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    // dacă butonul NU există, oprește aici
    if (!button) return;

    function updateIcon() {
        button.textContent =
            document.body.classList.contains("dark") ? "☀︎" : "⏾";
    }

    updateIcon();

    button.onclick = function () {
        document.body.classList.toggle("dark");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark") ? "dark" : "light"
        );

        updateIcon();
    };

});