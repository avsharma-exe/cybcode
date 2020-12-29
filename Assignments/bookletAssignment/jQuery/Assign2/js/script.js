$(document).ready(function(){
    $('#show').click(function(){
        if($('#password').attr("type")==="password")
            $('#password').attr("type","text");
        else{
            $('#password').attr("type","password");
        }
    })
    $(".chosen-select").chosen({disable_search_threshold: 10});
})