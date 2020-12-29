var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var arcWidth = 8;
var radius = 2 * arcWidth;

var ct = document.getElementById("myCanvas");
var context = ct.getContext("2d");
ct.width = (radius + (colors.length-0.5) * arcWidth) * 2;
ct.height = (radius + (colors.length-1) * arcWidth);

var drawArc = function( color ){
  context.beginPath();
  context.arc(
    ct.width/2,
    ct.height + arcWidth/2,
    radius,
    Math.PI,
    2*Math.PI
  );
  context.lineWidth = arcWidth;
  context.strokeStyle = color;
  context.stroke();
  context.closePath();
  radius += arcWidth;
};

colors.reverse().forEach( drawArc );

var canvas = document.getElementById('mainCan'),
context = canvas.getContext('2d');

make_base();

function make_base()
{
  var base_image = new Image();
  var secImage = new Image();
  secImage.src = '2.png';
  base_image.src = '1.jpg';
  base_image.onload = function(){
  context.drawImage(base_image,0,0, 100,100);
  }
  secImage.onload = function(){
      context.drawImage(secImage,150,0, 100,100);
  }
}