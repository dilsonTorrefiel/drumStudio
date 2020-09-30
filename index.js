
// detecting keyboard pressed
// get keypress to trigger makeSound using Keyboard event
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
//--------------------------------------------------------------------------------//
// detecting button pressed
// get button element in a collection array.
var getButton = document.querySelectorAll(".drum");
// assign event listener to every button using .drum class
for( var i =0; i<=getButton.length; i++){
    getButton[i].addEventListener("click", function (){
        var buttonInnerHTML =this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
//--------------------------------------------------------------------------------//
document.addEventListener("touchstart", myFunction(event));

function myFunction(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
}
//--------------------------------------------------------------------------------//
function makeSound(key){
  switch (key) {
    case "w":
        var tom1 =new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

    case "a":
        var tom2 =new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

    case "s":
        var tom3 =new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

    case "d":
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

    case "j":
        var snare =new Audio("sounds/snare.mp3");
        snare.play();
        break;
    case "k":
        var crash =new Audio("sounds/crash.mp3");
        crash.play();
        break;
    case "l":
        var kickBass =new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;
    default:
        console.log(key);
  }

}
//--------------------------------------------------------------------------------//
function buttonAnimation(buttonKey){
  var button = document.querySelector("."+buttonKey).classList.remove("pressed");
  setTimeout( function(){document.querySelector("."+buttonKey).classList.add("pressed");}, 200);
}
