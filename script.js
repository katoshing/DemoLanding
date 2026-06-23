const moneyFormatter = new Intl.NumberFormat("ru-RU");

function formatPrice(value) {
  return `${moneyFormatter.format(Number(value))} рублей`;
}

document.querySelectorAll(".price-button").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".service-card");
    const result = card.querySelector(".price-result");

    result.textContent = formatPrice(button.dataset.price);
  });
});

const sessionSelect = document.querySelector("#session-count");
const supportCard = document.querySelector('[data-service="support"]');

sessionSelect.addEventListener("change", () => {
  const result = supportCard.querySelector(".price-result");

  result.textContent = sessionSelect.value
    ? formatPrice(sessionSelect.value)
    : "";
});
