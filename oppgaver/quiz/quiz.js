var questions = [
{
    question: "What is the capital of Norway",
    answer: "Oslo"
}, {
    question: "When was Amalie Skram Videregående opened?",
    answer: "2014"
}, {
    question: "What is the creator of this quiz' first name?",
    answer: "Mathias"
}, {
    question: "What is the first name of the teacher in IT-2?",
    answer: "Jo"
}, {
    question: 'Is prompt("Something shitty") a good thing to do?',
    answer: "no"
}, {
    question: "Is this quiz awesome?",
    answer: "yes"
}
];

questions.forEach(function(e, i) {
    document.getElementById("quizBox").innerHTML += `
    <p>${e.question}</p>
    <input type="text" value="" placeholder="Answer here" id="question${i}">
    `
}, endOfQuestions());

function endOfQuestions () {
    document.getElementById("quizBox").innerHTML += `
    <button onclick="checkAnswers()">Answer</button>
    `
}

function checkAnswers (arguments) {
    questions.forEach(function(e,i) {
        if(e.answer.toLowerCase() === document.getElementById("question"+i).value.toLowerCase()) {
            console.log("correct answer on question: " + e.question);
            document.getElementById("question"+i).style.backgroundColor = "lightgreen";
        } else {
            document.getElementById("question"+i).style.backgroundColor = "pink";
        }
    }, this);
}