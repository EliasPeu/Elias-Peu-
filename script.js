// Animação de digitação no título
const text = "Olá! Eu sou Elias Peu";
let index = 0;
const typing = document.getElementById("typing-text");

function typeEffect() {
    if (index < text.length) {
        typing.innerHTML = text.substring(0, index + 1);
        index++;
        setTimeout(typeEffect, 80);
    }
}
typeEffect();

// Função para dar destaque aos serviços
document.querySelectorAll("#servicos div").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.border = "2px solid #05f09e";
    });
    card.addEventListener("mouseleave", () => {
        card.style.border = "none";
    });
});

// Botão "Voltar ao topo"
const backToTop = document.createElement("button");
backToTop.innerText = "⬆ Topo";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "5px";
backToTop.style.background = "#05f09e";
backToTop.style.color = "#111";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.fontWeight = "bold";

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});