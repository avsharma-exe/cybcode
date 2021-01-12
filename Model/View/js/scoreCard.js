$(document).ready(function(){
    $("#marks").append(sessionStorage.getItem("marks")+"/"+sessionStorage.getItem("totalQues"));
    $("#percent").append(sessionStorage.getItem("percentage")+"%");
    $("#time").append(sessionStorage.getItem("time")+" min");
    $("#quiz-title").append(sessionStorage.getItem("subject"))
})