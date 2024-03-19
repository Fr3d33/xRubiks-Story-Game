document.addEventListener("DOMContentLoaded", function () {
  let text = ["", "xRubiks Story Game", "Lol"];
  let clicks = 0;
  let nextButton = document.getElementById("Next-Button");
  let story = document.getElementById("story");
  let h1 = document.getElementById("h1");

  nextButton.addEventListener("click", function () {
    clicks++;
    story.innerHTML = text[clicks];
    hideTitle();
  });

  function hideTitle() {
    if (clicks == 1) {
      h1.style.display = "none";
    }
  }
});
