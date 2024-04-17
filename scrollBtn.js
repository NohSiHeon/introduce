export function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

const scrollBtn = document.getElementById("scrollBtn");

scrollBtn.addEventListener("click", scrollTop);