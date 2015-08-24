//Widget controls

var lastFunction;
var getAnswer;
var sum;
var difference;
var product;
var numOne;
var numTwo;

function showProbSet() {
	document.getElementById("probSet").style.display = 'block';
};

function hideProbSet() {
	document.getElementById("probSet").style.display = 'none';
};

function showAnswerSet() {
	document.getElementById("answerSet").style.display = 'block';
};

function hideAnswerSet() {
	document.getElementById("answerSet").style.display = 'none';
};

function getFocus() {
	document.getElementById("answerSet").focus();
};

function showEnter() {
	document.getElementById("buttonEnter").style.display = 'block';
};

function hideEnter() {
	document.getElementById("buttonEnter").style.display = 'none';
};

function showQuit() {
	document.getElementById("quit").style.display = 'block';
};

function hideQuit() {
	document.getElementById("quit").style.display = 'none';
};

function onQuit() {
	window.location.reload();
};

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
};

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
	
	showProbSet();
	showAnswerSet();
	showEnter();
	getFocus();
	
	lastFunction = "doAdd";
};

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
};

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
	
	showProbSet();
	showAnswerSet();
	showEnter();
	getFocus();
	
	lastFunction = "doSub";
};

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
};

function doMult() {
	numOne = Math.floor((Math.random() *10) +1);
	numTwo = Math.floor((Math.random() *10) +1);
	product = numOne * numTwo;
	
	if (numOne > numTwo) {
		document.getElementById("probSet").innerHTML = (numOne + " x " + numTwo + " =");
	} else {
		document.getElementById("probSet").innerHTML = (numTwo + " x " + numOne + " =");
	}
	
	showProbSet();
	showAnswerSet();
	showEnter();
	getFocus();
	
	lastFunction = "doMult";
};

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
};

function doDiv() {
	numOne = Math.floor((Math.random() *10) +1);
	numTwo = Math.floor((Math.random() *10) +1);
	quotient = numOne / numTwo;
	
	if (quotient % numTwo === 0) {
		document.getElementById("probSet").innerHTML = (numOne + " / " + numTwo + " =");		
	} else {
		doDiv();	
	}
	
	showProbSet();
	showAnswerSet();
	showEnter();
	getFocus();
	
	lastFunction = "doDiv";
	
};

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
};

