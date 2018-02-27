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

function setup() {
  createCanvas(900, 900);
  angleMode(DEGREES);


  hora = hour();
  minuto = minute();
  segundo = second();

  ano = year();
  mes = month();
  dia = day();

}

function draw() {
  background(93,93,93);



  hora = hour();
  minuto = minute();
  segundo = second();
  segundo2 = second() * 1.4;
  x = x * 1.01;




  //if(hora > 12)
  //{
  //	hora = hora - 12;
  //}

  c = map(segundo, 0, 59, 0, 359);
  d = map(hora, 0, 23, 0, 718);
  m = map(minuto, 0, 59, 0, 359);


  translate(455, 450); //Cambia el sistema de coordenadas de los elementos 

  
  fill (0);
  noStroke();
   ellipse (0,0,450,450);


  for (var l = 0; l < 80; l = l + 1) {

    // Los cuadrados giran  cada hora, es decir, cada una de las posiciones cambia 
    // sumando una hora
  rotate(minuto);
   fill(255);
    textSize(17);
    text(''+ hora, 40, 350);
    noFill();
    stroke(255);
    rotate(minuto);
    rect(40, 330, l + 10, l + 30);
    textSize(20);
	 

  }
  
   for (var m = 0; m < 80; m = m + 5) {

    // Los cuadrados giran  cada minuto, es decir, cada una de las posiciones cambia 
    // sumando un minuto
    
   fill(55,55,57);
    textSize(17);
    text(''+ minuto, 220, 200);
    noFill();
    stroke(55,55,57);
    rotate(minuto);
    ellipse(90, 260, m + 10, m + 30);
    textSize(20);
	 

  }

  for (var j = 0; j < 80; j = j + 1) {

    // Los cuadrados giran  cada segundo, es decir, cada una de las posiciones cambia 
    // sumando un segundo
    
   fill(255);
    textSize(17);
    text(''+ segundo, 40, 40);
    noFill();
    stroke(255);
    rotate(segundo);
    rect(-90, 70, j + 10, j + 30);
    textSize(20);
	 

  }
  
  
  
  
  
  
  
  


}