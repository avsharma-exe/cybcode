var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
      
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
      return false;
    }
}

function offer(flag){
  if(flag==5){
    document.getElementById("discount").value = "20% discount applied";
    alert("Yayyy 20% off. Total payable amount = 4000");
  }else if(flag==2){
    document.getElementById("discount").value = "7% discount applied";
    alert("Yayyy 7% off. Total payable amount = 1860");
  }else{
    document.getElementById("discount").value = "Sorry no discount";
    alert("No discount. Total payable amount = 1000");
  }
}

function complete(){
  alert("Thanks Asfiya Ma'am for your time");
}