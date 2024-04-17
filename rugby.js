window.addEventListener("load", redFall);
let point;
let myRan;

function redFall() {
  console.log("redFall");
  point = 0;
  let redContainer = document.querySelector("#redball_container"); //container become variable
  let containerWidth = redContainer.offsetWidth; //offsetWidth is the distance from edge
  let randomLeft = Math.random() * (containerWidth * 0.8) + containerWidth * 0.1; // Random position between 10% to 90%
  redContainer.style.left = randomLeft + "%";
  document.querySelector("#redball_container").classList.add("fall");
  document.querySelector("#redball_container").addEventListener("mousedown", clickRedHandler);
}
function clickRedHandler() {
  console.log("clickRedHandler");

  document.querySelector("#redball_container").classList.add("frys");
  document.querySelector("#redball_sprite").classList.add("drej");

  point--;

  document.querySelector("#point").textContent = "Point :" + point;

  document.querySelector("#redball_container").addEventListener("animationend", Reset);
}

window.addEventListener("load", blueFall);

function blueFall() {
  console.log("sidenvises");
  point = 0;
  let blueContainer = document.querySelector("#blueball_container");
  let containerWidth = blueContainer.offsetWidth;
  let randomLeft = Math.random() * (containerWidth * 0.8) + containerWidth * 0.1; // Random position between 10% to 90%
  blueContainer.style.left = randomLeft + "%";
  document.querySelector("#blueball_container").classList.add("fall");
  document.querySelector("#blueball_container").addEventListener("mousedown", clickBlueHandler);
}
function clickBlueHandler() {
  console.log("clickBlueHandler");

  document.querySelector("#blueball_container").classList.add("frys");
  document.querySelector("#blueball_sprite").classList.add("drej");

  point++;
  document.querySelector("#point").textContent = "Point :" + point;
  document.querySelector("#blueball_container").addEventListener("animationend", Reset);
}

function Reset() {
  document.querySelector("#redball_container").classList = "";
  document.querySelector("#redball_sprite").classList = "";
  document.querySelector("#redball_container").offsetLeft;
  document.querySelector("#redball_container").classList.add("fall");
  document.querySelector("#blueball_container").classList = "";
  document.querySelector("#blueball_sprite").classList = "";
  document.querySelector("#blueball_container").offsetLeft;
  document.querySelector("#blueball_container").classList.add("fall");
}
