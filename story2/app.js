let text = [];

getText("story2.txt");

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  text = myText.split("\n");

  text = text.filter((a) => a.trim().length > 0);

  let questions = myText.split(">");

  console.log(questions);
}
