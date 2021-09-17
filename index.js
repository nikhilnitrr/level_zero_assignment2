// Importing libraries
var readLineSync = require('readline-sync');
var chalk=require('chalk');

//Global variable
var score = 0;

//Introduction
function welcome()
{
  var userName=readLineSync.question(chalk.yellow("What is your name? "));
  console.log(chalk.green("Welcome "+userName+" to THE POLITICAL QUIZ !!! "));
  console.log('\n');
}

// Question List
var questionList = [
  {
    question: "Who is Prime Minister of India? ",
    options: ['Narendra Modi', 'VK Singh', 'Yogi Aditya Nath'],
    answer: "Narendra Modi"
  },
  {
    question: "Who is Chief Minister of Bihar? ",
    options: ['Raman Singh', 'Sushil Kumar Modi', 'Nitish Kumar'],
    answer: "Nitish Kumar"
  },
  {
    question: "Who was the first President of India? ",
    options: ['Pandit Jawahar Lal Nehru', 'Dr. Rajendra Prasad', 'Murli Manohar Joshi'],
    answer: "Dr. Rajendra Prasad"
  },
  {
    question: "How many seats are there in Rajya Sabha? ",
    options: ['250', '290', '198'],
    answer: "250"
  },
  {
    question: "How many times a person can be elected as Prime Minister of India? ",
    options: ['1', '2', 'No bar'],
    answer: "No bar"
  },
]

//High Scores List
var highScores = [
  {
    name: "Manish",
    score: 10
  },
  {
    name: "Raj",
    score: 9
  }
]

//Quiz function
function quiz(question, options, answer) 
{
  console.log(chalk.yellow(question));

  var index = readLineSync.keyInSelect(options, 'Select your answer by pressing a key from ', { cancel: 'Skip this question' });
  console.log('\n');


  if (options[index] === answer) {
    score = score + 1;
    console.log(chalk.green("Right answer !!"));
  }


  else if (index === -1) {
    console.log(chalk.blue("Question Skipped !!"));
  }



  else {
    score = score - 1;
    console.log(chalk.red("Wrong answer !!"));
  }


  console.log("Current score " + score);
  console.log("---------------------");
  console.log('\n');
}

// Function to play quiz
function playQuiz()
{
  for (var i = 0; i < questionList.length; i = i + 1) 
  {
    quiz(questionList[i].question, questionList[i].options, questionList[i].answer);
  }
}

// Function to print final score
function getScore()
{
  console.log(chalk.blue("Your final score is " + score));
  console.log(chalk.blue("High scores are: "));
  for (var i = 0; i < highScores.length; i++) 
  {
    console.log(highScores[i]);
  }
}

// Calling functions
welcome();
playQuiz();
getScore();

console.log('\n');
console.log(chalk.red("If you beat the high score share your screenshot and I'll update it "));