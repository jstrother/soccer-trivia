$(document).ready(function() {
    var numQuestion = 1;
    var totalPoints = 0;
    var question = $('#question' + numQuestion);
    var answer = $('#answer' + numQuestion);
    var correctOrNot = answer.find('.correctOrNot');
    var addedOrNot = answer.find('.addedOrNot');
    // hiding unneeded sections at start of game
    $('#howToPlay').hide();
    $('#questions').hide();
    $('#answers').hide();
    $('#results').hide();
    $('nav').hide();
    // opening and closing #howToPlay
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
        $('nav').show();
        $('#welcome').hide();
        $('#questions').show();
        $('.question').hide();
        question.show();
        $('#questionNumber span').text(numQuestion);
        $('#totalScore span').text(totalPoints);
    });
    // submitting your answer
    $('#submit').click(function(e) {
        e.preventDefault();
        var correct;
        var points = parseInt(question.data('points'));
        var correctAnswer = parseInt(question.data('ca'));
        var selectedAnswer = parseInt(question.find('input[type="radio"]:checked').val());
        if (selectedAnswer == correctAnswer){
            totalPoints += points;
            correct = 'Correct!';
            $('#totalScore span').text(totalPoints);
            $('#questions').hide();
            $('#answers').show();
            $('.answer').hide();
            answer.show();
            correctOrNot.text(correct);
            addedOrNot.text('added!');
        } else {
            totalPoints -= points;
            correct = 'Incorrect';
            $('#totalScore span').text(totalPoints);
            $('#questions').hide();
            $('#answers').show();
            $('.answer').hide();
            answer.show();
            correctOrNot.text(correct);
            addedOrNot.text('subtracted!');
        }
    });
    // moving to the next question
})