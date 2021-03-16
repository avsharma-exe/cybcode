$(document).ready(function(){
    $.ajax({
        url:'http://localhost:3000/users/',
        type:'get',
        success:function(response){
            // console.log(response);
            // console.log(response.length);
                    $('#counter1').html(response.length);
                   
        }
    });

    $.ajax({
        url:'http://localhost:3000/questions/',
        type:'get',
        success:function(response){
            // console.log(response);
            // console.log(response.length);
                    $('#counter2').html(response.length);
        }
    });
    $.ajax({
        url:'http://localhost:3000/categories/',
        type:'get',
        success:function(response){
            // console.log(response);
            // console.log(response.length);
                    $('#counter3').html(response.length);
        }
    });

    // Counter Incrementer -------------------------------

//     $('.counter').each(function () {
//         $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//         }, {
//         duration: 4000,
//         easing: 'swing',
//         step: function (now) {
//         $(this).text(Math.ceil(now));
//         }
//         });
//         });
});