
let level = 0;
let playable = false;
let userClickedPattern = []
let gamePattern = []
let buttonColours = ["red", "blue", "green", "yellow"]

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)

    gamePattern.forEach((color, i) => {
        playable = false
        console.log(playable)
        setTimeout(() => {
            playSound(color)
            animatePress(color)
            if (i === gamePattern.length - 1) {
                setTimeout(() => {
                    playable = true;
                    console.log(playable)
                }, 250);

            }
        }, i * 500)

    })
    level++
    $("#level-title").text(`Level ${level}`)
    return randomChosenColour
}

$(document).on("keydown", function () {
    if (level === 0) {
        console.log(playable)
        nextSequence()
        $("#level-title").css("color", "#FEF2BF")
        $("#level-title").text(`Level ${level}`)
    }
})

let buttons = $(".row div")
buttons.on("click", function (event) {
    if (!playable) return;
    let userChosenColour = event.target.id
    animatePress(userChosenColour)

    userClickedPattern.push(userChosenColour)
    gamePlay(userChosenColour)
    console.log(userClickedPattern, gamePattern)


})


function gamePlay(userChosenColour) {
    let lastIndex = userClickedPattern.length - 1;

    if (userClickedPattern[lastIndex] === gamePattern[lastIndex]) {
        console.log("Nice!");
        $(`#${userChosenColour}`).fadeOut(100).fadeIn(100);
        switch (userChosenColour) {

            case "blue":
                playSound("blue")
                break;

            case "green":
                playSound("green")
                break;

            case "red":
                playSound("red")
                break;

            case "yellow":
                playSound("yellow")
                break;

            default:
                console.log("A saber donde has clicado")
                break;
        }

        if (userClickedPattern.length === gamePattern.length) {
            playable = false;
            setTimeout(() => {
                nextSequence();
                userClickedPattern = [];
            }, 1000);
        }
    } else {
        playable = false
        console.log("R.i.p");
        playSound("wrong");
        $("#level-title").css("color", "red").fadeOut(100).fadeIn(100)

        setTimeout(() => {
            level = 0;
            userClickedPattern = []
            gamePattern = []
            $("#level-title").text(`GameOver, Press Any Key to Restart`)
        }, 1000);
    }
}




function playSound(name) {
    let audio = new Audio(`sounds/${name}.mp3`)
    audio.play()
}

function animatePress(currentColour) {
    $(`#${currentColour}`).addClass("pressed")
    setTimeout(() => {
        $(`#${currentColour}`).removeClass("pressed")
    }, 100);
}