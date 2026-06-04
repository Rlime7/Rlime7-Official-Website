document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("themeToggle");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    if (!button) return;

    // Detect if the character renders properly
    function supportsChar(char) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        ctx.font = "16px Arial";
        ctx.fillText(char, 0, 16);

        const data = ctx.getImageData(0, 0, 20, 20).data;
        return data.some(v => v !== 0);
    }

    const DESKTOP_MOON = "⏾";
    const SAFE_MOON = "☾";

    // If ⏾ doesn't render, fallback automatically
    const MOON_ICON = supportsChar(DESKTOP_MOON) ? DESKTOP_MOON : SAFE_MOON;

    function updateIcon() {
        const isDark = document.body.classList.contains("dark");
        button.textContent = isDark ? "☀︎" : MOON_ICON;
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

window.addEventListener("load", () => {
    const loader = document.getElementById("loadingScreen");
    if (!loader) return;

    loader.classList.add("hide");

    setTimeout(() => {
        loader.remove();
    }, 500);
});