function forloop(){
    for(let i = 1; i <= 100; i++){
        document.write(i+" ");
        if((i%10)==0){
            document.write("</br>");
        }
    }
}

function doWhileLoop(){
    let i = 1;
    do{
        document.write(i+" ");
        if((i%10)==0){
            document.write("</br>");
        }
        i++;
    }while(i<=100);
}

function whileLoop(){
    let i = 1;
    while(i<=100){
        document.write(i+" ");
        if((i%10)==0){
            document.write("</br>");
        }
        i++;
    }
}