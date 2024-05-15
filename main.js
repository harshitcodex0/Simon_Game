// $(document).ready(function () {
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickPattern = [];
var started = false;
var level = 0;

$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);

  let randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
  gamePattern.push(randomChosenColor);

  // let audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  gamePattern.forEach(function (color) {
    $("." + color)
      .animate({ opacity: 0.5 })
      .animate({ opacity: 1 });
  });
  playSound(randomChosenColor);

  // audio.play();
}

// nextSequence();
// console.log(gamePattern);

$("." + gamePattern)
  .animate({ opacity: 0.5 })
  .animate({ opacity: 1 });

$(".btn").click(function () {
  let userChosenColor = $(this).attr("id");
  userClickPattern.push(userChosenColor);
  // console.log(userClickPattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);
});

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
// });
