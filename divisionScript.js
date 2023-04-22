var number1 = Math.floor((Math.random() * 10) + 1);
var number2 = Math.floor((Math.random() * 10) + 1);
var correctAnswer = number1 / number2;
var output;

function setupQuestions(){
        number1 = Math.floor((Math.random() * 10) + 1);
        number2 = Math.floor((Math.random() * 10) + 1);
        correctAnswer = number1 / number2;
        document.getElementById("add").innerHTML = number1 + " / " + number2;
    
}

function displayQuestion(){
    document.getElementById("add").innerHTML = number1 + " / " + number2;
    
}
displayQuestion();


function userAnswer(){
    var userAnswer = document.getElementById("answer").value;

    if(isNaN(userAnswer)){
        output = "Hey! That's not a number, try again!";
    }
    else{
        if(userAnswer == correctAnswer){
            output = "Correct! " + number1 + " / " + number2 + " = " + correctAnswer;
        }
        else{
            output = "Wrong! " + number1 + " / " + number2 + " is not " + userAnswer;
        }
    }

    document.getElementById("output").innerHTML = output;
}

function nextCard(){
    document.getElementById("output").innerHTML = " ";
    document.getElementById("answer").value = " ";
    setupQuestions();
}

function giveUp(){

    document.getElementById("output").innerHTML = "The correct answer is " + correctAnswer;
}