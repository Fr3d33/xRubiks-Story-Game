document.addEventListener("DOMContentLoaded", function () {
  let clicks = 0;
  let text = []
  let nextButton = document.getElementById("Next-Button");
  let story = document.getElementById("story");
  let h1 = document.getElementById("h1");
  let backButton = document.getElementById("Back-Button")
  let images = ["/images/image1.jpg", ""]
  let backgroundImage = document.getElementById("background-image")

  getText("xrubiks_story.txt");

  async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    text = myText.split("\n");
    
    text = text.filter((a) => a.trim().length > 0 );
  };

  


  backButton.style.display = "none";

  nextButton.addEventListener("click", function () {
    if (clicks < text.length) {
      backButton.style.display = "block"
      clicks++;
      story.innerHTML = text[clicks -1];
      backgroundImage.src = images[clicks -1];
      hideTitle();
      hideStory();
    } else {
      console.log("Du bist auf der letzten Seite.")
    }
  });


  backButton.addEventListener("click", function() {
    if (clicks > 0) {
      clicks--;
      story.innerHTML = text[clicks -1];
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
