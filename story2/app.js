const story = JSON.parse(fetch("/story2/xRubiks.json"));
const start = story.filter((x) => x.title == "Start");

console.log(story);
