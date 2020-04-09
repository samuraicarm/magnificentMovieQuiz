//quiz variables
let currentQuestion = 0;
let score = 0;
let quizRank = " ";
let totalMovieQuestions = questions.length;

//get HTML elements
let container = document.getElementById('movieQuiz');
let startButton = document.getElementById('startButton');
let questionHolder = document.getElementById('questionHolder');
let introText = document.getElementById('introText')
let questionEl = document.getElementById('question');
let optionOne = document.getElementById('optionOne');
let optionTwo = document.getElementById('optionTwo');
let optionThree = document.getElementById('optionThree');
let optionFour = document.getElementById('optionFour');
let nextButton = document.getElementById('nextButton');
let resultCont = document.getElementById('result');
let playButton = document.getElementById('playButton')

//event listners
startButton.addEventListener('click',startQuiz)
playButton.addEventListener('click', reload)

//this function reloads the page to the start screen
function reload() {
    location.reload();
  }

//this function starts the quiz and hides intro text and start button
function startQuiz() {
    startButton.style.display = 'none';
    introText.style.display = 'none';
    questionHolder.style.display = '';
    displayQuestion(currentQuestion);
} 



//this function displays first question in index and displays current question number
function displayQuestion(questionIndex) {
    let quote = questions[questionIndex];
    questionEl.textContent = quote.question;
    optionOne.textContent = quote.optionOne;
    optionTwo.textContent = quote.optionTwo;
    optionThree.textContent = quote.optionThree;
    optionFour.textContent = quote.optionFour;

    document.getElementById("questionNumber").innerHTML = "Question " + (questionIndex + 1) + " of " + totalMovieQuestions;

};


//this function displays next question and keeps track of score then displays results
function displayNextQuestion () {

let selectedAnswer = document.querySelector('input[type=radio]:checked');
if (!selectedAnswer){
    alert('Whoops! Please select an answer below.');
    return;
}

let answer = selectedAnswer.value;
if(questions[currentQuestion].answer === answer){
   score ++;
}

selectedAnswer.checked = false;
currentQuestion++;

if(currentQuestion == totalMovieQuestions -1){
    nextButton.textContent= 'Finish';
}
if(currentQuestion == totalMovieQuestions ) {
    container.style.display = 'none';
    resultCont.style.display= '';
    let scoreText = $("#quizScore").text();
   $("#quizScore").text(scoreText + " " + score + " out of" + " " + totalMovieQuestions + " correct.");

   let messages = ["Watch more movies!", "Movie Noob", "Movie Lover","Movie Savant"];
   let range = 0;
       if (score <= 3) {
           range = 0;
       }
       
      if (score > 3 && score <= 6) {
       
           range = 1;
       }
     if (score > 6 && score <= 9) {
       
       range = 2;
       }
   
   if (score === 10) {
       range = 3;
   }
   document.getElementById("movieRank").innerHTML = "Your rank:" + " " + messages[range];
    }
    displayQuestion(currentQuestion);
}





