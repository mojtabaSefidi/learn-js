var input;
var score = 0;

var Question = function (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnwser = correctAnswer;
}

var Q1_birth = new Question('what\'s my birth date?', ["1999.1.1", "1998.1.1", "1999.1.2"], 1);
var Q2_sport = new Question('what\'s my favorite sport?', ["football", "swimming", "volleyball", "ping-pong"], 1);
var Q3_study = new Question('I\'m studing ... in university?', ["computer science", "software enginneer", "mechanic"], 0);
var Q4_footballTeam = new Question('what\'s my favorite football team?', ["liverpool", "bayern", "realmadrid", "juventus"], 2);

var questions = [Q1_birth, Q2_sport, Q3_study, Q4_footballTeam];

Question.prototype.QuestionMaker = function () {
    console.log(this.question);
    for (let i = 0; i < this.answers.length; i++) {
        console.log((i + 1) + ". " + this.answers[i]);
    }
}
Question.prototype.AnswerChecker = function (answer) {
    if (this.correctAnwser == answer - 1) {
        console.log("congratulations! You select correct answer!");
        return true;
    } else {
        console.log("wrong answer!? make effort for next time.");
        return false;
    }
}

while (true) {
    var selector = function (length) {
        return (Math.floor(Math.random() * length));
    }

    function get_answer() {
        var user_answer = prompt('which answer is the correct? (just write the number)')
        return user_answer;
    }
    var random = selector(questions.length);
    questions[random].QuestionMaker();
    input = get_answer()
    if (input === 'exit') break;
    if (questions[random].AnswerChecker(parseInt(input))) {
        score += 1
        console.log("Your score is " + score);
    } else {
        console.log("Your score is " + score);
    }

}