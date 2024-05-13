$(document).ready(function () {
  let buttonColors = ["red", "blue", "green", "yellow"];
  let gamePattern = [];
  let userClickPattern = [];

  function nextSequence() {
    let randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
    gamePattern.push(randomChosenColor);

    let audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
  }

  nextSequence();
  console.log(gamePattern);

  $("." + gamePattern)
    .animate({ opacity: 0.5 })
    .animate({ opacity: 1 });

  $(".btn").click(function () {
    let userChosenColor = $(this).attr("id");
    userClickPattern.push(userChosenColor);
    console.log(userClickPattern);
  });
});
