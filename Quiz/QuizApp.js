
let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");
const reloadButton = document.getElementById("reload");
const quiz = [
    {
        question: "Which is known as Silicon Valley of India?",
        options: ["Bangalore", "Mumbai", "Chennai", "Kolkata"],
        answer: 0
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        answer: 1
    },
    {
        question: "Which city is known as Jewel of Sahyadri Mountains?",
        options: ["Thiruvananthapuram", "Nandi Hills", "Lonavala", "Ooty"],
        answer: 2
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
        answer: 2
    },
    {
        question: "Who was the first Indian astronaut to go to space?",
        options: ["Kalpana Chawla", "Rakesh Sharma", "Sunita Williams", "None of the above"],
        answer: 1
    }
];

function displayQuestion() {
    let q = quiz[currentQuestion];
    questionElement.textContent = q.question;
    optionsElement.innerHTML = "";
    for (let i = 0; i < q.options.length; i++) {
        optionsElement.innerHTML += `<input type="radio" name="option" value="${i}"> ${q.options[i]}<br>`;
    }
}
function checkAnswer() {
    let options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            if (options[i].value == quiz[currentQuestion].answer) {
                score++;
            }
            break;
        }
    }
}

function nextQuestion() {
    checkAnswer();
    currentQuestion++;
    if (currentQuestion < quiz.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    submitButton.style.display = "none";
    reloadButton.style.display = "block";
    resultElement.textContent = `Your score is ${score} out of ${quiz.length}.`;
}

function reloadQuiz() {
    currentQuestion = 0;
    score = 0;
    questionElement.style.display = "block";
    optionsElement.style.display = "block";
    submitButton.style.display = "block";
    reloadButton.style.display = "none";
    resultElement.textContent = "";
    displayQuestion();
}

submitButton.addEventListener("click", nextQuestion);
reloadButton.addEventListener("click", reloadQuiz);

displayQuestion();
