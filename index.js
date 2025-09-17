
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        case "w";
        var audio = new Audio("./sounds/tom-1.mp3")
        kick.bass.play();
        break;

        case "a"
        var audio = new Audio("./sounds/tom-1.mp3")
        snare.play();
        break;

        case "s";
        var audio = new Audio("./sounds/tom-1.mp3")
        tom-1.play();
        break;

        case "j";
        var audio = new Audio("./sounds/tom-1.mp3")
        tom-2.play();
        break;

        case "d";
        var audio = new Audio("./sounds/tom-1.mp3")
        tom-3.play();
        break;

        case "k";
        var audio = new Audio("./sounds/tom-1.mp3")
        tom-4.play();
        break;

    })
}