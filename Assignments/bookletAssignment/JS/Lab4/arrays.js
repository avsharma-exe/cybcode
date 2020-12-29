var names = [];
function add(){
    var x = document.getElementById("names").value;
    names.push(x);
}
function show(){
    //names.forEach((val)=>console.log(val));
    document.write(`List of Students <br>------------------------<br>`);
    names.forEach((val)=>document.write(val+"<br>"))
}