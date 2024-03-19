document.addEventListener("DOMContentLoaded", function () {
  let text = ["", "xRubiks Story Game", "Lol"];
  let clicks = 0;
  let nextButton = document.getElementById("Next-Button");
  let story = document.getElementById("story");
  let h1 = document.getElementById("h1");

  nextButton.addEventListener("click", function () {
    clicks++;
    story.innerHTML = text[clicks];
    hideTitle(); // Aufruf der Funktion zum Verstecken des Titels nach jedem Klick
  });

  function hideTitle() {
    if (clicks == 1) {
      h1.style.display = "none"; // Korrekte Referenzierung des h1-Elements
    }
  }
});
