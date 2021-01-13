var questions = [];
var answers = [];
var quizdata =[];
var i = -1;
var response = [];
var timer;
var userId = 1; //sessionStorage.getItem('UserId')
var subject = "";
var web;
var minutes = 0;
var seconds = 0;
var categoryId = 1;
//console.log(userId);

$(document).ready(function(){
    $.ajax(
    {
        url : "http://localhost:3000/categories/"+categoryId+"/questions",
        method : "GET",
        async  : false,
        success : function(e){
            //console.log(e);
            e.forEach(element => {
                quizdata.push(element);
                questions.push(element.question);
            });
            
        }
    }
    )

    console.log(quizdata);
    if(!sessionStorage.getItem("timer")){
        sessionStorage.setItem("timer",(new Date()).valueOf())
    }
    if (typeof(Worker)!=="undefined"){
        // Check whether Web Worker has been created. If not, create a new Web Worker based on the Javascript file simple-timer.js
        if (web==null){
           web = new Worker("../script/worker.js");
        }
        // Update timer div with output from Web Worker
        web.postMessage(sessionStorage.getItem('timer'));
        web.onmessage = function (event) {
            //console.log(event.data.seconds)
            if(event.data.minutes >= 03) {
                $('#submit').click();
            }
            $("#timer").html(event.data.minutes + ':' + event.data.seconds);
            minutes = event.data.minutes;
            seconds = event.data.seconds;
        };
     } else {
        // Web workers are not supported by your browser
        document.getElementById("timer").innerHTML = "Sorry, your browser does not support Web Workers ...";
     }
    
    $("input[type='radio']").click(function () {

        var ans = $('input[name="option"]:checked').val();
        //console.log($('input[name="option"]:checked').val());
        if (ans) {
            //console.log(response);
            response[i] = ans;
        }

    });

    createQuestion();

    function createQuestion(){
        
        if (i < questions.length - 1) {
            i++;
            $("input[name='option']").prop('checked', false);
            //console.log(soptions[i]);
            $('#question').text(questions[i]);
            //console.log(questions[i]);

            // Attaching options to innerhtml 
            $('#btnradio1').val(quizdata[i].option1);
            $('#ops1').text('1. ' + quizdata[i].option1);

            $('#btnradio2').val(quizdata[i].option2);
            $('#ops2').text('2. ' + quizdata[i].option2);

            $('#btnradio3').val(quizdata[i].option3);
            $('#ops3').text('3. ' + quizdata[i].option3);

            $('#btnradio4').val(quizdata[i].option4);
            $('#ops4').text('4. ' + quizdata[i].option4);
            if (response[i]) {
                $(`input[name="option"][value="${response[i]}"]`).prop('checked', true);
            }
        }
    }

    function resetQuestion(){
        if (i > 0) {
            
            i--;
            $("input[name='option']").prop('checked', false);
            // Attaching question to innerhtml 
            $('#question').text(questions[i]);
            //console.log(questions[i]);

            // Attaching options to innerhtml 
            $('#btnradio1').val(quizdata[i].option1);
            $('#ops1').text('1. ' + quizdata[i].option1);

            $('#btnradio2').val(quizdata[i].option2);
            $('#ops2').text('2. ' + quizdata[i].option2);

            $('#btnradio3').val(quizdata[i].option3);
            $('#ops3').text('3. ' + quizdata[i].option3);

            $('#btnradio4').val(quizdata[i].option4);
            $('#ops4').text('4. ' + quizdata[i].option4);


            //Restoring the already clicked answer of previous question on prev button click.
                
            $(`input[name="option"][value="${response[i]}"]`).prop('checked', true);
        }
    }

    $('#next-btn').click(function () {
        createQuestion();
    })
    $('#previous-btn').click(function () {
        resetQuestion();
    })
    
    $('#submit').click(function () {

        //Stop the timer;
        let marks = 0;
        // w.terminate();
        // w = undefined;

        // loop for checking correct responses submitted by user.
        $.ajax({
            type:"GET",
            async:false,
            url:"http://localhost:3000/categories/"+categoryId+"/answers",
            success:function(res){
                res.forEach(element => {
                    answers.push(element.answer)
                });
            }
        })
        // console.log(answers)
        // console.log(response)
        for (let j = 0; j < answers.length; j++) {
            if (response[j] == answers[j]) {
                marks++;
            }
        }
        // console.log(marks);

        // Storing result to localStorage (result page can fetch it -- on result.js).
        let wrong = questions.length - marks;
        let percent = marks / questions.length * 100;

        //Getting date and time;
        let datetime = new Date();
        let time = datetime.toTimeString().split(" ")[0]
        let date = datetime.getDate()+'/'+(parseInt(datetime.getMonth())+1)+'/'+datetime.getFullYear();
        //saving score to db.json
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/quiz_data",
            dataType: "json",
            async: false,
            success: function (msg) {
                if (msg) {
                    console.log(msg);
                } else {
                    console.log("Cannot add to list !");
                }
            },

            data: {
                "userId": userId,
                "categoryId": categoryId,
                "marks": marks,
                "totalMarks": questions.length,
                "timeElapsed": minutes+':'+seconds,
                "dateTime": date+ ' : '+time
            }
        });
        sessionStorage.setItem("marks",marks);
        sessionStorage.setItem("totalQues",questions.length);
        sessionStorage.setItem("subject",subject);
        sessionStorage.setItem("time",minutes+':'+seconds);
        sessionStorage.setItem("percentage",percent);
        window.open("../html/scoreCard.html",'_self') ;

    })
});