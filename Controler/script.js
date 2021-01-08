$(document).ready(function(){
    $("#quiz1").click(function(){
        let val = $(this).val();
        $.ajax({
            url: "http://localhost:3000/quiz/"+val,
            method: "GET",
            success:(x)=>{
                let active_flag = true;
                let questions = x.category1.questions;
                console.log(questions);
                questions.forEach(element => {
                    if(active_flag){
                        active_flag = false;
                        $("#quiz-section").append('<div class="carousel-item  active" data-interval="false"><div class="card">');
                    }else{
                        $("#quiz-section").append('<div class="carousel-item" data-interval="false"><div class="card">');
                    }
                    $("#quiz-section").append('<h5 class="card-title">'+ element.question +'</h5>'+
                    '<img class="card-img-top" src="" alt="">'+
                    '<div class="card-body">'+
                    '<p class="card-text">Options.</p>'+
                    '</div>'+
                    '<ul class="list-group list-group-flush">');
                    console.log(element.options);
                    element.options.forEach(option => {
                        $("#quiz-section").append('<li class="list-group-item"><input type="radio" id="que-'+ element.id +'" value="'+ option +'"/>'+ option +'</li>');
                    });
                    $("#quiz-section").append('<div class="card-body"><a href="#" class="card-link">Card link</a>'+
                    '<a href="#" class="card-link">Another link</a></div></div>'
                    );
                });
            }
        })
    })

    
})

