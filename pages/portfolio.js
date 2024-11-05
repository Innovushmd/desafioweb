document.addEventListener("DOMContentLoaded", () => {
    fetchPortfolio();
});

function fetchPortfolio() {
    document.getElementById("portfolio-content").innerText = "Contenido del portafolio.";
}
