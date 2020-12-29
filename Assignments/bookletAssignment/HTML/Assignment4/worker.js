onmessage = function(e) {
    console.log('Message received from main script');
    var fib = 1;
    for(var i = 0 ; i<10; i++){
        task(fib);
        fib = Math.round(fib *= 1.6180339887);
    }
}
function task(i) { 
    setTimeout(function() { 
        postMessage(i); 
    }, 100*i); 
} 