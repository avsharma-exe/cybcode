function dateGreeting(){
    let d = new Date(); 
    let h =d.getHours();
    document.write(d+"</br>");
    if(h<12){
        document.write("Good Morning");
    }else if(h>=12 && h<=17){
        document.write("Good Afternoon");
    }else{
        document.write("Good Evening");
    }
}