const filterButtons = document.querySelectorAll("[data-filter]");
const skillCards = document.querySelectorAll("[data-category]");

/* Good job creating a succinct way of filtering which cards are visible.
   I did not know about the hidden attribute of all HTML elements. */
function filterSkills(selectedCategory) {
  skillCards.forEach((card) => {
    const shouldShow =
      selectedCategory === "all" || card.dataset.category === selectedCategory;
    card.hidden = !shouldShow;
  });
}

/* Good job not only updating the visual styling when a button
   is clicked, but also the aria attribute for accessibility. */
function updateActiveButton(selectedButton) {
  filterButtons.forEach((button) => {
    const isSelected = button === selectedButton;
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterSkills(button.dataset.filter);
    updateActiveButton(button);
  });
});
