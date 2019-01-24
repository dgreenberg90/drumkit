

// ***Detecting Button Click***
	// Sets numDrums equal to the array of elements with the class of "drum"
var numDrums = document.querySelectorAll(".drum");  

	// A for loop creating a new variable i, that is to be used as the starting point (i = 0), 
		// the end point (i < numDrums.length), and the increment (i++)
for (var i = 0; i < numDrums.length; i++) {

	// This selects items within the array, one at a time, starting at 0,
		 // and will trigger until all of the drums have the listen for "click" event added.
	// The function is unnamed because otherwise it will call the function as the code is read initially.
	numDrums[i].addEventListener("click", function () {
	
		// The variable buttonInnerHTML will be equal to the inner HTML of whichever drum is clicked, 
			// which will be the corresponding letter.
		var buttonInnerHTML = this.innerHTML;

		// The "makeSound" function is called and has the input of the buttonInnerHTML, which will be
			// the letter of the clicked button! (e.g. "w" or"a")
		makeSound(buttonInnerHTML);

		// The "buttonAnimation" function is also called and has the same exact input as above.
		buttonAnimation(buttonInnerHTML);

	});
}

// **DETECTING KEYBOARD PRESS**

// Adds an event listener of "keydown" to entire document, which detects when a keyboard key is pressed.
// 	(According to MDN docs, "keypress" has been deprecated.)
// The function will be called with the "event" as a parameter*
//
document.addEventListener("keydown", function(event) {

	makeSound(event.key);
	buttonAnimation(event.key);
});

function makeSound(key) {

	switch (key) {

		case "w":
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
			break;
				
		case "a":
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;

		case "s":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;

		case "d":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;

		case "j":
			var kick = new Audio("sounds/kick-bass.mp3");
			kick.play();
			break;
		case "k":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;

		case "l":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
			break;

		default: console.log(key);

			}	
}


// ***FUNCTION buttonAnimation explained!**
// The function below will be called if a button is clicked or a key is pressed.
// The function inputs the currentKey, which triggered the entire function, into the variable.
// the variablo activeButton is set to equal the class of the current key.
// the class list "pressed" is added, which is styled in our CSS stylesheet.
// the setTimeout command has two inputs:
	// The first input is the entire unnamed function, which is to remove "pressed".
	// The second input, is the millisecond delay between when "pressed" is added
	  // and when "pressed" is removed, making it highlighted for a total of 1/10 of a second.


	function buttonAnimation(currentKey) {
		var activeButton = document.querySelector("." + currentKey);
		activeButton.classList.add("pressed");

		setTimeout(function() {
			activeButton.classList.remove("pressed");
		}, 100);
		 
	}





	// var audio = new Audio("sounds/tom-1.mp3");
	// audio.play();

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
// 	alert("I got clicked");
// }