function showRandom() {
    let i = getRandomNumber(0,5);
    let j = getRandomNumber(0,3);
    document.getElementById("randonBtn").innerText = "i=" + i + ",j=" + j;
    document.getElementById("randonBtn").style.background = 'yellow';
    let insideofChangColor = changColorBtnBlue(i, j);
  }
function getRandomNumber(min, max) {
    n = Math.floor(Math.random() * (max - min)) + min;
    return n;
}
  // color it from black -> Blue
function changColorBtnBlue(i, j) {
  var element =  document.getElementById("(" + i + "," + j + ")");
  element.classList.remove("button");
  element.classList.remove("colorBlack");
  element.classList.add("button");
  element.classList.add("colorBlue");
}
// color it from black to red 
function changColorBtnRed() {
  var element = document.getElementById("red");
  element.classList.remove("button");
  element.classList.remove("colorBlack");
  element.classList.add("button");
  element.classList.add("colorRed");
}
// color it from black -> Green
function changColorBtnGreen() {
  var element = document.getElementById("Green");
  element.classList.remove("button");
  element.classList.remove("colorBlack");
  element.classList.add("button");
  element.classList.add("colorGreen");
}