/*You should create an array named questions.
The questions array should contain at least five objects, each having the keys category, question,
 choices, and answer.
The category key should have the value of a string representing a question category.
The question key should have the value of a string representing a question.
The choices key should have the value of an array containing three strings, which are alternative
 answers to the question.
The answer key should have the value of a string, representing the correct answer to the question.
 Also, the value of answer should be included in the choices array.
You should have a function named getRandomQuestion that takes an array of questions as a parameter
 and returns a random question object from the array.
You should have a function named getRandomComputerChoice that takes the array of the available
 choices as a parameter, and returns a random answer to the selected question.
You should have a function named getResults that takes the question object as the first parameter
and the computer's choice as the second parameter. The function should return The computer's 
choice is correct! if the answer is correct. Otherwise, it returns The computer's choice is wrong.
The correct answer is: <correct-answer>, where <correct-answer> is the value of the correct answer
to the chosen question.*/ 



const questions = [
  {
    category: "loodus",
    question: "Mis värvi on lehm?",
    choices: ["pruun", "must", "valge"],
    answer: "pruun"
  },
  {
    category: "teadus",
    question: "Mis planeedil me elame?",
    choices: ["Marss", "Maa", "Veenus"],
    answer: "Maa"
  },
  {
    category: "matemaatika",
    question: "Kui palju on 2 + 2?",
    choices: ["3", "4", "5"],
    answer: "4"
  },
  {
    category: "ajalugu",
    question: "Kes oli USA esimene president?",
    choices: ["Abraham Lincoln", "George Washington", "John Adams"],
    answer: "George Washington"
  },
  {
    category: "geograafia",
    question: "Mis on Prantsusmaa pealinn?",
    choices: ["Berliin", "Pariis", "Rooma"],
    answer: "Pariis"
  }
];

function getRandomQuestion(questions) {
  const index = Math.floor(Math.random() * questions.length)
  return questions[index]
}

function getRandomComputerChoice(choices) {
  const index = Math.floor(Math.random() * choices.length)
  return choices[index]
}

function getResults(question, choice) {
  if (choice === question.answer) {
    return "The computer's choice is correct!"
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
}

