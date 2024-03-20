document.addEventListener("DOMContentLoaded", function () {
  let text = ["xRubiks Story Game", "Lol", "3", "4"];
  let clicks = 0;
  let nextButton = document.getElementById("Next-Button");
  let story = document.getElementById("story");
  let h1 = document.getElementById("h1");
  let backButton = document.getElementById("Back-Button")


  backButton.style.display = "none";

  nextButton.addEventListener("click", function () {
    if (clicks < text.length -1) {
      backButton.style.display = "block"
      clicks++;
      story.innerHTML = text[clicks];
      hideTitle();
      hideStory();
    } else {
      console.log("Du bist auf der letzten Seite.")
    }
      
   
  });


  backButton.addEventListener("click", function() {
    if (clicks > 0) {
      clicks--;
      story.innerHTML = text[clicks];
      hideTitle();
      hideStory();
      console.log(clicks)
    } else {
      console.log("Du bist auf der ersten Seite.")
    }
  });




  function hideStory() {
    if (clicks == 0) {
      story.style.display = "none";
    } else {
      story.style.display = "block";
    };
  };  

  function hideTitle() {
    if (clicks >= 1) {
      h1.style.display = "none";
    } else {
      h1.style.display = "block";
    };
  };

});
