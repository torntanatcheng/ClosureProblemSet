//CLOSURE PROBLEM SET

//Exercise 1:
//- Modify the code so that it works with one global variable
//- Don't wrap into function and run it

function quiz(){
	
	return function(){
		var answer1 = "blue",
		    answer2 = "no",
		    answer3 = "yes";

		var userAnswer1 = prompt("what color is the sky?")
		if (userAnswer1 === answer1) {

		    alert("Correct")
		} else {
		    alert("Sorry, that was wrong")
		}
		var userAnswer2 = prompt("Do cows fly?")

		if (userAnswer2 === answer2) {
		    alert("Correct")
		} else {
		    alert("Sorry, that was wrong")
		}

		var userAnswer3 = prompt("Do birds fly?")

		if (userAnswer3 === answer3) {
		    alert("Correct")
		} else {
		    alert("Sorry, that was wrong")
		}
	}
};

var runQuiz = quiz();
runQuiz;

//Exercise 2:
//Write a closure that outputs the next item in the array everytime it is invoked
//- Have a counter of -1 since the array index starts at -1
function getNames(){
	var names = ["William","Cindy","Maureen","Brenden"];
	var counter = -1
	return function(){
		return names[counter+=1]
	}
};

var nextName = getNames();
nextName();

//Exercise 3:
//- Write a function that gets the internal data of a function using
//getData()();
//getData()(); reaches into the inner function

	function getData(){
		var data = "You got the data!"
		return function(){
			return data;
		}
	}

getData()();