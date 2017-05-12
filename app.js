// Create Variable to keep track of the Player Scores 
// and the end Goal, which can be modified.
var score0 = 0;
var score1 = 0;
var globalScore = 5;


// Grab the buttons using Javascript individually
btn0 = document.getElementsByClassName("btn")[0];
btn1 = document.getElementsByClassName("btn")[1];
btn2 = document.getElementsByClassName("btn")[2];
console.log(btn2);

// Target the scoreBoard spans
playerOne = document.getElementsByTagName('span')[0];
playerTwo = document.getElementsByTagName('span')[1];
console.log(playerOne)
playTo = document.getElementsByTagName('span')[2]

// Target the input box
input = document.getElementsByTagName('input')[0]
console.log(input);


/// change the spans to the variables
playerOne.innerHTML = score0;
playerTwo.innerHTML = score1;
playTo.innerHTML = globalScore;


btn0.addEventListener("click", function() {
	if (score0 !== globalScore ) {
		if (score1 !== globalScore) {
			score0 += 1;
			playerOne.innerHTML = score0;
			if (score0 === globalScore) {
				playerOne.classList.add("makeGreen");
			}
		}
	}
	console.log(score0, globalScore)
	

});




input.addEventListener("change", function(){
	globalScore = Number(input.value);
	console.log(globalScore);
	playTo.innerHTML = globalScore;
})


btn1.addEventListener("click", function() {

	if (score1 !== globalScore) {
		if (score0 !== globalScore) {
			score1 += 1;
			playerTwo.innerHTML = score1;
			if (score1 === globalScore) {
				playerTwo.classList.add("makeGreen");
			}
		}
	}
	console.log(score1)
	console.log(this)
});


btn2.addEventListener("click", function() {
	if (score0 === globalScore) {
		playerOne.classList.remove("makeGreen");
	}
	else {
		playerTwo.classList.remove("makeGreen");
	}
	score0 = 0;
	score1 = 0;
	playerOne.innerHTML = score0;
	playerTwo.innerHTML = score1;
});
