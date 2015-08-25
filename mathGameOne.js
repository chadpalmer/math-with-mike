//Widget controls

var lastFunction, getAnswer, sum, difference, product, quotient, numOne, numTwo;

function getFocus() {
	document.getElementById("answerSet").focus();
}

function showQuit() {
	document.getElementById("quit").style.display = 'block';
}

function onQuit() {
	window.location.reload();
}

function switchOperation() {
	document.getElementById("probSet").style.display = 'block';
	document.getElementById("answerSet").style.display = 'block';
	document.getElementById("buttonEnter").style.display = 'block';
	getFocus();
}

function checkAnswer() {
	if (lastFunction == "doAdd") {
		checkAdd();
	} else if (lastFunction == "doSub") {
		checkSub();
	} else if (lastFunction == "doMult") {
		checkMult();
	} else {
		checkDiv();
	}
}

//Addition function
function doAdd() {
	numOne = Math.floor((Math.random() *10) +1);
	numTwo = Math.floor((Math.random() *10) +1);
	sum = numOne + numTwo;
		
	if (numOne > numTwo) {
		document.getElementById("probSet").innerHTML = (numOne + " + " + numTwo + " =");
	} else {
		document.getElementById("probSet").innerHTML = (numTwo + " + " + numOne + " =");
	}
	lastFunction = "doAdd";

	switchOperation();
}

function checkAdd() {
	getAnswer = document.getElementById("answerSet").value;
	
	if (sum == getAnswer){
		alert("That is correct!");
		document.getElementById("answerSet").value = '';
		doAdd();
	} else {
		alert("Oops, wrong answer.  Try again.");
		document.getElementById("answerSet").value = '';
		getFocus();
	}
	
	showQuit();
}

//Subtraction function
function doSub() {
	numOne = Math.floor((Math.random() *10) +1);
	numTwo = Math.floor((Math.random() *10) +1);
		
	if (numOne > numTwo) {
		document.getElementById("probSet").innerHTML = (numOne + " - " + numTwo + " =");
		difference = numOne - numTwo;
	} else {
		document.getElementById("probSet").innerHTML = (numTwo + " - " + numOne + " =");
		difference = numTwo - numOne;
	}
	lastFunction = "doSub";

	switchOperation();
}

function checkSub() {
	getAnswer = document.getElementById("answerSet").value;
	
	if (difference == getAnswer){
		alert("That is correct!");
		document.getElementById("answerSet").value = '';
		doSub();		
	} else {
		alert("Oops, wrong answer.  Try again.");
		document.getElementById("answerSet").value = '';
		getFocus();
	}
	
	showQuit();
}

function doMult() {
	numOne = Math.floor((Math.random() *10) +1);
	numTwo = Math.floor((Math.random() *10) +1);
	product = numOne * numTwo;
	
	if (numOne > numTwo) {
		document.getElementById("probSet").innerHTML = (numOne + " x " + numTwo + " =");
	} else {
		document.getElementById("probSet").innerHTML = (numTwo + " x " + numOne + " =");
	}
	lastFunction = "doMult";

	switchOperation();
}

function checkMult() {
	getAnswer = document.getElementById("answerSet").value;
	
	if (product == getAnswer) {
		alert("That is correct!");
		document.getElementById("answerSet").value = '';
		doMult();
	} else {
		alert("Oops, wrong answer.  Try again.");
		document.getElementById("answerSet").value = '';
		getFocus();
	}
	
	showQuit();
}

function doDiv() {
	numTwo = Math.floor((Math.random() *10) +1);
	numOne = numTwo * Math.floor((Math.random() *10) +1);
	quotient = numOne / numTwo;
	document.getElementById("probSet").innerHTML = (numOne + " / " + numTwo + " =");
	lastFunction = "doDiv";
	
	switchOperation();
}

function checkDiv() {
	getAnswer = document.getElementById("answerSet").value;
	
	if (quotient == getAnswer) {
		alert("That is correct!");
		document.getElementById("answerSet").value = '';
		doDiv();
	} else {
		alert("Oops, wrong answer.  Try again.");
		document.getElementById("answerSet").value = '';
		getFocus();
	}
	
	showQuit();
}

