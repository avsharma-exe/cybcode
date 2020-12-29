function compoundInterest(){
    let p = parseInt(prompt("Enter the value of Principal"));
    if(isNaN(p)){
        alert("Invalid input considering p as 12");
        p = 12;
    }
    let n = parseInt(prompt("Enter the value of period in yrs"));
    if(isNaN(n)){
        alert("Invalid input considering p as 3");
        n = 3;
    }
    let r = parseInt(prompt("Enter the value of Rate of Interest"));
    if(isNaN(r)){
        alert("Invalid input considering r as 6");
        r = 6;
    }
    res = (p*(1+r/100)**n)-p;
    document.write("CI = "+res);
}