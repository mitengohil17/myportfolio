const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}


function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'restart'
        startButton.classList.remove('hide')
    }
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [{
        question: 'Identify the Noun in this sentence "I live in London."',
        answers: [
            { text: 'I', correct: false },
            { text: 'live', correct: false },
            { text: 'In', correct: false },
            { text: 'London', correct: true }
        ]
    },
    {
        question: 'Identify the verb in this sentence, "Mike left in a hurry."',
        answers: [
            { text: 'Mike', correct: false },
            { text: 'left', correct: true },
            { text: 'in', correct: false },
            { text: 'hurry', correct: false }
        ]
    },
    {
        question: 'Which sentence is grammatically correct " The tree ___ by lighting."',
        answers: [
            { text: 'was struck', correct: true },
            { text: 'struck', correct: false },
            { text: 'flashed', correct: false },
            { text: 'was flashed', correct: false },
        ]
    },
    {
        question: 'What are the vowels?',
        answers: [
            { text: 'AERTU', correct: false },
            { text: 'AEIOU', correct: true },
            { text: 'BCRQD', correct: false },
            { text: 'GFUOC', correct: false },
        ]
    },
    {
        question: 'What is the past tense of run?',
        answers: [
            { text: 'running', correct: false },
            { text: 'ran', correct: true },
            { text: 'rush', correct: false },
            { text: 'rain', correct: false }
        ]
    },
    {
        question: 'Identify the adjective in this sentence, "Suzy brought a beautiful flower to school on Wednesday."',
        answers: [
            { text: 'Suzy', correct: false },
            { text: 'beautiful', correct: true },
            { text: 'flower', correct: false },
            { text: 'school', correct: false }
        ]
    },
    {
        question: 'Which of the following is the synonyms for the word "hurry"?',
        answers: [
            { text: 'laugh', correct: false },
            { text: 'jump', correct: false },
            { text: 'love', correct: false },
            { text: 'rush', correct: true }
        ]
    },
    {
        question: 'Which of the following is not an animal?',
        answers: [
            { text: 'lion', correct: false },
            { text: 'chair', correct: true },
            { text: 'zebra', correct: false },
            { text: 'flamingo', correct: false }
        ]
    },


]