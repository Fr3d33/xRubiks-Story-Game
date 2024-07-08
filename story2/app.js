let story;
let start;
let currentNode;

/**
 * Lädt den Text aus der angegebenen JSON-Datei und verarbeitet ihn.
 * Gibt die geladene Story, deren Nodes und Verbindungen in der Konsole aus.
 * Findet den Start-Node und verarbeitet ihn.
 * Wirft einen Fehler, wenn die HTTP-Antwort nicht in Ordnung ist.
 */
async function loadText() {
  try {
    // Fetch die JSON-Datei
    const response = await fetch("/story2/xRubiks.json");

    // Überprüfe, ob die Antwort erfolgreich ist
    if (!response.ok) {
      throw new Error(`HTTP-Fehler! Status: ${response.status}`);
    }

    // Parsen der JSON-Daten aus der Antwort
    story = await response.json();

    // Ausgabe der gesamten JSON-Struktur zur Diagnose
    console.log("Geladene Story JSON:", story);

    // Überprüfe, ob die Nodes existieren und gib sie aus
    if (story.nodes) {
      console.log("Nodes:", story.nodes);

      // Ausgabe der Titel jedes Nodes und ihrer Verbindungen
      story.nodes.forEach((node, index) => {
        console.log(`Node ${index}: Titel: ${node.title}`);
      });
    } else {
      console.error("Nodes sind nicht in der Story vorhanden");
    }

    // Finden des Start-Nodes anhand des Titels
    start = story.nodes.find((node) => node.title === "Start");

    currentNode = start;

    // Verarbeiten des Start-Nodes
    processStory();
  } catch (error) {
    // Ausgabe des Fehlers, falls vorhanden
    console.error("Fehler beim Laden der Story:", error);
  }
}

/**
 * Verarbeitet die Story, indem der Start-Node gefunden und die nächsten Nodes und Bedingungen ausgegeben werden.
 */
function processStory() {
  // Überprüfe, ob der Start-Node existiert
  if (start) {
    console.log("Der Start-Node ist:", start);

    currentNode.connections[0].child;
    story.nodes[currentNode.connections[0].child];
    // Überprüfe, ob der Start-Node Verbindungen hat
    if (start.connections && start.connections.length > 0) {
      // Iteriere über jede Verbindung des Start-Nodes
      start.connections.forEach((connection) => {
        // Finde den Node mit der entsprechenden Child-ID
        const node = story.nodes.find((node) => node.id === connection.child);

        // Wenn der Node gefunden wird, Ausgabe seines Titels und der Bedingung
        if (node) {
          console.log(
            `Nach dem Start ist der nächste Node: ${node.title} mit der Bedingung: ${connection.condition}`
          );
        } else {
          console.log(`Node mit ID ${connection.child} nicht gefunden.`);
        }
        displayStory();
      });
    } else {
      console.log("Der Start-Node hat keine Verbindungen.");
    }
  } else {
    console.log("Kein Start-Node gefunden");
  }
}

// Aufruf der Funktion, um die JSON-Daten zu laden und zu verarbeiten
loadText();

/**
 * Zeigt die Titel aller Nodes in der Story an.
 *
 * Diese Funktion durchsucht die Story nach allen Nodes und gibt ihren Titel in der Konsole aus.
 * Sie wird standardmäßig aufgerufen, wenn die Story angezeigt werden soll.
 */
async function displayStory() {
  try {
    if (story && story.nodes && story.nodes.length > 0) {
      const firstNode = story.nodes[0];
      if (firstNode) {
        console.log(firstNode);
        if (currentNode) {
          console.log(currentNode.title);
        } else {
          console.error("currentNode ist undefined");
        }
      } else {
        console.error("story.nodes[0] ist undefined");
      }
    } else {
      console.error("story oder story.nodes sind undefined");
    }
  } catch (error) {
    // Wenn ein Fehler auftritt, gib ihn in der Konsole aus
    console.error("Fehler beim Laden der Story:", error);
  }
}
