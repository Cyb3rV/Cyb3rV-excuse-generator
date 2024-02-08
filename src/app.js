/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const who = ["The dog", "My grandma", "His turtle", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "the keys", "the car"];
const when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  const a = who[getRandomInt(who.length)];
  const b = action[getRandomInt(action.length)];
  const c = what[getRandomInt(what.length)];
  const d = when[getRandomInt(when.length)];

  //Create a random excuse
  var excuse = "Hello this is a random excuse!!";

  excuse = `${a} ${b} ${c} ${d}`;

  //change the HTML page to show the random excuse
  document.querySelector("div").innerText = excuse;
};
