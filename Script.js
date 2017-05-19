var canvas = document.getElementById("myCanvas"), c = canvas.getContext("2d"), 
// n is the number of line segments.
n=100,
//define the main window.
xMin = -10,
xMax =  10,
yMin = -10,
yMax =  10,
//end of main window

//Graph
math = mathjs(),
expr = '',
scope = { x : 0,  t : 0},
tree = math.parse(expr, scope),
// End of graph

//Time
time = 0,
timeIncrement = 0.1;
//End of Time

// The main program
drawCurve();
textField();
startAnimation();
// End of main program

function drawCurve(){
var i,xPixel,yPixel,
// these vary between 0 and 1 
percentX,percentY,
//these are in math coordinates
mathX, mathY;
//Clear the canvas
c.clearRect(0 ,0,canvas.width, canvas.height);

c.beginPath();

for(i=0;i<n;i++){
 percentX = i / (n-1);
 mathX = percentX * (xMax - xMin) + xMin;
 mathY = evaluateMathExpr(mathX);
 percentY = (mathY - yMin) / (yMax -yMin);

//Flip to match canvas coordinate.
percentY = 1 - percentY

 xPixel = percentX * canvas.width;
 yPixel = percentY * canvas.height;
 c.lineTo(xPixel,yPixel);
 }
c.stroke();
}

function evaluateMathExpr(mathX){
    scope.x = mathX;
    scope.t = time;
	return tree.eval();
}

function textField(){
 // Make a jQuery selection to access the input DOM element.
      var input = $('#inputField');
      // Set the initial text value programmatically using jQuery.
      input.val(expr);
      
      // Listen for changes using jQuery.
      input.keyup(function (event) {
        expr = input.val();
        tree = math.parse(expr, scope);
        drawCurve();
      });
}

function startAnimation(){
	(function animloop(){
		requestAnimationFrame(animloop);
		render();
	}());
}

//crazy cool function:
// sin(x*t + t) * sin(x/3)*10

function render(){
	//increment time
	time += timeIncrement;
	//redraw
	drawCurve();
}