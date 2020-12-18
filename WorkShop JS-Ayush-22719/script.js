var flag = 0;
var hisData= [];
function del1(){
    document.getElementById("result").value = document.getElementById("result").value.slice(0,-1);
}
function clearf(){ 
    document.getElementById("result").value = "" ;
    document.getElementById("output").value = "" ;
} 
function displaySci(){
    if(!flag){
        flag = 1;
        document.getElementById("sci").style.display = "contents";
        document.body.style.backgroundImage = "url('im.jpg')";
        document.getElementById("calc").style.backgroundColor = "red";
        document.getElementById("mode").style.display = "block";

        
    }else{
        document.getElementById("sci").style.display = "none";
        document.body.style.backgroundImage = "url('Tony.png')"; 
        document.getElementById("calc").style.backgroundColor = "#96897f"; 
        document.getElementById("mode").style.display = "none";
        flag=0;
    }
    
}

function display(val) { 
    document.getElementById("result").value+=val;
} 

function result(data){
    try {
        var toEval = document.getElementById("result").value.replace("√", "Math.sqrt");
        document.getElementById("output").value = eval(toEval);
        hisData.push(eval(toEval));
    }catch (e) {
        document.getElementById("output").value = 'Error';
    }
} 

function squareroot() {
    var val = document.getElementById("result").value;
    document.getElementById("result").value = "√(" + val + ")";
}

function history(){
    if(hisData.length){
        document.getElementById("output").value = hisData.pop();
    }else{
        document.getElementById("output").value = "No Values";
    }
}
