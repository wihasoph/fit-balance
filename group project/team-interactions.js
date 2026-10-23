const welcomeName = document.getElementById("welcome-name");
const welcomeButton = document.querySelector("#welcome-button");
const welcomeMessage = document.getElementById("welcome-message");

if (welcomeName && welcomeButton && welcomeMessage) {
  welcomeButton.addEventListener("click", () => {
    const name = welcomeName.value.trim();
    welcomeMessage.textContent = name
      ? `Welcome to FitBalance, ${name}!`
      : "Please enter your name first.";
  });
}

const themeButton = document.querySelector("#theme-toggle");

if (themeButton) {
  themeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    themeButton.textContent = isDark ? "Switch to light theme" : "Switch to dark theme";
  });
}

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = document.getElementById(button.getAttribute("aria-controls"));
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    answer.hidden = isExpanded;
    button.setAttribute("aria-expanded", String(!isExpanded));
  });
});

const programSearch = document.querySelector("#program-search-input");

if (programSearch) {
  const programCards = document.querySelectorAll(".catalog__grid .card");
  const resultCount = document.querySelector("#program-search-count");
  const noResults = document.querySelector("#program-search-empty");

  const filterPrograms = () => {
    const query = programSearch.value.trim().toLowerCase();
    let visibleCount = 0;

    programCards.forEach((card) => {
      const title = card.querySelector("h2").textContent.toLowerCase();
      const matches = title.includes(query);
      card.hidden = !matches;

      if (matches) {
        visibleCount += 1;
      }
    });

    resultCount.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? "program" : "programs"}`;
    noResults.hidden = visibleCount !== 0;
  };

  programSearch.addEventListener("input", filterPrograms);
}

const favoriteForm = document.querySelector("#favorite-form");

if (favoriteForm) {
  const favoriteInput = document.querySelector("#favorite-input");
  const favoriteList = document.querySelector("#favorite-list");
  const favoriteCount = document.querySelector("#favorite-count");
  const favoriteMessage = document.querySelector("#favorite-message");

  const updateFavoriteCount = () => {
    const count = favoriteList.querySelectorAll("li").length;
    favoriteCount.textContent = `Favorites: ${count}`;
  };

  favoriteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const activity = favoriteInput.value.trim();

    if (!activity) {
      favoriteMessage.textContent = "Enter an activity before adding it.";
      favoriteInput.focus();
      return;
    }

    const item = document.createElement("li");
    const activityName = document.createElement("span");
    const removeButton = document.createElement("button");

    activityName.textContent = activity;
    removeButton.type = "button";
    removeButton.className = "favorite-remove";
    removeButton.textContent = "Remove";
    removeButton.setAttribute("aria-label", `Remove ${activity} from favorites`);
    removeButton.addEventListener("click", () => {
      item.remove();
      updateFavoriteCount();
    });

    item.append(activityName, removeButton);
    favoriteList.append(item);
    favoriteInput.value = "";
    favoriteMessage.textContent = "";
    updateFavoriteCount();
    favoriteInput.focus();
  });
}
