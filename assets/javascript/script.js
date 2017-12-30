
// Variables
var userInput;
var userInputArray = [];
var guessArray = [];
var hiddenAnswer = [];
var hiddenAnswerString;
var wins = 0;
var guesses = 6;
var losses = 0;


// Question object constructor
function Question(question, answer, gif) {
    this.question = question;
    this.answer = answer;
    this.gif = gif;
}

// Question objects for each question/answer pair
var lebron = new Question("Year Lebron James was drafted?", "2003", "https://media0.giphy.com/media/3o7aTp7JTuH7Gq0wZq/200.gif#39-grid1");
var oscar = new Question("First player to average a triple double?", "OscarRobertson", "https://media.giphy.com/media/ey4n1uHjW9NDi/giphy.gif");
var hugo = new Question("Mascot name of the Charlotte Hornets?", "Hugo", "https://media0.giphy.com/media/l0Iy8vkimrfQAUc6s/200.gif#5-grid1");
var jordan = new Question("What number was Michael Jordan Drafted?", "Two", "https://media0.giphy.com/media/l46CqLVMWzaJUFPLW/200.gif#1-grid1");
var celtics = new Question("Who won the NBA Championship in 2008", "Celtics", "https://media.giphy.com/media/3ogwG6tSdxbFc3RaFy/200.gif#42-grid1");
var julius = new Question("Doesn't actually have a PHD", "DrJ", "https://media2.giphy.com/media/phTVBiigthPCU/200.gif#16-grid1");

var objectArray = [lebron, oscar, hugo, jordan, celtics, julius];
var randomIndex = Math.floor(Math.random() * objectArray.length);
var randomAnswer = objectArray[randomIndex].answer.toLowerCase();
var randomQuestion = objectArray[randomIndex].question;



$("#question").text(randomQuestion);
underScores();
// Collect keypress and store to userInput
$(document).on("keypress", function(event) {
    userInput = event.key;
    duplicateTest();
    winConditions();
})

// Functions
function duplicateTest() {
    if(userInputArray.indexOf(userInput) === -1) {
        userInputArray.push(userInput);
        if(randomAnswer.includes(userInput)) {
            for(var i = 0; i < randomAnswer.length; i++) {
                if(randomAnswer[i] === userInput) {
                    hiddenAnswer[i] = userInput;
                    $("#answer").text(hiddenAnswer.join(" "));
                }
            }
        } else {
            guesses--;
            guessArray.push(" " + userInput);
            $("#guesses").text(guessArray);
            $("#guesses-left").text(guesses);
        }
        
    } 
}

function winConditions() {
    if(guesses === 0) {
        userInputArray = [];
        guessArray = [];
        $("#guesses").text(guessArray);
        losses++;
        $("#loss").text(losses);
        guesses = 6;
        $("#guesses-left").text(guesses);
        $("p").remove("#loss-statement");
        var lossStatement = $("<p id=loss-statement>");
        $("#win-image").height(325);
        $("#win-image").attr("src", "https://windycitizensports.files.wordpress.com/2012/04/lebron-crying.jpg?w=470")
        lossStatement.text("You Lost! The previous Answer was " + randomAnswer);
        lossStatement.insertBefore("#question");
        getRandomValues();
        underScores();
    }
    if(hiddenAnswer.join("") === randomAnswer) {
        guessArray = [];
        $("#guesses").text(guessArray);
        userInputArray = [];
        wins++;
        $("#win").text(wins);
        $("#win-image").height(325);
        $("#win-image").attr("src", objectArray[randomIndex].gif);
        getRandomValues();
        underScores();
     } 
}

function getRandomValues() {
    randomIndex = Math.floor(Math.random() * objectArray.length);
    randomAnswer = objectArray[randomIndex].answer.toLowerCase();
    randomQuestion = objectArray[randomIndex].question;
    $("#question").text(randomQuestion);
}

function underScores() {
    hiddenAnswer = [];
    for(var i = 0; i < randomAnswer.length; i++) {
        hiddenAnswer[i] = "_";
        hiddenAnswerString = hiddenAnswer.join(" ");
    }
    $("#answer").text(hiddenAnswerString);
}