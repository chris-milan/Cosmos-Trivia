
$("#triviaBox").hide();
$("#endBox").hide();
$(document).ready(function () {
    var timer = 60;
    var doneButtonClicked = false;
    var intervalId;

    $("#startButton").click(function() {  
        $("#startBox").hide();
        $("#triviaBox").show();
        $("#doneButton").click(function() {
            doneButtonClicked = true;
        });
        
    //countdown
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
        run();
    function stop() {
      clearInterval(intervalId);
    }

    //start trivia
    function decrement() {
        timer--;
        $("#timer").html(timer);
        
        if (timer === 0 || doneButtonClicked) {
            stop();
            $("#triviaBox").hide();
            $("#endBox").show();

    // adds/substracts to the score based on selected radio button value // 
        var correct = $('#questions[value="y"]:checked');
        var correctAnswers = correct.length;
        var incorrect = $('#questions[value="x"]:checked');
        var incorrectAnswers = incorrect.length;

        var unAnswered = 10 - (correctAnswers + incorrectAnswers);
            
    // score screen //
            $("#endBox").html("<h2> Correct Answers: " + correctAnswers + "</h2>" + "<h2>Incorrect Answers: " + incorrectAnswers + "</h2>" + "<h2> Unanswered: " + unAnswered + "</h2>")
      }
    }          
 });      
});
    
        
        
        

                  