const questions = [
    {
        question: "What is the SI unit of electric current?",
        options: ["Volt", "Ohm", "Ampere", "Watt"],
        answer: "Ampere"
    },
    {
        question: "What is the chemical formula for baking soda?",
        options: ["NaHCO3", "NaCl", "CaCO3", "KOH"],
        answer: "NaHCO3"
    },
    // Add 198 more questions like the one above
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const resultContainer = document.getElementById('result-container');
const quizContainer = document.getElementById('quiz-container');
const restartButton = document.getElementById('restart-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.innerText = option;
        button.addEventListener('click', () => selectAnswer(option, currentQuestion.answer));
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selected, correct) {
    const buttons = document.querySelectorAll('.option');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.innerText === correct) {
            button.style.backgroundColor = 'green';
        } else if (button.innerText === selected) {
            button.style.backgroundColor = 'red';
        }
    });
    if (selected === correct) score++;
    nextButton.disabled = false;
}

function showResult() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreElement.innerText = score;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.disabled = true;
    } else {
        showResult();
    }
});

restartButton.addEventListener('click', startQuiz);

// Start the quiz
startQuiz();