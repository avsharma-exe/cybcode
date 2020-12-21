function validation(){

    let fn = document.regF.fisrtName;
    let ln = document.regF.lastName;
    let db = document.regF.dateOfBirth;
    let em = document.regF.email;
    let hob = document.regF.hobby;
    //console.log(fn);

    if(firstname(fn)){
        if(lastname(ln)){
            if(dateofBirth(db)){
                if(emailId(em)){
                    if(checkBox()){
                        window.open("success.html",'_self');
                    }
                }
            }
        }
    }
}



function firstname(data){
    let fn = data.value;
    let fn_len = data.value.length;
    if(fn_len == 0){
        alert("First Name can't be Empty required!!");
        document.getElementById(data.id).focus();
        return false;
    }
    data.className=null;
    return true;
}

function lastname(data){
    let ln = data.value;
    let ln_len = data.value.length;
    if(ln_len == 0){
        alert("Last Name can't be Empty required!!");
        document.getElementById(data.id).focus();
        console.log(data);
        return false;
    }
    console.log(data);
    data.className=null;
    return true;
}

function dateofBirth(data){
    let db = data.value;
    let d = db.split('-');
    let date = new Date();
    let dday = date.getDate();
    let dmon = date.getMonth()+1;
    let dyr = date.getFullYear();
    let dRegEx = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    // console.log(date,d[1],date.getMonth());
    // console.log(dyr);
    if(d.length == 1 && d[0]!=""){
        alert("please use '-' as seprator in date");
        document.getElementById(data.id).focus();
        return false;
    }
    
    if(db.match(dRegEx)){
        if(parseInt(d[2]) > dyr){
            alert("Enter a date less than current date yg");
            return false;
        }else if(parseInt(d[2]) == dyr){
            if(parseInt(d[1]) > dmon){
                alert("Enter a date less than current date mg");
                return false;
            }else if(parseInt(d[1]) == dmon){
                if(parseInt(d[0])>dday){
                    alert("Enter a date less than current date dg");
                    return false;
                }
            }
        }
        data.className=null;
        return true;
    }
    alert("Please enter a valid date");
    document.getElementById(data.id).focus();
    return false;
}

function emailId(data){
    let em = data.value;
    let emVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(em.match(emVal)){
        data.className=null;
        return true;
    }
    alert("Enter valid email id. Format a@b.c");
    document.regF.email.focus();
    return false;
}

function checkBox(){
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

    if(checkboxes.length == 0) {
        alert("Select atleast one checkbox");
        document.regF.hobby[0].focus();
        return false;
    }
    return true;
}
function showWriter(){
    if(document.querySelector('#read:checked') !== null){
        document.getElementById("magic").style.display = "contents";
    }else{
        document.getElementById("magic").style.display = "none";
    }
    
}

function resetForm(){
    let fn = document.regF.fname;
    let ln = document.regF.lname;
    let dob = document.regF.dob;
    let em = document.regF.email;
    ln.className="error";
    fn.className="error";
    dob.className="error";
    em.className="error";
}

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var browserLabel = document.getElementById("browser");
var totalSeconds = 0;
displayBrowser();
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
function displayBrowser(){
    
}