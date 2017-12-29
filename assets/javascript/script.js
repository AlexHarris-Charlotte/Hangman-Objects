// Pseudocode
// Need to recreate my hangman game only using Objects
// Create an object to store user Inputs
// Create an object that stores questions and answers
// Compare user input to the associated answer in the question/answer object
// create an object of gifs/images that will play upon a correct or incorrect answer
// increment a guess count if the user input is not found in the answer
// increment wins and losses based on the outcome of each round
// Do not allow user inputs to be duplicated.
// randomly generate a question/answer pair and display it to the user in the DOM


// Variables
var userInput;
var userInputArray = [];
var hiddenAnswer = "";


// Question object constructor
function Question(question, answer, gif) {
    this.question = question;
    this.answer = answer;
    this.gif = gif;
}

// Question objects for each question/answer pair
var lebron = new Question("Year Lebron James was drafted?", "2003", "https://media0.giphy.com/media/3o7aTp7JTuH7Gq0wZq/200.gif#39-grid1");
var oscar = new Question("First player to average a triple double?", "OscarRobertson", "https://media0.giphy.com/media/l46CqLVMWzaJUFPLW/200.gif#1-grid1");
var hugo = new Question("Mascot name of the Charlotte Hornets?", "Hugo", "https://media.giphy.com/media/ey4n1uHjW9NDi/giphy.gif");
var jordan = new Question("What number was Michael Jordan Drafted?", "Two", "https://media.giphy.com/media/3ogwG6tSdxbFc3RaFy/200.gif#42-grid1");
var celtics = new Question("Who won the NBA Championship in 2008", "Celtics", "https://media0.giphy.com/media/l0Iy8vkimrfQAUc6s/200.gif#5-grid1");
var julius = new Question("Doesn't actually have a PHD", "DrJ", "https://media2.giphy.com/media/phTVBiigthPCU/200.gif#16-grid1");

var objectArray = [lebron, oscar, hugo, jordan, celtics, julius];
var random = Math.floor(Math.random() * objectArray.length);

getRandomValues();
// Collect keypress and store to userInput
$(document).on("keypress", function(event) {
    userInput = event.key;
    console.log(userInput);
    duplicateTest();
})

// Functions
function duplicateTest() {
    if(userInputArray.indexOf(userInput) === -1) {
        userInputArray.push(userInput);
        console.log(userInputArray);
        var randomAnswer = objectArray[random].answer;
        if(randomAnswer.includes(userInput)) {
            hiddenAnswer.indexOf(userInput) = randomAnswer.indexOf(userInput);
        }
    } 
}

function getRandomValues() {
    var randomQuestion = objectArray[random].question;
    var randomAnswer = objectArray[random].answer;
    $("#question").text(randomQuestion);
    for(var i = 0; i < randomAnswer.length; i++) {
        hiddenAnswer += " -";
        console.log(hiddenAnswer);
    }
    $("#answer").text(hiddenAnswer);
}