$(function () {
  const $welcomeName = $("#welcome-name");
  const $welcomeMessage = $("#welcome-message");

  $("#welcome-button").on("click", function () {
    const name = $welcomeName.val().trim();
    $welcomeMessage
      .text(name ? `Welcome to FitBalance, ${name}!` : "Please enter your name first.")
      .toggleClass("status-error", !name);
  });

  $("#theme-toggle").on("click", function () {
    const isDark = $("body").toggleClass("dark-theme").hasClass("dark-theme");
    $(this).text(isDark ? "Switch to light theme" : "Switch to dark theme");
  });

  $(".faq-question").on("click", function () {
    const $button = $(this);
    const $answer = $(`#${$button.attr("aria-controls")}`);
    const isExpanded = $button.attr("aria-expanded") === "true";

    $button.attr("aria-expanded", String(!isExpanded));
    $answer.stop(true, true);

    if (isExpanded) {
      $answer.slideUp(180, function () {
        $answer.attr("hidden", "hidden");
      });
    } else {
      $answer.removeAttr("hidden").hide().slideDown(180);
    }
  });

  const $search = $("#program-search-input");
  const $cards = $(".catalog__grid .card");
  const $resultCount = $("#program-search-count");
  const $noResults = $("#program-search-empty");
  let selectedCategory = "all";

  function filterPrograms() {
    const query = ($search.val() || "").trim().toLowerCase();
    let visibleCount = 0;

    $cards.each(function () {
      const $card = $(this);
      const title = $card.find("h2").text().toLowerCase();
      const categoryMatches = selectedCategory === "all" ||
        $card.attr("data-category") === selectedCategory;
      const matches = categoryMatches && title.includes(query);

      $card.prop("hidden", !matches);
      visibleCount += matches ? 1 : 0;
    });

    $resultCount.text(`Showing ${visibleCount} ${visibleCount === 1 ? "program" : "programs"}`);
    $noResults.prop("hidden", visibleCount > 0);
  }

  $search.on("input", filterPrograms);

  $(".category-filter").on("click", function () {
    const $selected = $(this);
    selectedCategory = $selected.attr("data-category");
    $(".category-filter")
      .removeClass("is-selected")
      .attr("aria-pressed", "false");
    $selected.addClass("is-selected").attr("aria-pressed", "true");
    filterPrograms();
  });

  const $favoriteForm = $("#favorite-form");
  const $favoriteList = $("#favorite-list");
  const $favoriteInput = $("#favorite-input");
  const $favoriteCount = $("#favorite-count");
  const $favoriteMessage = $("#favorite-message");
  const $favoriteEmpty = $("#favorite-empty");

  function updateFavorites() {
    const count = $favoriteList.children("li").length;
    $favoriteCount.text(`Favorites: ${count}`);
    $favoriteEmpty.prop("hidden", count > 0);
  }

  $favoriteForm.on("submit", function (event) {
    event.preventDefault();
    const activity = $favoriteInput.val().trim();

    if (!activity) {
      $favoriteMessage
        .stop(true, true)
        .text("Enter an activity before adding it.")
        .addClass("status-error")
        .show();
      $favoriteInput.trigger("focus");
      return;
    }

    const $item = $("<li>");
    $("<span>").text(activity).appendTo($item);
    $("<button>", {
      type: "button",
      class: "favorite-remove",
      text: "Remove",
      "aria-label": `Remove ${activity} from favorites`,
    }).appendTo($item);
    $favoriteList.append($item);

    $favoriteInput.val("").trigger("focus");
    updateFavorites();
    $favoriteMessage
      .stop(true, true)
      .removeClass("status-error")
      .text(`${activity} added to favorites.`)
      .fadeIn(180)
      .delay(1600)
      .fadeOut(250);
  });

  $favoriteList.on("click", ".favorite-remove", function () {
    $(this).closest("li").remove();
    updateFavorites();
  });

  updateFavorites();
});
