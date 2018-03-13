// Variables de los botones de las mascaras de recorte

var boton1x = 30;
var boton1y = 100;
var boton1tam = 40;

var boton2x = 30;
var boton2y = 160;
var boton2tam = 40;

var boton6x = 30;
var boton6y = 220;
var boton6tam = 40;

var boton7x = 30;
var boton7y = 340;
var boton7tam = 40;


var bogota;
var miMascara;

function preload()
{
  bogota = loadImage('assets/grafiti.jpg');
  miMascara = loadImage('assets/mascara.png');
  
}


//Variables de herramientas y de color, ayudan a definir cual elemento se tiene
//seleccionado
var herramienta = 0;


function setup() {

  createCanvas(windowWidth, windowHeight);
  image(bogota,0,0);
  bogota.mask(miMascara);

}

function draw() {
 
  // Cuadrados que se utilizan en el fondo. (Donde están los colores 
  // y las herramientas
  
  stroke(3);
  fill(112,22,82);
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
  fill(255);
  text('Filtros', 20, 50);

  noStroke();
  textSize(12);
  fill(255);
  text('Cuadrados', 25, 153);

  textSize(12);
  fill(255);
  text('Mascara', 30, 211);

  textSize(12);
  fill(255);
  text('Bubbles', 28, 272);
  
  textSize(12);
  fill(255);
  text('Descargar', 25, 392);



stroke(3);
  line(0, 70, 150, 70);
  
  // Con éstas funciones se crean los botones de las herramientas de dibujo
  // Los círculos representan los colores que el usuario puede seleccionar 
  // y los cuadrados representan la funcion que tiene cada uno de los cuadrados.

  


  //Cuadrados de los botones de las herramientas
  
  fill(255);
  rect(boton1x, boton1y, boton1tam, boton1tam);
  fill(255);
  rect(boton2x, boton2y, boton2tam, boton2tam);
  fill(255);
  rect(boton6x, boton6y, boton6tam, boton6tam);
  fill(255);
  rect(boton7x, boton7y, boton7tam, boton7tam);
 

 // Dibujos de los elementos dentro de los cuadrados blancos 
    
   

//Cuadrado
fill(202,7,137);
rect( 40, 110, 20, 20);



//destello
triangle(35, 165, 58, 175, 66, 195);

//bubble
fill(202,7,137);
ellipse(50, 240, 25, 25);


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
  

    if (mouseX > boton6x && mouseX < boton6x + boton6tam &&
      mouseY > boton6y && mouseY < boton6y + boton6tam) {
      herramienta = 3;
    }
    
    if (mouseX > boton7x && mouseX < boton7x + boton7tam &&
      mouseY > boton7y && mouseY < boton7y + boton7tam) {
      herramienta = 4;
    }

  
    
    // A tavés de éstos métodos se define que función va a tener cada una de 
    //las  herramientas.
    
    if (herramienta == 0) {

      
       for(var f = mouseY-20; f< mouseY+20; f=f+10) {
    for (var c = mouseX-20; c < mouseX+20; c = c+10) {
      
      var colSel = get(c, f);
      
      var rojo = red(colSel);
      var verde = green(colSel);
      var azul = blue(colSel);
  
  var nuevoCol = color(azul,verde,rojo);
  
  updatePixels();
  
   noStroke();
   fill(nuevoCol);
  rect(mouseX , mouseY,30,30);
    }
  }
  

    }
    if (herramienta == 1) {
     filter(INVERT);
     image(bogota, 0, 0);
    }

    if (herramienta == 3) {

      for(var f = mouseY-20; f< mouseY+20; f=f+20) {
    for (var c = mouseX-20; c < mouseX+20; c =c+20) {
      
      var colSel = get(c, f);
      
  
   noStroke();
   fill(colSel);
   ellipse(c,f,20,20);
    }
      }

    }
 

   
  
   
  }
}