$(document).ready(function() {
    var numQuestion = 0;
    var totalPoints = 0;
    var correctAnswers = 0;
    reset();
    
    $('#howTo').click(function(e) {
        e.preventDefault();
        $('#welcome').hide();
        $('#howToPlay').show();
    });
    $('#returnGame').click(function(e) {
        e.preventDefault();
        $('#howToPlay').hide();
        $('#welcome').show();
    });
    // beginning a game
    $('#beginGame').click(function(e) {
        e.preventDefault();
        numQuestion++;
        $('nav').show();
        $('#welcome').hide();
        $('#questions').show();
        $('.question').hide();
        $('#question' + numQuestion).show();
        $('#questionNumber span').text(numQuestion);
        $('#totalScore span').text(totalPoints);
    });
    // submitting your answer
    $('#submit').click(function(e) {
        e.preventDefault();
        var correct;
        var question = $('#question' + numQuestion);
        var points = parseInt(question.data('points'), 0);
        var correctAnswer = parseInt(question.data('ca'), 0);
        var selectedAnswer = parseInt(question.find('input[type="radio"]:checked').val(), 0);
        var correctOrNot = $('#answer' + numQuestion).find('.correctOrNot');
        var addedOrNot = $('#answer' + numQuestion).find('.addedOrNot');
        if (selectedAnswer == correctAnswer){
            totalPoints += points;
            correct = 'Correct!';
            correctOrNot.text(correct);
            addedOrNot.text('added!');
            correctAnswers++;
            $('#totalScore span').text(totalPoints);
            $('#questions').hide();
            $('#answers').show();
            $('.answer').hide();
            $('#answer' + numQuestion).show();
        } else {
            totalPoints -= points;
            correct = 'Incorrect';
            correctOrNot.text(correct);
            addedOrNot.text('subtracted!');
            $('#totalScore span').text(totalPoints);
            $('#questions').hide();
            $('#answers').show();
            $('.answer').hide();
            $('#answer' + numQuestion).show();
        }
    });
    // moving to the next question
    $('#nextQuestion').click(function(e) {
        e.preventDefault();
        numQuestion++;
        $('#answers').hide();
        $('#questions').show();
        $('.question').hide();
        $('#question' + numQuestion).show();
        $('#questionNumber span').text(numQuestion);
        if (numQuestion == 4) {
            $('#nextQuestion').text('Final Question');
        }
        if (numQuestion == 5) {
            $('#nextQuestion').hide();
            $('#resultsShow').show().click(function(e) {
                e.preventDefault();
                $('#questions').hide();
                $('#answers').hide();
                $('#results').show();
                $('#questionNumber span').text(5);
                $('#correctAnswers').text(correctAnswers);
                $('#points').text(totalPoints);
                numQuestion = 0;
            });
        }
    });
    // resetting for a new game
    $('#playAgain').click(function(e) {
        e.preventDefault();
        reset();
        numQuestion = 0;
        totalPoints = 0;
        correctAnswers = 0;
    });
});
function reset() {
    // hiding unneeded sections at start/restart of game
    $('#howToPlay').hide();
    $('#questions').hide();
    $('#answers').hide();
    $('#results').hide();
    $('nav').hide();
    $('#welcome').show();
    $('input[type="radio"]').prop('checked', false);
    $('#resultsShow').hide();
    $('#nextQuestion').show().text('Next Question');
}