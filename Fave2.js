function setup() {
  createCanvas(420, 420);
}

var a = 35;
var changeInA = 4;

var b = 70;
var changeInB = 4;

var c = 105;
var changeInC = 4;

var d = 140;
var changeInD = 4;

var e = 175;
var changeInE = 4;

var f = 210;
var changeInF = 4;

var g = 175;
var changeInG = 4;

var h = 140;
var changeInH = 4;

var i = 105;
var changeInI = 4;

var j = 70;
var changeInJ = 4;

var k = 35;
var changeInK = 4;

function draw() {
  background(0);
  
  ellipse(a, 35, 40);
	fill( 255, 20, 147)
	a = a + changeInA;

	
  ellipse(b, 70, 40);
	b = b + changeInB;
	
	ellipse(c, 105, 40);
	c = c + changeInC;
	
	ellipse(d, 140, 40);
	d = d + changeInD;
	
	ellipse(e, 175, 40);
	e = e + changeInE;
	
	ellipse(f, 210, 40);
	f = f + changeInF;
	
	ellipse(g, 245, 40);
	g = g + changeInG;
	
	ellipse(h, 280, 40);
	h = h + changeInH;
	
	ellipse(i, 315, 40);
	i = i + changeInI;
	
	ellipse(j, 350, 40);
	j = j + changeInJ;
	
	ellipse(k, 380, 40);
	k = k + changeInK;
	
}
