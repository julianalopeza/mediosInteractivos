var ano;
var mes;
var dia;

var hora;
var minuto;
var segundo;
var segundo2;
var x = 3;

var c;
var d;
var m;

var perx = 1;
var pery = 1;
var dir = 1;
var j = 1;



function setup() {
  createCanvas(900, 400);
  angleMode(DEGREES);
  
  


  hora = hour();
  minuto = minute();
  segundo = second();

  ano = year();
  mes = month();
  dia = day();

}

function draw() {
  background(189, 239, 245);



  hora = hour();
  minuto = minute();
  segundo = second();
  segundo2 = second() * 1.4;
  x = x * 1.01;



 if ( dir == -1)
  {
    background(12,15,84);
  fill(255);
  noStroke();
 u = u;
  }


	 
  c = map(segundo, 0, 59, 0, 359);
  d = map(hora, 0, 23, 0, 718);
  m = map(minuto, 0, 59, 0, 359);


  fill(209,197,40);
  noStroke();
  var u = ellipse(perx , pery,  300, 300);
  perx = perx + 3 * dir;
  pery = pery + 1 * dir;
  

  if (perx > 900)
  {
    dir = -1;
    
    
  }
  
   if (perx < 0)
  {
    dir = 1;
    
    
  }
  
  translate(width/2, height/2);
 fill(255); 
ellipse(0,0,20,20);
  
// Hacer un mapeado de los elementos. Cuando es de noche, el tiempo para más 
// veloz que cuando es de día. 
  
 //Se hace el mapeado de los segundos  

push();

segundoMapeado = map(segundo,0,59,0,359);
rotate(segundoMapeado*j);
fill(250);
stroke(255);
strokeWeight(4);
line(0,0,0,-300);

  
if( dir > 0)
{
  j = 1;
  
}
if( dir < 0)
{
  j = 9;
  
}
pop();
  
    push();
  translate(-250,-250);
  noStroke();
  fill(255,150);
  ellipse(400, 210, 90, 70);
  ellipse(335, 250, 100, 100);
  ellipse(440, 240, 90, 90);
  ellipse(340, 200, 80, 80);
  ellipse(380, 280, 90, 80);


  ellipse(100, 210, 90, 70);
  ellipse(35, 250, 150, 150);
  ellipse(100, 290, 100, 100);
  ellipse(140, 240, 90, 90);
  ellipse(40, 200, 100, 80);
  ellipse(80, 270, 80, 80);
	pop();

  // Se hace el mapeado de los minutos
  push();
minutoMapeado = map(minuto, 0, 59, 0, 359);
rotate(minuto*j);
fill(250);
stroke(255);
strokeWeight(4);
line(0,0,0,-200);

 // Estos condicionales muestran si es de día o de noche lo que hace que el 
  //tiempo cambie a medida que la bola se mueve
  
if( dir > 0)
{
  j = 1;
  
}
if( dir < 0)
{
  j = 9;
  
}
pop();
  
  // Se hace el mapeado de los minutos
  push();
horaMapeado = map(hora, 0, 23, 0, 718);
rotate(hora*j);
fill(250);
stroke(255);
strokeWeight(4);
line(0,0,0,-100);

pop();


}