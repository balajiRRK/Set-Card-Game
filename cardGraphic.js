const CARDWIDTH = 3.5;
const CARDHEIGHT = 2.25;
let scaleW= 100;
let scaleH = 100;
const canvas = document.getElementById("card");
const width = (canvas.width = ((CARDWIDTH))*window.innerWidth/2*(scaleW/window.innerWidth));
const height = (canvas.height = (CARDHEIGHT)*window.innerHeight/2*(scaleH/window.innerHeight));

const ctx = canvas.getContext("2d");

ctx.fillStyle = "gray"; // color of the card
ctx.fillRect(0, 0, width, height);
card = "red"

// Oval https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse
let shape = new Path2D();
color="red";

const patternCanvas = document.createElement("canvas");
const patternContext = patternCanvas.getContext("2d");

// Give the pattern a width and height of 50
patternCanvas.width = 5;
patternCanvas.height = 5;

// Give the pattern a background color and draw an arc
patternContext.fillStyle = "white";
patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
// patternContext.arc(0, 0, 50, 0, 0.5 * Math.PI);
patternContext.moveTo(0,2);
patternContext.lineTo(5,2);
patternContext.lineWidth = 1;
patternContext.strokeStyle ="purple";
patternContext.stroke();

// Create our primary canvas and fill it with the pattern


const pattern = ctx.createPattern(patternCanvas, "repeat");
ctx.fillStyle = pattern;

// ctx.fillStyle = "red ";
ctx.strokeStyle = "purple";
ctx.stroke();
drawOval();
// shape2 = shape.trans
// shadeShape(ctx,shape);
// ctx.stroke(shape);
// stripeShape(shape,ctx);
ctx.fill(shape);
// ctx.stroke(shape);
// ctx.beginPath();
ctx.ellipse(canvas.width/2+50, canvas.height/2, 20, 45, Math.PI / 1, 0, 2 * Math.PI);
ctx.ellipse(canvas.width/2-50, canvas.height/2, 20, 45, Math.PI / 1, 0, 2 * Math.PI);
// ctx.fill();
// ctx.stroke();


// ctx.fill();


/*
// Diamond
ctx.strokeStyle = "purple";
ctx.beginPath();
const triHeight = canvas.height/2 * Math.tan(degToRad(60));
ctx.moveTo((canvas.width/2),canvas.height-triHeight);
ctx.lineTo((canvas.width/2)-canvas.width/8, canvas.height/2);
ctx.lineTo((canvas.width/2), triHeight-(canvas.height/40));


//symmetry
ctx.moveTo((canvas.width/2),canvas.height-triHeight);
ctx.lineTo((canvas.width/2)+canvas.width/8, canvas.height/2);
ctx.lineTo((canvas.width/2), triHeight-(canvas.height/40));
ctx.stroke();
*/

// Curve
// ctx.arc(canvas.width/2, canvas.height/2, 50, degToRad(0), degToRad(360), false);
// ctx.beginPath();
// ctx.moveTo(canvas.width/2-20, canvas.height/8);
// ctx.quadraticCurveTo(canvas.width/2+35, canvas.height/4, (canvas.width/2)+10, canvas.height/2);
// ctx.quadraticCurveTo((canvas.width/2)-35, canvas.height/2, canvas.height-(canvas.width/12)+10, canvas.height-canvas.height/6);

// //ctx.quadraticCurveTo((canvas.width/2)+35, canvas.height/2+44, canvas.height-(canvas.width/12)-1, canvas.height-canvas.height/6);

// ctx.quadraticCurveTo((canvas.width/2)-70, canvas.height/2,(canvas.width/2-20), (canvas.height/8)+40 );

// ctx.quadraticCurveTo((canvas.width/2)+15, canvas.height/2,canvas.width/2-20, canvas.height/8 );
// ctx.stroke(); 


 
function numberOfShapes(number,shape){
if(number ==3){

}else if(number ==2){

}

}
function shadeShape(ctx,shape){
  ctx.fillStyle = color;
  ctx.fill(shape);

}
function stripeShape(shape,ctx){
  ctx.stroke(shape);
  const stripes = document.createElement("canvas");
  stripes.width = 2;
  stripes.height = 2;
  const stx = stripes.getContext("2d");
 
  stx.strokeStyle ="blue";
  stx.lineTo(2,0);
  stx.lineWidth =50;
  stx.stroke();
const stripe = ctx.createPattern(stripes,"repeat");
ctx.fillStyle = stripe;

ctx.fill(shape);
  

 

}

function drawOval(){
// shape.beginPath();
shape.ellipse(canvas.width/2, canvas.height/2, 20, 45, Math.PI / 1, 0, 2 * Math.PI);
}

function shader(shape){

  shape.fill();
}

/*

function obtained from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics
Changes degress to radians for drawing on the canvas
*/

function degToRad(degrees) {
    return (degrees * Math.PI) / 180;
  }
  
// const symbol = document.getElementById("symbol");
// const sWidth= (symbol.width = 200)//((3.5))*canvas.innerHeight/2*(200/canvas.innerWidth));
// const sHeight = (symbol.height = 200)//(2.25)*canvas.innerHeight/2*(200/canvas.innerHeight));

// const sctx = symbol.getContext("2d");

// sctx.fillStyle = "red";
// sctx.fillRect(0, 0, width, height);

