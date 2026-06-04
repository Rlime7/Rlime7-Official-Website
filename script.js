document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("themeToggle");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    if (!button) return;

    function supportsChar(char) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        ctx.font = "24px Arial, sans-serif";
        const fallbackWidth = ctx.measureText("\uFFFD").width;

        return Math.abs(ctx.measureText(char).width - fallbackWidth) > 1;
    }

    const DESKTOP_MOON = "\u23FE";
    const SAFE_MOON = "\u263E";
    const SUN_ICON = "\u2600";
    const MOON_ICON = supportsChar(DESKTOP_MOON) ? DESKTOP_MOON : SAFE_MOON;

    function updateIcon() {
        const isDark = document.body.classList.contains("dark");
        const icon = isDark ? SUN_ICON : MOON_ICON;
        button.innerHTML = `<span class="theme-icon">${icon}</span>`;
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
