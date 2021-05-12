// function speak (message) {
//   var msg = new SpeechSynthesisUtterance(message)
//   var voices = window.speechSynthesis.getVoices()
//   msg.voice = voices[13]
//   window.speechSynthesis.speak(msg)
// }

// let speakButton = document.querySelector(".font-blurb");
// speakButton.addEventListener("click", function(e) {
//   let message = e.target.outerText;
//   console.log(message);
//   speak(message);
//   // speak("Cao kako si");
// });

let swapper = document.querySelector(".swapper");

function swapFont() {
  swapper.classList.add("default");
}

function swapFontExit() {
  swapper.classList.remove("default");
}

swapper.addEventListener("mouseenter", swapFont)
swapper.addEventListener("mouseleave", swapFontExit)

// text to speech
var voices = window.speechSynthesis.getVoices();
console.log(voices);
var voice = voices[13];

function speak (message) {
  var msg = new SpeechSynthesisUtterance(message)
  console.log(voices, voice);
  msg.voice = voice;
  window.speechSynthesis.speak(msg)
}

let speakButton = document.querySelector(".speak");
speakButton.addEventListener("click", function(e) {
  let message = "Cao kako si";
  console.log(message);
  speak(message);
  // speak("Cao kako si");
});