"use strict";

/*
 * CONFIGURACIÓN RÁPIDA
 * Reemplazá el valor de WHATSAPP_NUMBER por tu número completo,
 * incluyendo código de país y área, sin +, espacios ni guiones.
 * Ejemplo argentino: 54911XXXXXXXX.
 */
const WHATSAPP_NUMBER = "549XXXXXXXXXX";
const DEFAULT_MESSAGE = "Hola Ayelén, quiero consultar por los servicios de ayedigitalmkt.";

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  const selectedPlan = link.dataset.plan;
  const message = selectedPlan
    ? `Hola Ayelén, quiero consultar por el Plan ${selectedPlan} de ayedigitalmkt.`
    : DEFAULT_MESSAGE;

  if (WHATSAPP_NUMBER.includes("X")) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.alert("Antes de publicar, reemplazá WHATSAPP_NUMBER en el archivo script.js por tu número.");
    });
    return;
  }

  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const currentYear = document.querySelector("#current-year");
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
