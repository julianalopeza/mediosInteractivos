
var x = 41;
var x2 = 720;
var x3 = 130;
var y = 749;
var y2 = 510;
var y3 = 1042;
var x4 = 41;

function setup() { 
  createCanvas(1000,1540);
  background(255,255,223);
  
  // Cuadrados negras superiores 
  
  for (var k = 10; k < 470; k = k + 85) {
   
    for (var h = 0; h < 1000; h = h + 85) 
    {
      
      fill(0);
      rect(h, k, 38, 38);
} 

  }
  
  // Cuadrados naranjas inferiores

  for (var a = 750; a < 1000; a = a + 85) {
   
    for (var b = 255; b < 1000; b = b + 85) 
    {
      
      fill(196,70,44,200);
      noStroke();
      rect(b, a, 38, 38);
} 

  }
  
  // Rectangulo negro
  
  fill(0);
  rect(975,0,30,1000);
  
  // Cuadrados negros inferiores

  for (var e = 1000; e < 1600; e = e + 85) {
   
    for (var f = 1 ; f < 1600; f = f + 85) 
    {
      
      fill(0);
      noStroke();
      rect(f, e, 38, 38);
} 

  }
 
  
  for (var l = 0; l < 8; l = l +1)
  {
    x3 = x3 - 10;
    fill (220,150,x3,200); // Degradé en los colores naranjas
    rect (x,0,42, 1000);
    x = x+ 85;
    
  }
  
   for (var n = 0; n < 3; n = n +1) // Recyangulos grises superiores
  {
    fill (175,180,174,200);
    rect (x2,0,42, 1000);
    x2 = x2 + 86;
  }
  
  for ( var w = 0; w < 3;w = w +1) // Lineas naranjas del medio
  {
    fill (196,70,44,200);
    rect( 0, y, 298, 39);
    y = y + 85;
  }
  
  for ( var z = 0; z < 3; z = z +1) // Lineas amarillas horizontales 
  {
    fill (212,202,117, 200);
    rect( 0, y2, 1200, 39);
    y2 = y2 + 80;
  }
  
  // Lineas horizonatales de colores de izquierda a derecha
  
  for ( var t = 0; t < 2; t = t + 1)
  {
    fill(210,182,128,150);
    rect(x4, 1000,42,1200);
    x4 = x4 + 86;
  }
  
  for ( var d = 0; d < 3; d = d + 1)
  {
    fill(141,168,198,150);
    rect(x4, 1000,42,1200);
    x4 = x4 + 84;
  }
  
   for ( var p = 0; p < 3; p = p + 1)
  {
    fill(208,164,179,150);
    rect(x4, 1000,42,1200);
    x4 = x4 + 85;
  }
  
  for ( var w = 0; w < 3; w = w + 1)
  {
    fill(190,78,51,150);
    rect(x4, 1000,42,1200);
    x4 = x4 + 86;
    
    fill(206,196,120,200);
     rect(x4, 1000,42,1200);
    
  }
  
  // Cuadrados amarillos inferiores
  for (var r = 1290; r < 1700; r = r + 85) {
   
    for (var s = 43; s < 1000; s = s + 85) 
    {
      
      fill(200,177,92);
      rect(s, r, 39, 39);
} 

  }
  
  fill(0,200);
  rect (0,1500,1000,50); // rectangulo negro inferior
  
  // Rectangulos blancos
  for ( var nm = 0; nm < 3; nm = nm +1)
  {
    fill(255);
    rect(0,y3,1200,50);
    y3 = y3 + 84
  }
  
}
