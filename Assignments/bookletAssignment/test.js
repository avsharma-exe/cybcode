function setup(){
    var num;
    gAN = function(){
        alert(num);
    }
    gIN = function(){
        num++;
    }
    gSN = function(a){
        num = a;
    }
}
//IIFI

var abc = (function(){
    var xyz = 100;
    function pW(){
        console.log("Inside Private"+xyz);
    }
    return {
        puW: function(){
            pW();
            console.log(xyz);
        }
    };
})();

Object.defineProperty(Array.prototype,'last',{get: function(){
    return this[this.length-1];
}})


var singleTon = (function (){
 var instance;
 function createInstance(){
     var object = new Object("i am God");
     return object;
 }   
 return {
     getInstance: function(){
         if(!instance){
             instance = createInstance();
         }
         return instance;
     }
 };
})();
