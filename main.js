$(document).ready(function() {
    start(questionNumber);

    $(".submit-answer").on("click", function(event) {

        var userAnswer = parseInt($(this).attr("id"));
        answerCheck(userAnswer);

        setTimeout(function() {
                    $(".submit-answer").removeClass("correctStyle incorrectStyle");
                    start(questionNumber);
                }, 1500)

        questionNumber++;
    });

    });

    var questionNumber = 0,
        totalCorrect = 0,
        optionFinal = 0;

    // Put your questions here
    // You can also remove or add more questions
    var allQuestions = [
        {
            question: "What is, 5+5 ?",
            choices: ["3", "0", "10", "12"],
            answer: 2}
        ,{
            question: "What is the tallest mountain in the World?",
            choices: ["Mount Everest", "Matterhorn", "Mont blanc", "Zugspitze"],
            answer: 0}
        ,{
            question: "Who is the richest person in Switzerland?",
            choices: ["André Hoffmann", "Ernesto Bertarelli", "Bill Gates", "Giorgio Armani"],
            answer: 1}
        ,{
            question: "What's the capital of Iceland?",
            choices: ["Bern", "Oslo", "Reykjavic", "Berlin"],
            answer: 2}
        ,{
            question: "What year was Heinz astablished?",
            choices: ["1669", "1869", "1912", "1749"],
            answer: 1}
        ,{
            question: "Which city had the first ever fashion week?",
            choices: ["Zürich", "New York", "Paris", "Milano"],
            answer: 1}
        ,{
            question: "What nut is in the middle of a Ferrero Rocher?",
            choices: ["Banana", "Hazelnut", "Walnut", "Apple"],
            answer: 1}
        ,{
            question: "What's the largest country in the World?",
            choices: ["Greenland", "China", "USA", "Russia"],
            answer: 3}
        ,{
            question: "Which city is brie cheese originally from?",
            choices: ["Basel", "Amsterdam", "Paris", "Michigan"],
            answer: 2}
        ,{
            question: "Which planet is closest to the sun?",
            choices: ["Mercury", "Earth", "Venus", "Pluto"],
            answer: 0}
    ];

    var result = [
        {
        comment: "You're Awesome!"},
        {
        comment: "Not Bad!"},
        {
        comment: "Bit Disappointed!"},
        {
        comment: "AAH C'MON!"}
        ];


    // Continue with next question or end
    var start = function(questionNumber) {
        $('h2').hide().fadeIn(400);

        if(questionNumber !== allQuestions.length){
            question(questionNumber);
        }else{
            end();
        }
    };

    // Show question and possible answers
    function question(questionNum) {
        $("h2").text(allQuestions[questionNum].question);

        $.each(allQuestions[questionNum].choices, function(i, answers){
            $("#" + i).html(answers);
        });
    };

    function end() {
    finalScreen();
    $("ul").hide();
    $("h2").text("You scored " + totalCorrect + " out of " + allQuestions.length + " " + result[optionFinal].comment);
    $("#try-again-container").show();
    restart();
    };

    // Result image accourding to correct answers
    function finalScreen() {
    if(totalCorrect < allQuestions.length && totalCorrect >= (allQuestions.length*.7)){
                optionFinal = 1;
        }else if(totalCorrect <= (allQuestions.length*.6) && totalCorrect >= (allQuestions.length*.2)){
            optionFinal = 2;
        }else if(totalCorrect !== allQuestions.length){
            optionFinal = 3;
        }
    }

    function restart(){
    $("#try-again").click(function(){
        questionNumber = 0,
        totalCorrect = 0,
        optionFinal = 0;

        start(questionNumber);
        $("#try-again-container").hide();
        $("ul").fadeIn(400);
    });
    } 

    function answerCheck(userAnswer) {
        var correctAnswer = allQuestions[questionNumber].answer;

        if (userAnswer === correctAnswer) {
            $("#" + userAnswer).addClass("correctStyle");
            totalCorrect++;
        }else{
            $("#" + userAnswer).addClass("incorrectStyle");
        }
    };