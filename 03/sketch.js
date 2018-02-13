var cir = 1;
var per = -10;
var aba = 105;
var tam1 = 20;
var tam2 = 20;
var cir2 = 325;
var aba2 = 590;
var dir = 1;
var ara = 800;
var y = 1;
var tam3 = 20;
var tam4 = 20;
var dir2 = 1;
var col = 255;
var col2 = 20;
var lineax = 520;
var lineax2 = 300;
var lineay = 10;


function setup() {
  createCanvas(800, 650);
  frameRate(4);
}

function draw() {
  background(189, 239, 245);


  // nubes de fondo
  noStroke();
  fill(255, 255, col);
  ellipse(400, 210, 90, 70);
  ellipse(335, 250, 100, 100);
  ellipse(440, 240, 90, 90);
  ellipse(340, 200, 80, 80);
  ellipse(380, 280, 90, 80);

  noStroke();

  ellipse(700, 410, 90, 70);
  ellipse(635, 450, 150, 150);
  ellipse(690, 480, 100, 100);
  ellipse(740, 440, 90, 90);
  ellipse(640, 400, 100, 80);
  ellipse(580, 470, 80, 80);


  ellipse(100, 310, 90, 70);
  ellipse(35, 350, 150, 150);
  ellipse(100, 390, 100, 100);
  ellipse(140, 340, 90, 90);
  ellipse(40, 300, 100, 80);
  ellipse(80, 370, 80, 80);



  stroke(3);
  fill(255); // Círculo que persiguen blanco
  ellipse(cir, aba, tam1, tam2);
  cir = cir + 3;

  if (cir > 100) {
    fill(24, 54, 57); // Circulo que persigue encima de la loma
    ellipse(per, 100, 30, 30)
    per = per + 3 * dir2;
  }



  // Líenas del precipicio

  stroke(3);
  line(300, 115, 0, 115);

  line(300, 600, 300, 115);

  line(300, 600, 900, 600);

  // caída del círculo blanco

  if (cir > 300) {
    cir = 315;
    aba = aba + 3;

  }

  if (per > 300) {
    per = 302;
  }

  if (aba > 585) {
    aba = 595;
    tam2 = 0;
    tam1 = 0;
    fill(255);
    ellipse(cir2, aba2, tam3, tam4); //Se crea una nueva bola que vaya a la derecha 
    cir2 = cir2 + y * dir;

  }

  if (cir2 > 600) {
    dir = -1;

  }

  if (aba > 105 && aba <= 550) {
    stroke(3);
    line(305, lineay, 305, lineay + 70)
    line(318, lineay, 318, lineay + 70)
    line(330, lineay, 330, lineay + 70)
    lineay = lineay + 3;
  }

  if (dir == -1) {
    fill(24, 54, 57);
    ellipse(ara, 590, 30, 30); // Elipse que persigue dos. (Abajo de la montaña).
    ara = ara - 3 * dir2;
    y = 4



  }

  // Líneas de susto

  if (dir2 == -1) {

    col = col - 20;
    line(lineax + 10, 560, lineax + 20, 540);
    line(lineax, 560, lineax, 540);
    line(lineax - 10, 560, lineax - 20, 540);
    lineax = lineax + 3;

    line(lineax2 + 10, 80, lineax2 + 20, 60);
    line(lineax2, 80, lineax2, 60);
    line(lineax2 - 10, 80, lineax2 - 20, 60);
    lineax2 = lineax2 - 3;
  }

  //Crecimiento de la pelota blanca

  if (dir == -1 && cir2 < 370) {
    tam3 = tam3 + 2;
    tam4 = tam4 + 2;
    cir2 = 350;
  }

  if (tam3 == 90 || tam4 == 90) {
    aba2 = 555;
    tam3 = tam3 - 2;
    tam4 = tam4 - 2;
    dir2 = -1;



  }
  // Ataque en toda la zona de las pelotas verdes.
  //Existe un aumento progresivo, por eso hay arreglos en distintos momentos. 

  if (dir2 == -1 && per < -10) {

    fill(24, 54, 57);
    for (var u = 0; u < 400; u = u + 100) {

      for (var k = 0; k < 400; k = k + 100) {
        var r = random(255);
        ellipse(u * r, k * r, 20, 20);

        fill(0);
        line(370, 500, 380, 450);
        line(350, 500, 350, 450);
        line(330, 500, 320, 450);
        col = col + 10;
      }
    }
  }


  if (dir2 == -1 && per < -70) {
    for (var t = 0; t < 400; t = t + 50) {

      for (var kk = 0; kk < 400; kk = kk + 50) {
        var rr = random(255);
        ellipse(t * rr, kk * rr, 20, 20);
      }
    }
  }

  if (dir2 == -1 && per < -170) {
    for (var tt = 0; tt < 400; tt = tt + 10) {

      for (var kkk = 0; kkk < 400; kkk = kkk + 10) {
        var rrr = random(255);
        ellipse(tt * rrr, kkk * rrr, 20, 20);
      }
    }
  }



  if (dir2 == -1 && per < -370) {
    for (var ttt = 0; ttt < 400; ttt = ttt + 5) {

      for (var kkkk = 0; kkkk < 400; kkkk = kkkk + 5) {
        var rrrr = random(255);
        ellipse(ttt * rrrr, kkkk * rrrr, 20, 20);

      }
    }
  }

  // Crecimiento completo de la pelota blanca y su cambio de color 
  if (dir2 == -1 && per < -410) {
    fill(255);
    ellipse(cir2, aba2, tam3, tam4);
    tam3 = tam3 + 5;
    tam4 = tam4 + 5;
    col = col + 1;

  }


  if (tam3 > 1500) {
    tam3 = 1600;
    tam4 = 1600;
  }


  // Fin de la historieta

  if (tam3 > 800) {
    textSize(80);
    fill(col2, 39, 120);
    text('THE END', 210, 350);
    col2 = col2 + 10;

  }

  if (frameCount < 70) {
    saveCanvas("miFlipbook" + frameCount, 'jpg');
  }
}