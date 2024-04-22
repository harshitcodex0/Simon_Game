
let buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = [];

function nextSequence(){
    let randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
    gamePattern.push(randomChosenColor);

    let audio = new Audio("sounds/"+randomChosenColor+".mp3");
    audio.play();
}

nextSequence();
console.log(gamePattern)


$(document).ready(function(){
    $("."+gamePattern).animate({opacity:0.5}).animate({opacity:1});
    $("."+gamePattern).play
})
