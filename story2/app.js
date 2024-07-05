let story;
let start;

async function loadText() {
  try {
    let response = await fetch("/story2/xRubiks.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    story = await response.json();

    console.log("Loaded Story:", story);
    console.log("Nodes:", story.nodes);
    console.log("Connections:", story.connections);

    story.nodes.forEach((node, index) => {
      console.log(`Node ${index}: title: ${node.title},`);
    });
    start = story.nodes.find((node) => node.title == "Start");

    processStory();
  } catch (error) {
    console.error("Fehler beim laden der Story:", error);
  }
}

loadText();

function processStory() {
  if (start) {
    console.log("The start node is: " + start);
    for (let connection of start.connections) {
      let node = story.nodes.find((node) => node.id == connection.child);
      if (node) {
        console.log(
          `After the start the next node is: ${node.title} with the condition: ${connection.condition}`
        );
      }
    }
  } else {
    console.log("No start node found");
  }
}

function displayStory() {
}