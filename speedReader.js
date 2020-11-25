var speedReadString =
  "Mama, just killed a man \
Put a gun against his head \
Pulled my trigger, now he's dead \
Mama, life had just begun \
But now I've gone and thrown it all away \
Mama, ooh \
Didn't mean to make you cry \
If I'm not back again this time tomorrow \
Carry on, carry on \
As if nothing really matters \
Too late, my time has come \
Sends shivers down my spine \
Body's aching all the time \
Goodbye everybody, I've got to go \
Gotta leave you all behind and face the truth \
Mama, ooh \
I don't want to die \
I sometimes wish I'd never been born at all";
var timerString = "The Speed Reading will begin in: ";
var speedReadWord = speedReadString.split(" ");
var userSpeedInput = prompt(
  "Please enter a number between 1 (slow) and 10 (fast)"
);
var userSpeed = parseInt(userSpeedInput);
var h1Element = document.createElement("h1");
h1Element.setAttribute("id", "updateDiv");
document.body.appendChild(h1Element);
var h1ElementElement = document.getElementById("updateDiv");
var s = 5;
var w = 0;
//5 second timer
function countdown() {
  display(timerString + s); //update html
  if (s !== 0) {
    //if seconds doesn't equal 0
    s--; // subtract 1 from s
    setTimeout(countdown, 1000); //wait 1 second and restart countdown function
  } else {
    display(timerString + "GO!");
    setTimeout(() => speedRead(), 1000); // when countdown reaches 0, start speed read function
  }
}
//speed reader
function speedRead() {
  display(speedReadWord[w]); //update html
  if (w !== speedReadWord.length) {
    //if w doesnt equal number of words
    w++; // add 1 to w
    setTimeout(speedRead, 60000 / (60 * userSpeed)); // wait 60,000ms/(userInput*60ms)
  }
}
function display(displayWord) {
  h1ElementElement.textContent = displayWord; //updates h1 element text
}
countdown();
