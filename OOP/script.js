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
        for (let i=0;i<edges;i++){
            perimeter += distance[i];
        }
        console.log("The perimeter = "+perimeter);
        return perimeter;
    }
    area();
    
}

//Child classes

class Triangle extends Shape{
    constructor(edges,points =[]){
        super(edges,points);
    }
    area(d){
        let p = this.perimeter(d)/2;
        let area = Math.sqrt(p(p-d[0])(p-d[1])(p-d[2]));
        console.log('Area of the triangle = '+area);
        return area;
    }

}

class Square extends Shape{
    constructor(edges,points =[]){
        super(edges,points);
    }
    area(d){
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
        area = d[0]*d[1];
        console.log('Area of the rectangle = '+area);
        return area;
    }

}

//Logic for distance and selecting type of shape

var inEdges = parseInt(prompt("Enter the number of edges: "));

if(inEdges <= 4){
    if(inEdges == 3){
        for(let i=0;i<2;i++){
            alert("now  Enter the x y cordinates of Triangle");
            let x = parseint(prompt("Enter the x co-ordinate: "));
            let y = parseint(prompt("Enter the y co-ordinate: "));
            calDis(3,)
        }
    }
}


//distance function

function calDis(edges, points) {
    let d = new Array(3);
    for (let i = 0; i < edges; i++) {
      d[i] = Math.sqrt(
        Math.pow(points[i].x - points[(i + 1) % edges].x, 2) +
          Math.pow(points[i].y - points[(i + 1) % edges].y, 2)
      );
      console.log(d[i]);
    }
    return d;
}