$(document).ready(function(){
    $("#quiz1").click(function(){
        let val = $(this).val();
        $.ajax({
            url: "http://localhost:3000/quiz/"+val,
            method: "GET",
            success:(x)=>{
                let active_flag = true;
                let questions = x.category1.questions;
                let strApp = "";
                console.log(questions);
                strApp = '<div class="row justify-content-center carousel slide" data-ride="carousel" data-interval="false" id="carouselId">';
                questions.forEach(element => {
                    if(active_flag){
                        active_flag = false;
                        strApp = strApp + '<div class="col-8 carousel-inner carousel-item active" role="listbox">';
                    }else{
                        strApp = strApp + '<div class="col-8 carousel-inner carousel-item" role="listbox">';
                    }
                    strApp = strApp + '<header><p class="lead">'+ element.question +'</p></header>';
                    // if(element['img-url'] != ""){
                    //     $("#quiz-area").append('<img >Image goes here</header>');
                    // }
                    strApp = strApp + '<section class="options">'+
                    '<h3>Options</h3><hr>'+
                    '<div class="choices">';
                    element.options.forEach(option => {
                        strApp = strApp + '<div class="choice">'+
                        '<input type="radio" name="qustion'+element.id+'" id="'+element.id+'" value="'+option+'"><p>'+option+'</p>'+
                        '</div>';
                    });
                    strApp = strApp + '</div></section></div>';
                })
                strApp = strApp +'<div class="col-12 text-center">'+
                    '<a class="" href="#carouselId" role="button" data-slide="prev">'+
                    '<button type="button" class="btn btn-success">Previous</button>'+
                    '<span class="sr-only">Previous</span>'+
                    '</a><a class="" href="#carouselId" role="button" data-slide="next">'+
                    '<button type="button" class="btn btn-success">Next</button>'+
                    '<span class="sr-only">Next</span></a></div>';
                strApp = strApp + '</div>';
                console.log(strApp);
                $("#quiz-area").append(strApp)
            }
        })
    })
})

