var questions = [];
var soptions = [];
var answers = [];
var i = 0;
var response;
var timer;
var userId = sessionStorage.getItem('User');
console.log(userId);

$(document).ready(function(){
    $('.category').click(function(){
        console.log(this.value);
        $.ajax(
        {
            url : "http://localhost:3000/quiz/"+this.value,
            method : "GET",
            async  : false,
            success : function(e){
                console.log(e);
                e.questions.forEach(element => {
                    questions.push(element.question);
                    soptions.push(element.options);
                    answers.push(element.answer)
                });
                console.log(questions + soptions + answers);
                $("#question-container").removeClass("hide");
                $("#next-btn").removeClass("hide");
                resetState();
                createQuestion();
            }
            
        }
        ) 
    })

    function createQuestion(){
        i++;
        $("#question").text(questions[i]);
        soptions[i].forEach(element => {
            $("#answer-buttons").append('<button class="btn" value="'+element+'">' +element+ '</button>')
            $("#answer-buttons .btn").on("click",setNextQuestion())
        });
    }

    function resetState(){
        $("#answer-buttons").empty();
    }

    
    
});