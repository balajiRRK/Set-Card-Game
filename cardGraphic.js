const CARDWIDTH = 3.5;
const CARDHEIGHT = 2.25;
let scaleW= 100;
let scaleH = 100;
const canvas = document.getElementById("card");


// const ctx = canvas.getContext("2d");

// ctx.fillStyle = "gray"; // color of the card
// ctx.fillRect(0, 0, width, height); // making the card


//Path2D https://developer.mozilla.org/en-US/docs/Web/API/Path2D
// let shape = new Path2D();


// drawOval();
// drawDiamond(shape,0);


// ctx.fill(shape);
// numerousShapeGenerator(2,shape,ctx);
// stripeShape("blue",shape,ctx);
// ctx.fillStyle = "red ";

// shape2 = shape.trans
// shadeShape(ctx,shape);
// ctx.stroke(shape);
// stripeShape(shape,ctx);

// ctx.stroke(shape);
// ctx.beginPath();
// ctx.ellipse(canvas.width/2+50, canvas.height/2, 20, 45, Math.PI / 1, 0, 2 * Math.PI);
// ctx.ellipse(canvas.width/2-50, canvas.height/2, 20, 45, Math.PI / 1, 0, 2 * Math.PI);
// ctx.fill();
// ctx.stroke();


// ctx.fill();

function detectCard(card,id){
  const cardCanvas = document.createElement("canvas")
  cardCanvas.setAttribute("shape", card.shape);
  cardCanvas.setAttribute("color", card.color);
  cardCanvas.setAttribute("shading", card.shading);
  cardCanvas.setAttribute("number", card.number);
  document.getElementById(id+1).appendChild(cardCanvas);
  console.log("card id is "+id);
  cardCanvas.width = ((CARDWIDTH))*window.innerWidth/2*(scaleW/window.innerWidth);
  cardCanvas.height = (CARDHEIGHT)*window.innerHeight/2*(scaleH/window.innerHeight);
  const ctx = cardCanvas.getContext("2d");
  
  let shape = new Path2D();
  ctx.fillStyle = "gray"; // color of the card
  ctx.fillRect(0, 0, cardCanvas.width, cardCanvas.height); // making the card
  numerousShapeGenerator(card.number,shape,cardCanvas,card);
  detectShading(card,shape,ctx,cardCanvas);
 
  
//   switch(card.shading){
//     case "none":
//       noneShape(shape,ctx,card,cardCanvas);
//     break;
//     case "dashed":
//       stripeShape(shape,ctx,card,cardCanvas);
//     break;
//     case "filled":
//       shadeShape(shape,ctx,card,cardCanvas);
//     break;

// }
}
function detectShading(card,shape,ctx,cardCanvas){
  switch(card.shading){
    case "none":
      noneShape(shape,ctx,card,cardCanvas);
    break;
    case "dashed":
      stripeShape(shape,ctx,card,cardCanvas);
    break;
    case "filled":
      shadeShape(shape,ctx,card,cardCanvas);
    break;
  }
}
function drawDiamond(shape,offset,canvas){
  
  // Diamond
  
  // shape.beginPath();
  const triHeight = canvas.height/2 * Math.tan(degToRad(60));
  shape.moveTo((canvas.width/2)+offset,canvas.height-triHeight);
  shape.lineTo(((canvas.width/2)-canvas.width/8)+offset, canvas.height/2);
  shape.lineTo((canvas.width/2)+offset, triHeight-(canvas.height/40));
  
  
  //symmetry
  shape.moveTo((canvas.width/2)+offset,canvas.height-triHeight);
  shape.lineTo(((canvas.width/2)+canvas.width/8)+offset, canvas.height/2);
  shape.lineTo((canvas.width/2)+offset, triHeight-(canvas.height/40));
  
  // shape.stroke();
  
}

function drawCurve(shape,offset,canvas){
  // Curve
  
  // shape.beginPath();
  // the following functions are used to create the curve shape
  shape.moveTo(10+(canvas.width/2)-20+offset, canvas.height/8);
  shape.quadraticCurveTo(10+(canvas.width/2)+35+offset, canvas.height/4, 10+(canvas.width/2)+10+offset, canvas.height/2);
  shape.quadraticCurveTo(10+(canvas.width/2)-35+offset, canvas.height/2, 10+canvas.width-(canvas.width/2)+10+offset, canvas.height-canvas.height/6);
  
  //ctx.quadraticCurveTo((canvas.width/2)+35, canvas.height/2+44, canvas.height-(canvas.width/12)-1, canvas.height-canvas.height/6);
  
  shape.quadraticCurveTo(10+(canvas.width/2)-70+offset, canvas.height/2,10+(canvas.width/2)-20+offset, (canvas.height/8)+40 );
  
  shape.quadraticCurveTo(10+(canvas.width/2)+15+offset, canvas.height/2,10+(canvas.width/2)-20+offset, canvas.height/8 );
  shape.closePath();
  // ctx.stroke(); 
}



function stripeShape(shape,ctx,card){
  const stripesCanvas = document.createElement("canvas");
  const stripesContext = stripesCanvas.getContext("2d");
  
  // Give the pattern a width and height of 50
  stripesCanvas.width = 5;
  stripesCanvas.height = 5;
  
  // Give the pattern a background color and draw an arc
  stripesContext.fillStyle = "rgba(0,0,0,0)";
  stripesContext.fillRect(0, 0, stripesCanvas.width, stripesCanvas.height);
  // patternContext.arc(0, 0, 50, 0, 0.5 * Math.PI);
  stripesContext.moveTo(0,2);
  stripesContext.lineTo(5,2);
  stripesContext.lineWidth = 1;
  stripesContext.strokeStyle =card.color;
  stripesContext.stroke();
  
  // Create our primary canvas and fill it with the pattern
  
  
  const pattern = ctx.createPattern(stripesCanvas, "repeat"); // repeates the striped pattern from above for filling it later
  ctx.fillStyle = pattern;
  ctx.strokeStyle = card.color;
  ctx.stroke(shape);
  ctx.fill(shape);
}
/*
The glue (will make proper comments when done)
*/
function numerousShapeGenerator(number,shape,canvas,card){
  // ctx.save();
  // New path2d objects are created because just using shape will cause a issue for ellipse with more than one shape
  let shape2 = new Path2D();
  let shape3 = new Path2D();
  if(number ==3){
    drawShape(shape,canvas,card,0);
  
    drawShape(shape2,canvas,card,50);
    
    drawShape(shape3,canvas,card,-50);

    shape.addPath(shape2);
    shape.addPath(shape3);
    
  }else if(number ==2){
    drawShape(shape,canvas,card,-25);
    drawShape(shape2,canvas,card,25);
    shape.addPath(shape2);
  }else{
    drawShape(shape,canvas,card,0);
  }
  
}
function drawShape(shape,canvas,card,offset){
switch(card.shape){
  case "diamond":
  drawDiamond(shape,offset,canvas);
  break;
  case "curve":
    drawCurve(shape,offset,canvas);
  break;
  case "oval":
    drawOval(shape,offset,canvas);
    break;
}
}



function drawOval(shape,offset,canvas){
  // Oval https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse
  
  shape.ellipse((canvas.width/2)+offset, canvas.height/2, 20, 45, Math.PI, 0, 2 * Math.PI);
  

}
function noneShape(shape,ctx,card){
 
  ctx.strokeStyle= card.color;
  ctx.stroke(shape);
}

function shadeShape(shape,ctx,card){
  ctx.fillStyle = card.color;
  ctx.fill(shape);
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
