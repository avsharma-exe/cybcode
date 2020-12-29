$(document).ready(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos",
        method: "GET",
        success:(x)=>{
            x.forEach(element => {
                $('#row').append("<div class='content'><img src='"+element.thumbnailUrl+"'/><div class='ele title'>"+element.title.substring(0,20)+"</div><span class='ele'>"+element.id+"</span><span class='ele'><button >Add to Cart</button></span>")                
            });
        }
    })
})