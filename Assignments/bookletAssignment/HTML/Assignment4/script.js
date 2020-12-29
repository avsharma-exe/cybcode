var work;
function fibonacci(){
    if(window.Worker){
        work = new Worker('worker.js');
        work.postMessage("Fibonacci");
        document.getElementById("start").innerHTML = "Hey it's started have patience";
        work.onmessage = function(e){
            document.getElementById("content").innerHTML = e.data;
        }
    }
}


function dname(){
    document.getElementById("msg").innerHTML = "Ayush Sharma";
}