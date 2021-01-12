var questions = [];
var soptions = [];
var answers = [];
var i = -1;
var response = [];
var timer;
var userId = sessionStorage.getItem('UserId');
var subject = "";
var web;
var minutes = 0;
var seconds = 0;
//console.log(userId);

$(document).ready(function(){
    $.ajax(
    {
        url : "http://localhost:3000/quiz/1",
        method : "GET",
        async  : false,
        success : function(e){
            //console.log(e);
            e.questions.forEach(element => {
                subject = e.name;
                questions.push(element.question);
                soptions.push(element.options);
                answers.push(element.answer);
            });
            
        }
        
    }
    )
    if(!sessionStorage.getItem("timer")){
        sessionStorage.setItem("timer",(new Date()).valueOf())
    }
    if (typeof(Worker)!=="undefined"){
        // Check whether Web Worker has been created. If not, create a new Web Worker based on the Javascript file simple-timer.js
        if (web==null){
           web = new Worker("../js/worker.js");
        }
        // Update timer div with output from Web Worker
        web.postMessage(sessionStorage.getItem('timer'));
        web.onmessage = function (event) {
            //console.log(event.data.seconds)
            if(event.data.minutes >= 02) {
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
            //console.log(ans + ' ' + i);
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
            $('#btnradio1').val(soptions[i][0].option1);
            $('#ops1').text('1. ' + soptions[i][0].option1);

            $('#btnradio2').val(soptions[i][0].option2);
            $('#ops2').text('2. ' + soptions[i][0].option2);

            $('#btnradio3').val(soptions[i][0].option3);
            $('#ops3').text('3. ' + soptions[i][0].option3);

            $('#btnradio4').val(soptions[i][0].option4);
            $('#ops4').text('4. ' + soptions[i][0].option4);

            if (response[i]) {
                $(`input[name="option"][value="${response[i]}"]`).prop('checked', true);
            }
        }
    }

    function resetQuestion(){
        if (i > 0) {

            i--;

            // Attaching question to innerhtml 
            $('#question').text(questions[i]);
            //console.log(questions[i]);

            // Attaching options to innerhtml 
            $('#btnradio1').val(soptions[i][0].option1);
            $('#ops1').text('1. ' + soptions[i][0].option1);

            $('#btnradio2').val(soptions[i][0].option2);
            $('#ops2').text('2. ' + soptions[i][0].option2);

            $('#btnradio3').val(soptions[i][0].option3);
            $('#ops3').text('3. ' + soptions[i][0].option3);

            $('#btnradio4').val(soptions[i][0].option4);
            $('#ops4').text('4. ' + soptions[i][0].option4);


            $('#currQus').text(i + 1);

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
        console.log(answers);
        console.log(response);
        for (let j = 0; j < questions.length; j++) {
            if (response[j] == answers[j]) {
                marks++;
            }
        }
        console.log(marks);

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
            url: "http://localhost:3000/user",
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
                "userid": userId,
                "subject": subject,
                "marksObtained": marks,
                "totalMarks": questions.length,
                "timeElapsed": minutes+':'+seconds,
                "dateTime": date+ ' : '+time
            }
        });
        sessionStorage.setItem("marks",marks);
        sessionStorage.setItem("totalQues",questions.length);
        sessionStorage.setItem("subject",subject);
        sessionStorage.setItem("time",wrong);
        sessionStorage.setItem("percentage",percent);
        window.open("../html/scoreCard.html",'_self') ;

    })
    $("#marks").append(sessionStorage.getItem("marks")+"/"+sessionStorage.getItem("totalQues"));
    $("#percent").append(sessionStorage.getItem("percentage"));


});