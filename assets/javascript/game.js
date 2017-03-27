


// variables

var wins = 0;
var loses = 0;
var sofar = [];
var guessCounter = 10;
var letters = ["a", "b", "c", "d", "e","f","g", "h", "i", "j", "k","l","m", "n", "o", "p", "q","r","s", "t", "u", "v", "w","x","y","z"];


alert("guess what leeter am i thinking of ...")
//Computer picks a random letter....
	var randomLetter = letters[Math.floor(Math.random() * letters.length)];

// When the user presses a key, it will run the following function...
      document.onkeyup = function(event) {

        // Determine which key was pressed, make it lowercase, and set it to the userGuess variable.
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        	console.log(userGuess);
        // Sets the computerGuess variable equal to a random choice from the computerChoice array.
     
        guessCounter --;
		// if(userGuess === randomLetter){
		// 	wins++;
		// 	reset();
		// }
		console.log(guessCounter);
	// when user guessed incorrectly, log letter guessed
		// else if(guessesLeft != 0) { 
		// 	sofar.push(userGuess);
		// 	guessesLeft--;
		// } 

		// Guesses so far
sofar.push(userGuess);

	// when user has no more guesses left
		// else if(guessesLeft == 0){
		// 	loses++;
		// 	var gameOver = confirm("Game over! Try again?");
		// 	// if user hits OK, reset game
		// 	if(gameOver){
		// 		reset();
		// 	} 
		// }
  //   }

//VERIFY THAT THE LETTER THE USER CHOOSE IS THE SAME THAT THE COMPUTER CHOOSE ...

if(userGuess===randomLetter){
	
	wins ++;
}
else if(guessCounter ===0){
loses++;

// var gameOver = confirm("Game over! Try again?");
// 			// if user hits OK, reset game
// 			if(gameOver){
// 				reset();
// 			} 
reset();

	}

	document.querySelector("#wins").innerHTML = wins;
		document.querySelector("#loses").innerHTML = loses;
		document.querySelector("#guessesLeft").innerHTML = guessCounter;
		document.querySelector("#soFar").innerHTML = sofar;

}



// function reset when user guesses the correct letter
function reset(){
	randomLetter = letters[Math.floor(Math.random() * letters.length)];
	var wins = 0;
	var loses = 0;
	var sofar = [];
	var guessCounter = 10;
}



	// live tally of wins & losses and letters guessed so far
		// var html = "<h1>The Psychic Game!</h1>" + 
		// "<p>Guess the letter I'm thinking" +
		// "<p>Wins: " + wins + "</p>" +
		// "<p>Losses: " + loses + "</p>" +
		// "<p>Guesses left: " + guessesLeft + "</p>" +
		// "<p>Guesses so far: " + sofar +"</p>";

		//Haley Hester 2017 - March- //
		
 
	