
let gamePattern = []
let buttonColours = ["red", "blue", "green", "yellow"]

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    return randomChosenColour
}

nextSequence();

let buttons = $(".row div")
buttons.on("click", function (event) {
    $(`#${event.target.id}`).fadeOut(100).fadeIn(100);
    switch (event.target.id) {

        case "blue":
            let blueAudio = new Audio("sounds/blue.mp3")
            blueAudio.play()
            break;

        case "green":
            let greenAudio = new Audio("sounds/green.mp3")
            greenAudio.play()
            break;

        case "red":
            let redAudio = new Audio("sounds/red.mp3")
            redAudio.play()
            break;

        case "yellow":
            let yellowAudio = new Audio("sounds/yellow.mp3")
            yellowAudio.play()
            break;

        default:
            console.log("A saber donde has clicado")
            break;
    }

})