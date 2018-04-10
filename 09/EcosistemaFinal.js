
var orcaso;

// variable para los huevos
var misHuevos = [];



// Variables de los osos
var misOsos = [];
var misOsas = [];
var misOsitos = [];



// Variables de las plantas. 
var misPlantas = [];

// Variables de los peces
var misPeces = [];

// Variables de los pinguinos
var misPinguinos = [];

// Variables de las pinguinas
var misPinguinas = [];

// Variables externas

var x = 0.1;
var dir = 1;


function setup() {
  
  createCanvas(900, 1000);
  
  // Se crea la variable de los osos 

  for (var i = 0; i < 1; i = i + 1) {
    misOsos[i] = new oso();
  }
  
   for (var i = 0; i < 3; i = i + 1) {
    misOsas[i] = new osa();
  }
  
  for (var i = 0; i < 1; i = i + 1) {
    misOsitos[i] = new osito();
  }
  
  orcaso = new Orca();
  
  
  //Se cean las variables de las plantas
  
  for (var i = 0; i < 50; i = i + 1) {
    
    var r = random(5,70);
    misPlantas[i] = new Planta(r);
  }
  
  //Se crean las variables de los peces
  
  for (var i = 0; i < 15; i = i + 1) {
    
    var r = random(0,255);
    var t = random(5,30);
    misPeces[i] = new Pez(r,t);
  }
  
  //Se cean las variables de los pinguinos
  
  for (var i = 0; i < 3; i = i + 1) {
    misPinguinos[i] = new Pinguino();
  }  
  
  for (var i = 0; i < 3; i = i + 1) {
    misPinguinas[i] = new Pinguina();
  }  
  
  //Se cean las variables de los huevos
  
  for (var i = 0; i < 3; i = i + 1) {
    misPinguinos[i] = new Pinguino();
  }  
  
  for (var i = 0; i < 3; i = i + 1) {
    misHuevos[i] = new Huevo();
  }  
  
}

function draw() {
  background(171, 210, 239);
  
 // Cuadrado del iceberg
 fill(255);
 noStroke();
 ellipse(450,0,1000,650);
 
 
 // Dibujar la orca
 
  orcaso.dibujarse();
  orcaso.moverse();

  // Dibujar los osos en el canvas
  for (var i = 0; i < misOsos.length; i = i + 1) {
    misOsos[i].dibujarse();
    misOsos[i].moverse();
  }
  
   // Dibujar las osas en el canvas
  for (var i = 0; i < misOsas.length; i = i + 1) {
    misOsas[i].dibujarse();
    misOsas[i].moverse();
  }
   
 
// Creación de un nuevo oso

for (var i = 0; i < misOsos.length; i = i + 1) {
  for (var j = 0; j < misOsas.length; j = j + 1) {
    
    if(dist(misOsos[i].x,misOsos[i].y,misOsas[j].x,misOsas[j].y)< 80)
    {
       for (var f = 0; f < misOsitos.length; f = f + 1) {
        misOsitos[f].dibujarse();
          misOsitos[f].moverse();
       misOsitos[f].crecer();
  
        
         }
       }
     }
   }
   
   // Dibujar las plantas en el canvas
  for (var i = 0; i < misPlantas.length; i = i + 1) {
    misPlantas[i].dibujarse();
    misPlantas[i].moverse();
    
  }
  
  // Dibujar los peces
  for (var i = 0; i < misPeces.length; i = i + 1) {
    misPeces[i].dibujarse();
    misPeces[i].moverse();
    
  }
  
  // Morir las plantas 
  
  for (var i = 0; i < misPlantas.length; i = i + 1) {
  for (var j = 0; j < misPeces.length; j = j + 1) {
    
    if(dist(misPlantas[i].x,misPlantas[i].y,misPeces[j].x,misPeces[j].y)< 20)
    {
       misPlantas[i].morirse();
       misPeces[j].crecer();
  
         }
       } 
     }
     
      // Morir los peces
  
  for (var i = 0; i < misPinguinos.length; i = i + 1) {
  for (var j = 0; j < misPeces.length; j = j + 1) {
    
    if(dist(misPinguinos[i].x,misPinguinos[i].y,misPeces[j].x,misPeces[j].y)< 20)
    {
       misPeces[j].morirse();
       
         }
       } 
     }
     
     // Morir los peces 
     
     for (var i = 0; i < misPinguinas.length; i = i + 1) {
  for (var j = 0; j < misPeces.length; j = j + 1) {
    
    if(dist(misPinguinas[i].x,misPinguinas[i].y,misPeces[j].x,misPeces[j].y)< 20)
    {
       misPeces[j].morirse();
       
         }
       } 
     }
     
     // Morir los pinguinos
     
     for (var i = 0; i < misPinguinas.length; i = i + 1) {
  for (var j = 0; j < misOsas.length; j = j + 1) {
    
    if(dist(misPinguinas[i].x,misPinguinas[i].y,misOsas[j].x,misOsas[j].y)< 100)
    {
       misPinguinas[i].morirse();
       
         }
       } 
     }
     
      for (var i = 0; i < misPinguinos.length; i = i + 1) {
  for (var j = 0; j < misOsas.length; j = j + 1) {
    
    if(dist(misPinguinos[i].x,misPinguinos[i].y,misOsas[j].x,misOsas[j].y)< 100)
    {
       misPinguinos[i].morirse();
       
         }
       } 
     }
     
      for (var i = 0; i < misPinguinos.length; i = i + 1) {
    
    if(dist(misPinguinos[i].x,misPinguinos[i].y,orcaso.x,orcaso.y)< 100)
    {
       misPinguinos[i].alejarse();
       
         }
        
     }
     
      fill(255);
    noStroke();
    ellipse(700,600,300,300);
    
     // Dibujar los pinguinos en el canvas
  for (var i = 0; i < misPinguinos.length; i = i + 1) {
    misPinguinos[i].dibujarse();
    misPinguinos[i].moverse();
  }
  
  // Dibujar los pinguinos en el canvas
  for (var i = 0; i < misPinguinas.length; i = i + 1) {
    misPinguinas[i].dibujarse();
    misPinguinas[i].moverse();
  }
     
    // Reproducción de los pinguinos
    
     for (var i = 0; i < misPinguinos.length; i = i + 1) {
  for (var j = 0; j < misPinguinas.length; j = j + 1) {
    
    if(dist(misPinguinos[i].x,misPinguinos[i].y,misPinguinas[j].x,misPinguinas[j].y)< 100)
    {
       for (var i = 0; i < 3; i = i + 1) {
    misHuevos[i].dubujarse();
    }  
           }
         
         
       } 
     }
     
     for (var i = 0; i < 3; i = i + 1) {
    misHuevos[i] = new Huevo();
    }  
   
     
 }
 
 
 // Especie Orca
 
 function Orca()
 {
   this.x = random (0,1000);
   this.y = random (500,1000);
   
   this.tamano = 150;
   this.tamano2 = 60;
   this.tamano3 = 30;
    this.tamano4 = 60;
    this.tamano5 = 10;
   
   this.dibujarse = function() {
     
     fill(0);
     noStroke();
     ellipse(this.x,this.y,this.tamano,this.tamano2);
     ellipse(this.x+70,this.y-10,this.tamano4,this.tamano3);
     stroke(2);
     ellipse(this.x+70,this.y+10,this.tamano4,this.tamano3);
     ellipse(this.x,this.y+40,this.tamano3,this.tamano4);
     ellipse(this.x,this.y-40,this.tamano3,this.tamano4);
     fill(255);
     ellipse(this.x,this.y,this.tamano4,this.tamano3);
     ellipse(this.x-60,this.y+7,this.tamano5,this.tamano5);
     ellipse(this.x-60,this.y-7,this.tamano5,this.tamano5);
   }
   
   this.moverse = function() {
     
     this.x = this.x + 0.2;
     
   }
 }
 
 // Especie huevo
 
 function Huevo()
 {
   this.x = random (400,1000);
   this.y = random (300,900);
   this.tamano = 30;
   this.tamano2 = 50;
   
   this.dibujarse = function() {
     
     fill(229,220,106);
     noStroke();
     ellipse(this.x,this.y,this.tamano,this.tamano2);
   }
   
   this.morirse = function(){
     
   this.x = 0;
   this.y = random (300,900);
   this.tamano = 30;
   this.tamano2 = 50;
   }
 }
 
// Especie Pinguino

function Pinguino() {
  this.x = random(0, width);
  this.y = random(100, height);
  this.tamano = 50;
  this.tamano2 = 30;
  this.tamano3 = 25;
  this.tamano4 = 7;
  this.tamano5 = 10;
  this.tamano6 = 13;
  this.vivo = 1;

  this.dibujarse = function() {
    if (this.vivo == 1) {
      noStroke();
      if (this.genero == 1) {
        fill(0);
      } else {
        fill(93, 93, 93);
      }
      ellipse(this.x, this.y - 35, this.tamano2, this.tamano2);
      ellipse(this.x, this.y, this.tamano, this.tamano);
      fill(255);
      ellipse(this.x, this.y, this.tamano3, this.tamano3);
      ellipse(this.x - 6, this.y - 38, this.tamano4, this.tamano4);
      ellipse(this.x + 6, this.y - 38, this.tamano4, this.tamano4);
      fill(219, 150, 0);
      ellipse(this.x, this.y - 32, this.tamano5, this.tamano5);
      ellipse(this.x - 9, this.y + 27, this.tamano6, this.tamano6);
      ellipse(this.x + 9, this.y + 27, this.tamano6, this.tamano6);

    }
  }

  this.moverse = function() {


    this.x = this.x + random(-3, 3) + random(-1, 2) * dir;
    this.y = this.y + random(-3, 3) + random(-1, 2) * dir;


    if (this.y < 100) {
      this.y = 100;
    }

    if (this.y > 1000) {
      dir = -1
    }
    if (this.x > 1000) {
      dir = -1
    }


    if (this.y < 150) {
      dir = 1
    }
    if (this.x < 0) {
      dir = 1
    }
  }
  
  this.alejarse = function() {


    this.x = this.x + random(-3, 3) + random(-1, 2) * -1;
    this.y = this.y + random(-3, 3) + random(-1, 2) * -1;



  }

  this.crecer = function() {
    this.tamano = this.tamano + 0.2;
  }

  this.morirse = function() {
    
    this.x = 0;
    this.y = 0;
    this.tamano = 0;
  this.tamano2 = 0;
  this.tamano3 = 0;
  this.tamano4 = 0;
  this.tamano5 = 0;
  this.tamano6 = 0;
  }
}


// Especie Pinguina

function Pinguina() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = 50;
  this.tamano2 = 30;
  this.tamano3 = 25;
  this.tamano4 = 7;
  this.tamano5 = 10;
  this.tamano6 = 13;
  this.vivo = 1;

  this.dibujarse = function() {
    if (this.vivo == 1) {
      noStroke();
      
        fill(0);
      
      ellipse(this.x, this.y - 35, this.tamano2, this.tamano2);
      ellipse(this.x, this.y, this.tamano, this.tamano);
      fill(255);
      ellipse(this.x, this.y, this.tamano3, this.tamano3);
      ellipse(this.x - 6, this.y - 38, this.tamano4, this.tamano4);
      ellipse(this.x + 6, this.y - 38, this.tamano4, this.tamano4);
      fill(219, 150, 0);
      ellipse(this.x, this.y - 32, this.tamano5, this.tamano5);
      ellipse(this.x - 9, this.y + 27, this.tamano6, this.tamano6);
      ellipse(this.x + 9, this.y + 27, this.tamano6, this.tamano6);

    }
  }

  this.moverse = function() {


    this.x = this.x + random(-3, 3) + random(-1, 2) ;
    this.y = this.y + random(-3, 3) + random(-1, 2) ;
    



  }
  
  this.alejarse = function() {


    this.x = this.x + random(-3, 3) + random(-1, 2) * -1;
    this.y = this.y + random(-3, 3) + random(-1, 2) * -1;



  }

  this.crecer = function() {
    this.tamano = this.tamano + 0.2;
  }

  this.morirse = function() {
    
    this.x = 0;
    this.y = 0;
    this.tamano = 0;
  this.tamano2 = 0;
  this.tamano3 = 0;
  this.tamano4 = 0;
  this.tamano5 = 0;
  this.tamano6 = 0;
  }
}
 
// Especie pez 

function Pez(r,t) {
  this.x = random(0, 1000);
  this.y = random(500, 1000);
  this.tamano = t;
  this.vivo = 1;
  this.tamano2 = 10;
  this.tamano3 = 20;
  this.tamano4 = 10;

  this.dibujarse = function() {
    if (this.vivo == 1) {
     stroke(2);
     fill(56,150,r);
     rect(this.x, this.y, this.tamano, this.tamano);
     fill(r,150,78);
     triangle(this.x,this.y,this.x - this.tamano2,this.y,this.x ,this.y - this.tamano2);
   

    }
  }

  this.moverse = function() {
  
    this.x = this.x + random (-2,2);
    this.y = this.y + random(-3, 3);
    
    if (this.x > 100)
    {
      dir = -1;
    }
    
     if (this.x < 0)
    {
      dir = 1;
    }

  }

  this.morirse = function() {
    vivo = 0;
   this.tamano = 0;
   this.tamano2 = 0;
    
  }
  
  this.crecer = function()
  {
    this.tamano = this.tamano+5;
  }

}

// Especie planta

function Planta(r) {
  this.x = random(0, width);
  this.y = random(500, height);
  this.tamano = 10;
  this.tamano2 = r;
  this.vivo = 1;

  this.dibujarse = function() {
    if (this.vivo == 1) {
      fill(149,193,131);
      noStroke();
      ellipse(this.x, this.y, this.tamano, this.tamano2);
      ellipse(this.x, this.y,this.tamano,this.tamano);
    }
  }
  // moverse planta
  this.moverse = function() {
    this.tamano = this.tamano + random(-1, 1);
    
  }

  this.morirse = function() {
    this.vivo = 0;
    this.x = 0;
    this.y = 0;
  }
}


// Especie osa

function mousePressed()
{
  
}

function osa() {
  this.x = random(0, 1000);
  this.y = random(0, 150);
  this.tamano = 85;
  this.tamano2 = 50;
  this.tamano3 = 8;
  this.tamano4 = 15;
  this.tamano5 = 20;
  this.tamano6 = 20;
  this.tamano7 = 30;
  
  this.vivo = 1;

  this.dibujarse = function() {
    if (this.vivo == 1) {
      stroke(2);
        fill(236, 237, 239);
     

      ellipse(this.x, this.y, this.tamano, this.tamano);
      ellipse(this.x, this.y + 5, this.tamano2, this.tamano2);
      ellipse(this.x - 17, this.y - 25, this.tamano5, this.tamano5);
      ellipse(this.x + 17, this.y - 25, this.tamano5, this.tamano5);
      ellipse(this.x - 19, this.y + 47, this.tamano6, this.tamano7);
      ellipse(this.x + 19, this.y + 47, this.tamano6, this.tamano7);

      fill(0);
      ellipse(this.x, this.y + 15, this.tamano4, this.tamano3);
      ellipse(this.x - 7, this.y, this.tamano3, this.tamano4);
      ellipse(this.x + 7, this.y, this.tamano3, this.tamano4);
    }
  }


//Movimiento de las osas 

  this.moverse = function() {
  
    this.x = this.x + random(-3, 3) + 0.1 * dir;
    this.y = this.y + random(-3, 3) + 0.1 * dir;
    

    if (this.y > 100) {
      dir = 1
    }
    if (this.x > 1000) {
      dir = -1
    }


    if (this.y < 0) {
      dir = -1
    }
    if (this.x < 0) {
      dir = 1
    }
  }
  
  //Función crecer dela osa

  this.crecer = function() {
    this.tamano = 1 + x;
    this.tamano2 = 1 + x;
    this.tamano3 = 1 + x;
    this.tamano4 = 1 + x;
    this.tamano5 = 1 + x;
    this.tamano6 = 1 + x;
    this.tamano7 = 1 + x;
    x = x + 0.1;

    if (this.tamano > 85) {
      this.tamano = 85;

    }
    if (this.tamano2 > 50) {
      this.tamano2 = 50;

    }
    if (this.tamano3 > 8) {
      this.tamano3 = 8;

    }

    if (this.tamano4 > 15) {
      this.tamano4 = 15;

    }
    if (this.tamano5 > 20) {
      this.tamano5 = 20;

    }

    if (this.tamano6 > 20) {
      this.tamano6 = 20;

    }

    if (this.tamano7 > 30) {
      this.tamano7 = 30;

    }


  }

  this.morirse = function() {
    this.vivo = 0;
    
    if (this.vivio= 0)
    {
    this.tamano = 1 + x;
    this.tamano2 = 1 + x;
    this.tamano3 = 1 + x;
    this.tamano4 = 1 + x;
    this.tamano5 = 1 + x;
    this.tamano6 = 1 + x;
    this.tamano7 = 1 + x;
    }
  }

}

// Especie oso

function oso() {
  this.x = random(0, 1000);
  this.y = random(0, 150);
  this.tamano = 85;
  this.tamano2 = 50;
  this.tamano3 = 8;
  this.tamano4 = 15;
  this.tamano5 = 20;
  this.tamano6 = 20;
  this.tamano7 = 30;
  
  this.vivo = 1;

  this.dibujarse = function() {
    if (this.vivo == 1) {
      stroke(2);
        fill(215, 216, 220);
      

      ellipse(this.x, this.y, this.tamano, this.tamano);
      ellipse(this.x, this.y + 5, this.tamano2, this.tamano2);
      ellipse(this.x - 17, this.y - 25, this.tamano5, this.tamano5);
      ellipse(this.x + 17, this.y - 25, this.tamano5, this.tamano5);
      ellipse(this.x - 19, this.y + 47, this.tamano6, this.tamano7);
      ellipse(this.x + 19, this.y + 47, this.tamano6, this.tamano7);

      fill(0);
      ellipse(this.x, this.y + 15, this.tamano4, this.tamano3);
      ellipse(this.x - 7, this.y, this.tamano3, this.tamano4);
      ellipse(this.x + 7, this.y, this.tamano3, this.tamano4);
    }
  }


//Movimiento de los osos 

  this.moverse = function() {
  
    this.x = this.x + random(-3, 3) + 0.1 * dir;
    this.y = this.y + random(-3, 3) + 0.1 * dir;
    

    if (this.y > 100) {
      dir = -1
    }
    if (this.x > 1000) {
      dir = -1
    }


    if (this.y < 0) {
      dir = 1
    }
    if (this.x < 0) {
      dir = 1
    }
  }
  
  //Función crecer del oso

  this.crecer = function() {
    this.tamano = 1 + x;
    this.tamano2 = 1 + x;
    this.tamano3 = 1 + x;
    this.tamano4 = 1 + x;
    this.tamano5 = 1 + x;
    this.tamano6 = 1 + x;
    this.tamano7 = 1 + x;
    x = x + 0.1;

    if (this.tamano > 85) {
      this.tamano = 85;

    }
    if (this.tamano2 > 50) {
      this.tamano2 = 50;

    }
    if (this.tamano3 > 8) {
      this.tamano3 = 8;

    }

    if (this.tamano4 > 15) {
      this.tamano4 = 15;

    }
    if (this.tamano5 > 20) {
      this.tamano5 = 20;

    }

    if (this.tamano6 > 20) {
      this.tamano6 = 20;

    }

    if (this.tamano7 > 30) {
      this.tamano7 = 30;

    }


  }

  this.morirse = function() {
    this.vivo = 0;
    
    if (this.vivio= 0)
    {
    this.tamano = 1 + x;
    this.tamano2 = 1 + x;
    this.tamano3 = 1 + x;
    this.tamano4 = 1 + x;
    this.tamano5 = 1 + x;
    this.tamano6 = 1 + x;
    this.tamano7 = 1 + x;
    }
  }

}


// Especie osito

function osito() {
  this.x = random(0, 1000);
  this.y = random(0, 150);
  this.tamano = 85;
  this.tamano2 = 50;
  this.tamano3 = 8;
  this.tamano4 = 15;
  this.tamano5 = 20;
  this.tamano6 = 20;
  this.tamano7 = 30;
  
  this.vivo = 1;

  this.dibujarse = function() {
    if (this.vivo == 1) {
      stroke(2);
        fill(236, 237, 239);
     

      ellipse(this.x, this.y, this.tamano, this.tamano);
      ellipse(this.x, this.y + 5, this.tamano2, this.tamano2);
      ellipse(this.x - 17, this.y - 25, this.tamano5, this.tamano5);
      ellipse(this.x + 17, this.y - 25, this.tamano5, this.tamano5);
      ellipse(this.x - 19, this.y + 47, this.tamano6, this.tamano7);
      ellipse(this.x + 19, this.y + 47, this.tamano6, this.tamano7);

      fill(0);
      ellipse(this.x, this.y + 15, this.tamano4, this.tamano3);
      ellipse(this.x - 7, this.y, this.tamano3, this.tamano4);
      ellipse(this.x + 7, this.y, this.tamano3, this.tamano4);
    }
  }


//Movimiento de las osas 

  this.moverse = function() {
  
    this.x = this.x + random(-3, 3) + 0.1 * dir;
    this.y = this.y + random(-3, 3) + 0.1 * dir;
    

    if (this.y > 100) {
      dir = -1
    }
    if (this.x > 1000) {
      dir = -1
    }


    if (this.y < 0) {
      dir = 1
    }
    if (this.x < 0) {
      dir = 1
    }
  }
  
  //Función crecer dela osa

  this.crecer = function() {
    this.tamano = 1 + x;
    this.tamano2 = 1 + x;
    this.tamano3 = 1 + x;
    this.tamano4 = 1 + x;
    this.tamano5 = 1 + x;
    this.tamano6 = 1 + x;
    this.tamano7 = 1 + x;
    x = x + 0.1;

    if (this.tamano > 85) {
      this.tamano = 85;

    }
    if (this.tamano2 > 50) {
      this.tamano2 = 50;

    }
    if (this.tamano3 > 8) {
      this.tamano3 = 8;

    }

    if (this.tamano4 > 15) {
      this.tamano4 = 15;

    }
    if (this.tamano5 > 20) {
      this.tamano5 = 20;

    }

    if (this.tamano6 > 20) {
      this.tamano6 = 20;

    }

    if (this.tamano7 > 30) {
      this.tamano7 = 30;

    }


  }

  this.morirse = function() {
    this.vivo = 0;
    
    if (this.vivio= 0)
    {
    this.tamano = 1 + x;
    this.tamano2 = 1 + x;
    this.tamano3 = 1 + x;
    this.tamano4 = 1 + x;
    this.tamano5 = 1 + x;
    this.tamano6 = 1 + x;
    this.tamano7 = 1 + x;
    }
  }

}
