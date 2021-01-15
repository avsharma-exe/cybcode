$(document).ready(function(){
    // -----------------Filling the scores ----------------
    $("#marks").append(sessionStorage.getItem("marks")+"/"+sessionStorage.getItem("totalQues"));
    $("#percent").append(sessionStorage.getItem("percentage")+" %");
    $("#time").append(sessionStorage.getItem("time")+" min");
    $("#quiz-title").append(sessionStorage.getItem("subject"));
    let p = sessionStorage.getItem("percentage"); 
    if(p>30){
        if(p>90){
            $('#emoji').attr("src","../Avatars/pro.png");
        }else{
            $('#emoji').attr("src","../Avatars/above.png");
        }
    }else{
        $('#emoji').attr("src","../Avatars/noob.png");
    }

    //----------------required variables for graph--------------------
    var marks = [];
    var labels = [];
    var label;
    // console.log(sessionStorage.getItem("userId"));
    var link = "http://localhost:3000/users/"+sessionStorage.getItem("userId")+"/quiz_data?categoryId="+sessionStorage.getItem("categoryId")
    //console.log(link)
    
    
    //-----------------fetching previous exam datas-----------------
    $.ajax({
        type: "GET",
        async: "false",
        url: link,
        success: function (response) {
            response.forEach(element => {
                marks.push(element.marks),
                label = element.dateTime.split(" "),
                labels.push(label[0])
            });
            //--------------calling create graph here-------------
            createGraph();
        }
    });

    //-----------graph creation here---------------
    function createGraph(){
        //console.log(labels);
        var ctx = $("#myChart")[0].getContext('2d');
        var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Previous Performance',
                data: marks,
                backgroundColor: 'rgba(36, 38, 51, 0.9)',
                borderWidth: 1,
                barPercentage: 0.8,
                responsive: true,
                
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    }
})