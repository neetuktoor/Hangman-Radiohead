BLEH My attempt at the recommended activity

// Setup variables and initialize stat

var wordBank = ["Creep", "Idioteque", "Reckoner", "Bodysnatchers"];
var gameLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterGuessed;
var wins = 0;
var wrong = 0;
var maxTurns = 6;

	

// Randomly choose word from wordBank
	var randomWord = wordBank [Math.floor(((Math.random()) * wordBank.length))];
	console.log (randomWord);
//Create an array to create underscores for the song name
	// var randomWord = wordBank[randomNumber]

	var answerArray = [];
		for (var i = 0; i < randomWord.length;i++) {
			answerArray[i] = "_";
			console.log ("_")
		document.getElementById("Word").append ("_ ");
	}

// Radiohead.answerString = Radiohead.answerArray.join(" "); 

// // check if userguess is in the answerArray
// if ((letterGuessed.userGuess.match(/^[a-z]$/i)))  {


// //replace letter with underscore
// var replace = display(gameLetters);

// //update answer array according to guess. 
// 	for (var j = 0;j<wordBank.length;j++)
// 		if (wordBank[j]==letterGuessed) {
// 			answerArray[j] = letterGuessed;

// 			remainingLetters--;}


// // This function is run whenever the user presses a key.
    
//     document.onkeyup = function(event) {

// // Determines which key was pressed.
//       var keyPressed = event.key;


// //Check if (userGuess) is part of the ASCII code for lower case letters a to z. 
// 	if ((userGuess.match(/^[a-z]$/i)))  {			
// 		maxTurns --;
// 			document.getElementById("macT").innerHTML = Hangman.guessLimit;


