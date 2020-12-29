//Base classes

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
} 
class Shape{
    
    constructor(edges,points = []){
        this.edges = edges;
        this.points = points;
    }

    perimeter(distance){
        let perimeter = 0;
        for (let i=0;i<this.edges;i++){
            perimeter += distance[i];
        }
        return perimeter;
    }
    area(){};
    
}

//Child classes

class Triangle extends Shape{
    constructor(edges,points =[]){
        super(edges,points);
    }
    area(d){
        console.log(d);
        let p = this.perimeter(d)/2;
        document.write("The perimeter = "+this.perimeter(d));
        console.log(p);
        let area = Math.sqrt(p*(p-d[0])*(p-d[1])*(p-d[2]));
        
        if(area == 0){
            alert("impossible triangle");
        }
        document.write('Area of the triangle = '+area);
        //return area;
    }

}

class Square extends Shape{
    constructor(edges,points =[]){
        super(edges,points);
    }
    area(d){
        document.write("The perimeter = "+this.perimeter(d));
        let area = d[0]**2;
        console.log('Area of the square = '+area);
        return area;
    }

}

class Rectangle extends Shape{
    constructor(edges,points =[]){
        super(edges,points);
    }
    area(d){
        document.write("The perimeter = "+this.perimeter(d));
        area = d[0]*d[1];
        console.log('Area of the rectangle = '+area);
        return area;
    }

}

//Logic for distance and selecting type of shape

var inEdges = parseInt(prompt("Enter the number of edges: "));
var points = [];
var count = 0;
var s ="";
if(inEdges <= 4 && inEdges > 2){
    if(inEdges == 3){
        count = 3;
        s = "triangle";
    }else{
        count = 4;
        s = "square/rectangle";
    }
    for(let i=0;i<count;i++){
        alert("now  Enter the x y cordinates of "+s);
        let x = parseInt(prompt("Enter the x co-ordinate: "));
        let y = parseInt(prompt("Enter the y co-ordinate: "));
        points[i] = new Point(x,y);
    }
    console.log(points);
    calDis(inEdges,points);
}else{
    alert("invalid shape refresh page and try again. We only accept triangle square and rectangle");
}


//distance function

function calDis(edges, points) {
    
    let d = new Array(4);
    for (let i = 0; i < edges; i++) {
        d[i] = Math.sqrt(
        Math.pow(points[i].x - points[(i + 1) % edges].x, 2) +
        Math.pow(points[i].y - points[(i + 1) % edges].y, 2)
        );
        console.log(d[i]);
    }
    if(edges == 3){
        let sh = new Triangle(edges,points);
        sh.area(d);
    }else if(d[0]==d[1]){
        let sh = new Square(edges,points);
        sh.area(d);
    }else{
        let sh = new Rectangle(edges,points);
        sh.area(d);
    }
}