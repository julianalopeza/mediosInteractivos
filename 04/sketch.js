// Variables de los botones de herramientas
var boton1x = 30;
var boton1y = 100;
var boton1tam = 40;

var boton2x = 30;
var boton2y = 160;
var boton2tam = 40;

var boton7x = 30;
var boton7y = 220;
var boton7tam = 40;

var boton8x = 30;
var boton8y = 280;
var boton8tam = 40;

var boton6x = 30;
var boton6y = 340;
var boton6tam = 40;

var boton9x = 30;
var boton9y = 400;
var boton9tam = 40;

var boton10x = 30;
var boton10y = 460;
var boton10tam = 40;

var boton11x = 30;
var boton11y = 520;
var boton11tam = 40;

var boton12x = 30;
var boton12y = 580;
var boton12tam = 40;

var boton13x = 30;
var boton13y = 640;
var boton13tam = 40;

// Variables de los botones de los colores

var boton3x = 125;
var boton3y = 120;
var boton3tam = 20;

var boton4x = 125;
var boton4y = 170;
var boton4tam = 20;

var botonc5x = 125;
var botonc5y = 220;
var botonc5am = 20;

var botonc6x = 125;
var botonc6y = 270;
var botonc6tam = 20;

var botonc7x = 125;
var botonc7y = 320;
var botonc7tam = 20;

var botonc8x = 125;
var botonc8y = 370;
var botonc8tam = 20;

var botonc9x = 125;
var botonc9y = 420;
var botonc9tam = 20;

var botonc10x = 125;
var botonc10y = 470;
var botonc10tam = 20;

var botonc11x = 125;
var botonc11y = 520;
var botonc11tam = 20;

var botonc12x = 125;
var botonc12y = 570;
var botonc12tam = 20;

//Variables del fondo

var backx1 = 700;
var backy1 = 470;
var back1tam = 20;

var backx2 = 740;
var backy2 = 470;
var back2tam = 20;

var backx3 = 780;
var backy3 = 470;
var back3tam = 20;




//Variables de herramientas y de color, ayudan a definir cual elemento se tiene
//seleccionado
var herramienta = 0;
var colorSelect = 0;

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(255);

}

function draw() {
 
  // Cuadrados que se utilizan en el fondo. (Donde están los colores 
  // y las herramientas
  
  stroke(3);
  fill(173, 173, 178);
  rect(0, 0, 100, windowHeight);
  stroke(3);
  fill(255);
  rect(100, 0, 50, windowHeight);
 


  //textSize(40);
  //fill(159,25,98);
  //text('Dibuja acá', windowWidth / 2, 70);

  //Texto de la función que cada una de las herramientas representa
  //También están los títulos de las columnas (Dibujo, color)
  
  stroke(3);
  textSize(18);
  fill(0);
  text('Color', 105, 50);
  
  stroke(3);
  textSize(18);
  fill(0);
  text('Dibujo', 25, 50);

  noStroke();
  textSize(12);
  fill(0);
  text('Cuadrado', 25, 153);

  textSize(12);
  fill(0);
  text('Destello', 30, 211);

  textSize(12);
  fill(0);
  text('Borrador', 28, 273);

  textSize(12);
  fill(0);
  text('Linea', 35, 332);

  textSize(12);
  fill(0);
  text('Bubbles', 28, 392);

  textSize(12);
  fill(0);
  text('Flower', 32, 452);

  textSize(12);
  fill(0);
  text('Escama', 28, 512);

  textSize(12);
  fill(0);
  text('Cactus', 30, 572);
  
  textSize(12);
  fill(0);
  text('Donut', 33, 632);
  
  textSize(12);
  fill(0);
  text('Serpiente', 26, 692);
  
    textSize(15);
  fill(0);
  text('Background', 700, 500);


stroke(3);
  line(0, 70, 150, 70);
  
  // Con éstas funciones se crean los botones de las herramientas de dibujo
  // Los círculos representan los colores que el usuario puede seleccionar 
  // y los cuadrados representan la funcion que tiene cada uno de los cuadrados.

  //Ellipses de los botones para cambiar del color.
  stroke(3);
  
  //Backgroung

  fill(255);
  ellipse(backx1, backy1, back1tam, back1tam);
 fill(0);
  ellipse(backx2, backy2, back2tam, back2tam);
  fill(93,93,93);
  ellipse(backx3, backy3, back3tam, back3tam);
 
  fill(123, 4, 125);
  ellipse(boton3x, boton3y, boton3tam, boton3tam);
  fill(159, 25, 98);
  ellipse(boton4x, boton4y, boton4tam, boton4tam);
  fill(193, 44, 39);
  ellipse(botonc5x, botonc5y, botonc5am, botonc5am);
  fill(204, 101, 50);
  ellipse(botonc6x, botonc6y, botonc6tam, botonc6tam);
  fill(230, 181, 46);
  ellipse(botonc7x, botonc7y, botonc7tam, botonc7tam);
  fill(150, 183, 57);
  ellipse(botonc8x, botonc8y, botonc8tam, botonc8tam);
  fill(75, 123, 55);
  ellipse(botonc9x, botonc9y, botonc9tam, botonc9tam);
  fill(88, 145, 159);
  ellipse(botonc10x, botonc10y, botonc10tam, botonc10tam);
  fill(37, 101, 152);
  ellipse(botonc11x, botonc11y, botonc11tam, botonc11tam);
  fill(0);
  ellipse(botonc12x, botonc12y, botonc12tam, botonc12tam);

  //Cuadrados de los botones de las herramientas
  
  fill(255);
  rect(boton1x, boton1y, boton1tam, boton1tam);
  fill(255);
  rect(boton2x, boton2y, boton2tam, boton2tam);
  fill(255);
  rect(boton6x, boton6y, boton6tam, boton6tam);
  fill(255);
  rect(boton7x, boton7y, boton7tam, boton7tam);
  fill(255);
  rect(boton8x, boton8y, boton8tam, boton8tam);
  fill(255);
  rect(boton9x, boton9y, boton9tam, boton9tam);
  fill(255);
  rect(boton10x, boton10y, boton10tam, boton10tam);
  fill(255);
  rect(boton11x, boton11y, boton11tam, boton11tam);
  fill(255);
  rect(boton12x, boton12y, boton12tam, boton12tam);
  fill(255);
  rect(boton13x, boton13y, boton13tam, boton13tam);

 // Dibujos de los elementos dentro de los cuadrados blancos 
    
    fill(245,218,43);
     bezierDetail(50);
     bezier(65,  645, 33,  635, 70,685, 33, 675);
     
     //Dona
     fill(127,185,40);
     ellipse(50, 600, 30, 30);
       fill(255);
        ellipse(50, 600, 18,18);

//Cuadrado
fill(143,20,174);
rect( 40, 110, 20, 20);

//Borrador
stroke(3);
fill(1255);
rect( 40, 230, 20, 20);

//Linea
fill(202,35,180);
line(37,288,65,315);

//destello
triangle(35, 165, 58, 175, 66, 195);

//bubble
fill(245,124,43);
ellipse(50, 360, 25, 25);

//Escama
fill(255,20,34);
curve (50, 560, 45, 475, 55, 485, 60, 540);

//flower
fill(88, 145, 159);
ellipse(50, 420, 8, 8);
      ellipse(50+8, 420+8, 8, 8);
      ellipse(50-8, 420-8, 8, 8);
      ellipse(50+8, 420-8, 8, 8);
      ellipse(50-8, 420+8, 8, 8);
      
// cactus
fill(37, 101, 152);
ellipse(50,540,10,20);
ellipse(44,528,5,5);

  if (mouseIsPressed) {
    // Definimos el área sensible de los botones y para que sirven.
    // En este caso tenemos dos botones que sirven para cambiar entre
    // dos herramientas. En esta funcion se escriben los elementos sensibles tanto
    //tanto para los colores como las herramientas.
    
    if (mouseX > boton1x && mouseX < boton1x + boton1tam &&
      mouseY > boton1y && mouseY < boton1y + boton1tam) {
      herramienta = 0;
    }
    if (mouseX > boton2x && mouseX < boton2x + boton2tam &&
      mouseY > boton2y && mouseY < boton2y + boton2tam) {
      herramienta = 1;
    }
    // Y dos botones que sirven para cambiar entre dos colores.
    if (mouseX > boton3x && mouseX < boton3x + boton3tam &&
      mouseY > boton3y && mouseY < boton3y + boton3tam) {
      colorSelect = 0;
    }
    if (mouseX > boton4x && mouseX < boton4x + boton4tam &&
      mouseY > boton4y && mouseY < boton4y + boton4tam) {
      colorSelect = 1;
    }

    if (mouseX > botonc5x && mouseX < botonc5x + botonc5am &&
      mouseY > botonc5y && mouseY < botonc5y + botonc5am) {
      colorSelect = 2;
    }

    if (mouseX > boton6x && mouseX < boton6x + boton6tam &&
      mouseY > boton6y && mouseY < boton6y + boton6tam) {
      herramienta = 3;
    }

    if (mouseX > boton7x && mouseX < boton7x + boton7tam &&
      mouseY > boton7y && mouseY < boton7y + boton7tam) {
      herramienta = 4;
    }

    if (mouseX > boton8x && mouseX < boton8x + boton8tam &&
      mouseY > boton8y && mouseY < boton8y + boton8tam) {
      herramienta = 5;
    }
    
     if (mouseX > boton8x && mouseX < boton8x + boton8tam &&
      mouseY > boton8y && mouseY < boton8y + boton8tam) {
      herramienta = 5;
    }
    
    if (mouseX > boton9x && mouseX < boton9x + boton9tam &&
      mouseY > boton9y && mouseY < boton9y + boton9tam) {
      herramienta = 6;
    }
    
    if (mouseX > boton10x && mouseX < boton10x + boton10tam &&
      mouseY > boton10y && mouseY < boton10y + boton10tam) {
      herramienta = 7;
    }
    
    if (mouseX > boton11x && mouseX < boton11x + boton11tam &&
      mouseY > boton11y && mouseY < boton11y + boton11tam) {
      herramienta = 8;
    }
    
     if (mouseX > boton12x && mouseX < boton12x + boton12tam &&
      mouseY > boton12y && mouseY < boton12y + boton12tam) {
      herramienta = 9;
    }
    
     if (mouseX > boton13x && mouseX < boton13x + boton13tam &&
      mouseY > boton13y && mouseY < boton13y + boton13tam) {
      herramienta = 10;
    }



    // Colorset.

    if (mouseX > botonc6x && mouseX < botonc6x + botonc6tam &&
      mouseY > botonc6y && mouseY < botonc6y + botonc6tam) {
      colorSelect = 3;
    }

    if (mouseX > botonc7x && mouseX < botonc7x + botonc7tam &&
      mouseY > botonc7y && mouseY < botonc7y + botonc7tam) {
      colorSelect = 4;
    }

    if (mouseX > botonc8x && mouseX < botonc8x + botonc8tam &&
      mouseY > botonc8y && mouseY < botonc8y + botonc8tam) {
      colorSelect = 5;
    }

    if (mouseX > botonc9x && mouseX < botonc9x + botonc9tam &&
      mouseY > botonc9y && mouseY < botonc9y + botonc9tam) {
      colorSelect = 6;
    }

    if (mouseX > botonc10x && mouseX < botonc10x + botonc10tam &&
      mouseY > botonc10y && mouseY < botonc10y + botonc10tam) {
      colorSelect = 7;
    }

    if (mouseX > botonc11x && mouseX < botonc11x + botonc11tam &&
      mouseY > botonc11y && mouseY < botonc11y + botonc11tam) {
      colorSelect = 8;
    }

    if (mouseX > botonc12x && mouseX < botonc12x + botonc12tam &&
      mouseY > botonc12y && mouseY < botonc12y + botonc12tam) {
      colorSelect = 9;

    }
    
    //Fondo
    
    
     if (mouseX > backx1 && mouseX < backx1 + back1tam &&
      mouseY >  backy1 && mouseY < backy1 + back1tam) {
      herramienta = 21;

    }
    
    if (mouseX > backx2 && mouseX < backx2 + back2tam &&
      mouseY >  backy2 && mouseY < backy2 + back2tam) {
      herramienta = 22;

    }
    
    if (mouseX > backx3 && mouseX < backx3 + back3tam &&
      mouseY >  backy3 && mouseY < backy3 + back3tam) {
      herramienta = 23;

    }
    // Una vez seleccionado el color, lo usamos para cambiar el
    // color de relleno de la figura que pintamos después.
    
    if (colorSelect == 0) {
      fill(123, 4, 125);
    }
    if (colorSelect == 1) {
      fill(159, 25, 98);
    }

    if (colorSelect == 2) {
      fill(193, 44, 39);
    }

    if (colorSelect == 3) {
      fill(204, 101, 50);
    }
    if (colorSelect == 4) {
      fill(230, 181, 46);
    }

    if (colorSelect == 5) {
      fill(150, 183, 57);
    }

    if (colorSelect == 6) {
      fill(75, 123, 55);
    }
    if (colorSelect == 7) {
      fill(88, 145, 159);
    }

    if (colorSelect == 8) {
      fill(37, 101, 152);
    }

    if (colorSelect == 9) {
      fill(0);
    }
   
    
    // A tavés de éstos métodos se define que función va a tener cada una de 
    //las  herramientas.
    
    if (herramienta == 0) {

      rect(mouseX - 10, mouseY - 10, 20, 20);

    }
    if (herramienta == 1) {
      triangle(mouseX - 10, mouseY - 10, 58, 20, 86, 75);

    }

    if (herramienta == 3) {


      smooth();
      ellipse(mouseX, mouseY, 36, 36);
      noSmooth();
      ellipse(mouseX, mouseY, 36, 36);

    }

    if (herramienta == 4) {


      noStroke();
      fill(255);
      rect(mouseX, mouseY, 50, 50);

    }

    if (herramienta == 5) {

      noStroke();
      ellipse(mouseX, mouseY, 5, 5);

    }
    
    
    if (herramienta == 6) {

      ellipse(mouseX, mouseY, 10, 10);
      ellipse(mouseX+10, mouseY+10, 10, 10);
      ellipse(mouseX-10, mouseY-10, 10, 10);
      ellipse(mouseX+10, mouseY-10, 10, 10);
      ellipse(mouseX-10, mouseY+10, 10, 10);

    }
    
     if (herramienta == 7) {

       
    curve (mouseX +10, mouseY +90, mouseX +5, mouseY +5, mouseX +15, mouseY +15,
           mouseX +10, mouseY +70);

    }
    
      if (herramienta == 8) {

      
        beginShape();
curveVertex(mouseX +84, mouseY +91);
curveVertex(mouseX +84, mouseY +91);
curveVertex(mouseX +68, mouseY +19);
curveVertex(mouseX +21, mouseY +17);
curveVertex(mouseX +32, mouseY +100);
curveVertex(mouseX +32, mouseY +100);
endShape();
        ellipse(mouseX, mouseY, 30,30);
    }
    
     if (herramienta == 9) {

      ellipseMode(CENTER); 

ellipse(mouseX, mouseY, 50, 50);
       fill(255);
        ellipse(mouseX, mouseY, 30,30);
    }
    
     if (herramienta == 10) {

      
       bezierDetail(50);
bezier(mouseX +85, mouseY+ 20, mouseX +10, mouseY+ 10, mouseX +90,mouseY+ 90, mouseX +15,mouseY+ 80);
    }
    
   
    //Herramientas para cambiar de color el fondo de la pantalla en la cual se dibuja
    
 if (herramienta == 21) {

      background(255);
 }
    
    if (herramienta == 22) {
      background(0);
       textSize(15);
      
  fill(255);
  text('Background', 700, 500);
      
 }
    
    if (herramienta == 23) {

      background(93,93,93);
      
 }
  }
}