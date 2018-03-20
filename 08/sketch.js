var mx = 0.0;
var miSonido;
var miSonido2;
var amplitud;

function preload() {
  miSonido = loadSound('assets/David_Szesztay_-_There_It_Is.mp3');
  miSonido2 = loadSound('Jason_Shaw_-_DOBRO_MASHUP.mp3');

}


function setup() {
  createCanvas(900, 900, WEBGL);
  miSonido.play();
  amplitud = new p5.Amplitude();




}

function draw() {
  background(amplitud, 14, 19);
  miSonido.setVolume(map(mouseY, 400, 0, 0.0, 1.0));
  //miSonido.rate(map(mouseX, 0, 400, -2.0, 2));

  var dif = mouseX - mx;
  if (abs(dif) > 1.0) {
    mx = mx + dif / 32.0;
  }
  // Mantiene el marcador en la pantalla
  mx = constrain(mx, 1, width - 1);
  noStroke();
  // Dibuja el rectángulo inferior
  push();
  fill(255);
  translate(0, (height / 2) - 2);
  plane(width, 5);
  pop();
  // Dibuja el marcador de posición
  push();
  fill(204, 102, 0);
  translate(mx - (width / 2) - 1, (height / 2) - 2);
  plane(4, 5);
  pop();

  if (mx <= 950) {


    var nivel = amplitud.getLevel();
    // rotate(j);
    nivel = map(nivel, 0.0, 1.0, 0, 600);

    // 
    push();
    translate(-10,-200,-200);
    for (var j = 0; j < 100; j = j + 1) {
      
      fill(nivel,30,100);
      rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.02);
      
      stroke(255);
      rect(j,j,nivel,nivel);

    }
    
    pop();
    
     push();
    translate(-10,-200,-200);
    rotateY(PI);
    for (var j = 0; j < 100; j = j + 1) {
      
      fill(nivel,30,100);
      rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.02);
      
      stroke(255);
      rect(j,j,nivel,nivel);

    }
    
    pop();
    // Los cuadrados giran  cada segundo, es decir, cada una de las posiciones cambia 
    // sumando un segundo

    //rotateX(PI / 2);
    //rotateX(frameCount * 0.02);


push();
    translate (20,0,-1700);
    push();
     rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);

    translate(0, -50);

    fill(nivel, 12, 62);

    ellipse(20, -420, nivel, 30);

    ellipse(20, -380, nivel, 30);

    ellipse(20, -340, nivel, 30);

    ellipse(20, -300, nivel, 30);

    ellipse(20, -260, nivel, 30);

    ellipse(20, -220, nivel, 30);

    ellipse(20, -180, nivel, 30);

    ellipse(20, -140, nivel, 30);

    ellipse(20, -100, nivel, 30);

    ellipse(20, -60, nivel, 30);

    ellipse(20, -20, nivel, 30);

    ellipse(20, 20, nivel, 30);

    ellipse(20, 60, nivel, 30);

    ellipse(20, 100, nivel, 30);

    ellipse(20, 140, nivel, 30);

    ellipse(20, 180, nivel, 30);

    ellipse(20, 220, nivel, 30);

    ellipse(20, 260, nivel, 30);

    ellipse(20, 300, nivel, 30);

    ellipse(20, 340, nivel, 30);

    ellipse(20, 380, nivel, 30);

    ellipse(20, 300, nivel, 30);

    pop();


    push();
     rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);

    translate(0, -50);

    fill(nivel, 12, 62);

    ellipse(250, -420, nivel, 30);

    ellipse(250, -380, nivel, 30);

    ellipse(250, -340, nivel, 30);

    ellipse(250, -300, nivel, 30);

    ellipse(250, -260, nivel, 30);

    ellipse(250, -220, nivel, 30);

    ellipse(250, -180, nivel, 30);

    ellipse(250, -140, nivel, 30);

    ellipse(250, -100, nivel, 30);

    ellipse(250, -60, nivel, 30);

    ellipse(250, -20, nivel, 30);

    ellipse(250, 20, nivel, 30);

    ellipse(250, 60, nivel, 30);

    ellipse(250, 100, nivel, 30);

    ellipse(250, 140, nivel, 30);

    ellipse(250, 180, nivel, 30);

    ellipse(250, 220, nivel, 30);

    ellipse(250, 260, nivel, 30);

    ellipse(250, 300, nivel, 30);

    ellipse(250, 340, nivel, 30);

    ellipse(250, 380, nivel, 30);

    ellipse(250, 300, nivel, 30);

    pop();

    push();
     rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);

    translate(0, -50);

    fill(nivel, 12, 62);

    ellipse(-200, -420, nivel, 30);

    ellipse(-200, -380, nivel, 30);

    ellipse(-200, -340, nivel, 30);

    ellipse(-200, -300, nivel, 30);

    ellipse(-200, -260, nivel, 30);

    ellipse(-200, -220, nivel, 30);

    ellipse(-200, -180, nivel, 30);

    ellipse(-200, -140, nivel, 30);

    ellipse(-200, -100, nivel, 30);

    ellipse(-200, -60, nivel, 30);

    ellipse(-200, -20, nivel, 30);

    ellipse(-200, 20, nivel, 30);
    ellipse(-200, 60, nivel, 30);

    ellipse(-200, 100, nivel, 30);

    ellipse(-200, 140, nivel, 30);

    ellipse(-200, 180, nivel, 30);

    ellipse(-200, 220, nivel, 30);

    ellipse(-200, 260, nivel, 30);

    ellipse(-200, 300, nivel, 30);

    ellipse(-200, 340, nivel, 30);

    ellipse(-200, 380, nivel, 30);

    ellipse(-200, 300, nivel, 30);

    pop();
    
  pop();

    push();
     rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);

    translate(0, -50);

    fill(nivel, 12, 62);

    ellipse(20, -420, nivel, 30);

    ellipse(20, -380, nivel, 30);

    ellipse(20, -340, nivel, 30);

    ellipse(20, -300, nivel, 30);

    ellipse(20, -260, nivel, 30);

    ellipse(20, -220, nivel, 30);

    ellipse(20, -180, nivel, 30);

    ellipse(20, -140, nivel, 30);

    ellipse(20, -100, nivel, 30);

    ellipse(20, -60, nivel, 30);

    ellipse(20, -20, nivel, 30);

    ellipse(20, 20, nivel, 30);

    ellipse(20, 60, nivel, 30);

    ellipse(20, 100, nivel, 30);

    ellipse(20, 140, nivel, 30);

    ellipse(20, 180, nivel, 30);

    ellipse(20, 220, nivel, 30);

    ellipse(20, 260, nivel, 30);

    ellipse(20, 300, nivel, 30);

    ellipse(20, 340, nivel, 30);

    ellipse(20, 380, nivel, 30);

    ellipse(20, 300, nivel, 30);

    pop();


    push();
     rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);

    translate(0, -50);

    fill(nivel, 12, 62);

    ellipse(250, -420, nivel, 30);

    ellipse(250, -380, nivel, 30);

    ellipse(250, -340, nivel, 30);

    ellipse(250, -300, nivel, 30);

    ellipse(250, -260, nivel, 30);

    ellipse(250, -220, nivel, 30);

    ellipse(250, -180, nivel, 30);

    ellipse(250, -140, nivel, 30);

    ellipse(250, -100, nivel, 30);

    ellipse(250, -60, nivel, 30);

    ellipse(250, -20, nivel, 30);

    ellipse(250, 20, nivel, 30);

    ellipse(250, 60, nivel, 30);

    ellipse(250, 100, nivel, 30);

    ellipse(250, 140, nivel, 30);

    ellipse(250, 180, nivel, 30);

    ellipse(250, 220, nivel, 30);

    ellipse(250, 260, nivel, 30);

    ellipse(250, 300, nivel, 30);

    ellipse(250, 340, nivel, 30);

    ellipse(250, 380, nivel, 30);

    ellipse(250, 300, nivel, 30);

    pop();

    push();
     rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);

    translate(0, -50);

    fill(nivel, 12, 62);

    ellipse(-200, -420, nivel, 30);

    ellipse(-200, -380, nivel, 30);

    ellipse(-200, -340, nivel, 30);

    ellipse(-200, -300, nivel, 30);

    ellipse(-200, -260, nivel, 30);

    ellipse(-200, -220, nivel, 30);

    ellipse(-200, -180, nivel, 30);

    ellipse(-200, -140, nivel, 30);

    ellipse(-200, -100, nivel, 30);

    ellipse(-200, -60, nivel, 30);

    ellipse(-200, -20, nivel, 30);

    ellipse(-200, 20, nivel, 30);
    ellipse(-200, 60, nivel, 30);

    ellipse(-200, 100, nivel, 30);

    ellipse(-200, 140, nivel, 30);

    ellipse(-200, 180, nivel, 30);

    ellipse(-200, 220, nivel, 30);

    ellipse(-200, 260, nivel, 30);

    ellipse(-200, 300, nivel, 30);

    ellipse(-200, 340, nivel, 30);

    ellipse(-200, 380, nivel, 30);

    ellipse(-200, 300, nivel, 30);

    pop();

    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    stroke(255);
    fill(nivel, 45, nivel);
    translate(0, -70, -700)
    sphere(nivel+200);
    fill(217, 182, 39, 200);
    //ellipse(0, 0, 600, 600)
    pop();
    
     push();
    rotate(PI);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    stroke(255);
    fill(nivel, 45, nivel);
    translate(0, -70, -700)
    sphere(nivel+200);
    fill(217, 182, 39, 200);
    //ellipse(0, 0, 600, 600)
    pop();
    
    
    rotateX(PI/2);

    stroke(3);
    translate(-400, 500, 200);
    ellipsoid(100, nivel, nivel);

    translate(-400, 500, 200);
    ellipsoid(100, nivel, nivel);

    translate(-400, 500, 200);
    ellipsoid(100, nivel, nivel);

    translate(-400, 500, 200);
    //ellipsoid(100, nivel, nivel);




    fill(112, 70, nivel);
    //rect(40, 70, j + 10, j + 30);



  }


  //}
}

function mouseReleased() {
  if (miSonido.isPaused()) {
    miSonido.play();
  } else {
    miSonido.pause();
  }

}