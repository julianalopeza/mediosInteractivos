var mx = 0.0;
var x = 100;
var y = -100;

function setup() {
  createCanvas(900, 600, WEBGL);

}

function draw() {
  background(255);
  normalMaterial();
  stroke(0);


  // Actualiza a localización del marcador
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


  //Código de primavera

  if (mx <= 450) {

    //Mariposas de la primavera.  
    background(176, 231, 247);
     fill(47,123,234,100);
    ellipse(0,0,600,600,200);
    
    fill(17,93,204,100);
    ellipse(0,0,400,400,200);

    push();
    translate(0, 305, -100);
    rotateX(PI / 2);
    fill(83,158,63);
    plane(width, 700);
    pop();
     push();
    translate(0, 305, -100);
    rotateX(PI / 2);
    fill(99,198,20);
    plane(width-300, 500);
    pop();
		
    //Flor rosada
    push();
    fill(171,42,110);
    translate(10,200);
    stroke(210,39,224);
    sphere(20);
    
    //petalo 1
    
    translate(35,5);
    fill(239,145,221);
    stroke(221,172,211);
    rotate(PI/2);
    ellipsoid(10, 30, 40);
    
    //petalo 2
    
    translate(0,35,30);
    fill(232,128,193);
    stroke(239,149,209);
    rotate(PI);
    ellipsoid(10, 30, 40);
    pop();
    
    //Petalo 3
    
    push();
    translate(-25,200,10);
    fill(239,145,221);
    stroke(221,172,211);
    rotate(PI/2);
    ellipsoid(10, 30, 40);
    pop();
    
    //petalo 4
    
    push();   
    translate(8,195,-30);
    fill(232,128,193);
    stroke(239,149,209);
    rotate(PI/2);
    ellipsoid(10, 30, 40);
    pop();
    
    //Flor 2 
    
     push();
    fill(132,36,115);
    translate(-100,200,70);
    stroke(196,69,146);
    sphere(20);
    pop();
    
    // petalo 1 flor 2
    
     
    push();   
    translate(190,210,85);
    fill(191,124,25);
    stroke(219,165,93);
    rotate(PI/2);
    ellipsoid(10, 30, 40);
    pop();
    
    //Petalo 2 flor 2 
    
    push();   
    translate(150,200,75);
    fill(239,163,72);
    stroke(219,165,93);
    rotate(PI/2);
    ellipsoid(10, 30, 40);
    pop();
    
    
    //Petalo 3 flor 2 
    
    push();   
    translate(120,205,105);
    fill(191,124,25);
    stroke(219,165,93);
    rotate(PI/2);
    ellipsoid(10, 30, 40);
    pop();
    
    //Petalo 4 flor 2 
    
    push();   
    translate(150,205,135);
    fill(239,163,72);
    stroke(219,165,93);
    rotate(PI/2);
    ellipsoid(10, 30, 40);
    pop();
    
    //flor 3
    
     push();
    fill(205,107,91);
    translate(-200,200);
    stroke(196,68,58);
    sphere(20);
    pop();
    
     //Petalo 1 flor 3 
    
    push();   
    translate(-70,205,95);
    fill(224,50,175);
    stroke(229,94,198);
    rotate(PI/2);
    ellipsoid(10, 30, 40);
    pop();
    
    //Petalo 2 flor 3 
    
    push();   
    translate(-120,205,95);
    fill(239,89,211);
    stroke(229,94,198);
    rotate(PI/2);
    ellipsoid(10, 30, 40);
    pop();
    
    //Petalo 3 flor 3 
    
    push();   
    translate(-80,200,45);
    fill(239,89,211);
    stroke(229,94,198);
    rotate(PI/2);
    ellipsoid(10, 30, 40);
    pop();
    
    //Petalo 4 flor 3 
    
    push();   
    translate(-130,200,45);
    fill(224,50,175);
    stroke(229,94,198);
    rotate(PI/2);
    ellipsoid(10, 30, 40);
    pop();
    
    //Flor 4
    
     push();
    stroke(175,147,30);
    fill(243,219,76);
    translate(150,200, 100);
    sphere(20);
    pop();
    
    //Petalo 1 flor 4 
    
    push();   
    translate(-170,200,0);
    fill(199,85,66);
    stroke(229,110,94);
    rotate(PI/2);
    ellipsoid(10, 30, 40);
    pop();
    
     //Petalo 2 flor 4 
    
    push();   
    translate(-210,200,-30);
    fill(234,137,127);
    stroke(229,110,94);
    rotate(PI/2);
    ellipsoid(10, 30, 40);
    pop();
    
    //Petalo 3 flor 4 
    
    push();   
    translate(-230,200,5);
    fill(199,85,66);
    stroke(229,110,94);
    rotate(PI/2);
    ellipsoid(10, 30, 40);
    pop();
    
    //Petalo 4 flor 4 
    
    push();   
    translate(-200,205,20);
    fill(234,137,127);
    stroke(229,110,94);
    rotate(PI/2);
    ellipsoid(10, 30, 40);
    pop();
    
    
    //Flor con translate
    
    push();
    
    translate(350,0,0);
      //Petalo 1 flor 4 
     push();
    stroke(175,147,30);
    fill(243,219,76);
    translate(150,200, 100);
    sphere(20);
    pop();
    
    push();   
    translate(-170,200,0);
    fill(199,85,66);
    stroke(229,110,94);
    rotate(PI/2);
    ellipsoid(10, 30, 40);
    pop();
    
     //Petalo 2 flor 4 
    
    push();   
    translate(-210,200,-30);
    fill(234,137,127);
    stroke(229,110,94);
    rotate(PI/2);
    ellipsoid(10, 30, 40);
    pop();
    
    //Petalo 3 flor 4 
    
    push();   
    translate(-230,200,5);
    fill(199,85,66);
    stroke(229,110,94);
    rotate(PI/2);
    ellipsoid(10, 30, 40);
    pop();
    
    //Petalo 4 flor 4 
    
    push();   
    translate(-200,205,20);
    fill(234,137,127);
    stroke(229,110,94);
    rotate(PI/2);
    ellipsoid(10, 30, 40);
    pop();
    pop();
    
    //Sol
     push();
    rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
    stroke(170,141,17);
    fill(217,182,39);
    translate(0,-70, -700)
    sphere(200);
    fill(217,182,39,200);
 		ellipse(0,0,600,600)
    pop();
    
    // Nubes
    push();
    rotate(PI)
  translate(200,0);
  stroke(226,225,220);
  fill(255,150);
  sphere(40);
  translate(-50,5);
  sphere(40);
  translate(-30,-10);
  sphere(40);
  translate(5,40);
  sphere(40);
  translate(50,10);
  sphere(40);
  
	pop();

      push();
    
  translate(200,0);
  stroke(226,225,220);
  fill(255,150);
  sphere(40);
  translate(-50,5);
  sphere(40);
  translate(-30,-10);
  sphere(40);
  translate(5,40);
  sphere(40);
  translate(50,10);
  sphere(40);
    
    
  
	pop();


// Mariposas
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    fill(239, 143, 187);
    ellipse(68, 68, 59, 59);
    ellipse(48, 118, 59, 59);
    ellipse(98, 94, 49, 49);
    ellipse(88, 120, 49, 49);
    stroke(211, 24, 109);
    strokeWeight(6, 100);
    line(48, 89, 108, 115);
    noStroke();
    fill(211, 24, 109)
    ellipse(68, 68, 20, 20);
    ellipse(48, 118, 20, 20);
    ellipse(98, 94, 10, 10);
    ellipse(88, 120, 10, 10);

    strokeWeight(1);
    stroke(1);
    line(48, 89, 10, 50);
    line(48, 89, 0, 100);
    pop();

    push();
    noStroke();
    translate(-100, 200);

    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.02);
    fill(226, 101, 16);
    ellipse(68, 68, 59, 59);
    ellipse(48, 118, 59, 59);
    ellipse(98, 94, 49, 49);
    ellipse(88, 120, 49, 49);
    stroke(234, 214, 27);
    strokeWeight(6, 100);
    line(48, 89, 108, 115);
    noStroke();
    fill(234, 214, 27)
    ellipse(68, 68, 20, 20);
    ellipse(48, 118, 20, 20);
    ellipse(98, 94, 10, 10);
    ellipse(88, 120, 10, 10);


    strokeWeight(1);
    stroke(1);
    line(48, 89, 10, 50);
    line(48, 89, 0, 100);
    pop();

    push();
    noStroke();
    translate(-300, 50);
    rotateY(-frameCount * 0.01);
    fill(121, 191, 226);
    ellipse(68 - x, 68, 59, 59);
    ellipse(48 - x, 118, 59, 59);
    ellipse(98 - x, 94, 49, 49);
    ellipse(88 - x, 120, 49, 49);
    stroke(31, 77, 204);
    strokeWeight(6, 100);
    line(48 - x, 89, 108 - x, 115);
    noStroke();
    fill(31, 77, 204)
    ellipse(68 - x, 68, 20, 20);
    ellipse(48 - x, 118, 20, 20);
    ellipse(98 - x, 94, 10, 10);
    ellipse(88 - x, 120, 10, 10);


    strokeWeight(1);
    stroke(1);
    line(48 - x, 89, 10 - x, 50);
    line(48 - x, 89, 0 - x, 100);
    pop();

    push();



    noStroke();
    translate(50, -250);
    rotateY(-frameCount * 0.02);
    rotateX(frameCount * 0.01);
    fill(206, 52, 82);
    ellipse(68 - y, 68, 59, 59);
    ellipse(48 - y, 118, 59, 59);
    ellipse(98 - y, 94, 49, 49);
    ellipse(88 - y, 120, 49, 49);
    stroke(255);
    strokeWeight(6, 100);
    line(48 - y, 89, 108 - y, 115);
    noStroke();
    fill(255)
    ellipse(68 - y, 68, 20, 20);
    ellipse(48 - y, 118, 20, 20);
    ellipse(98 - y, 94, 10, 10);
    ellipse(88 - y, 120, 10, 10);


    strokeWeight(1);
    stroke(1);
    line(48 - y, 89, 10 - y, 50);
    line(48 - y, 89, 0 - y, 100);
    pop();
    
    // pasto 
    
    push();
    rotate(PI);
    translate(100,-250,-200);
    fill(99,190,20);
  cone(10, 100);
    pop();
    
     push();
    rotate(PI);
    translate(150,-250,-200);
    fill(171,195,80);
  cone(10, 100);
    pop();
    
     push();
    rotate(PI);
    translate(250,-250,-300);
    fill(23,133,65);
  cone(10, 100);
    pop();
    
      push();
    rotate(PI);
    translate(350,-250,-300);
    fill(171,195,80);
  cone(10, 100);
    pop();
    
     push();
    rotate(PI);
    translate(-350,-270,-300);
    fill(23,133,65);
  cone(10, 100);
    pop();
    
    push();
    rotate(PI);
    translate(-300,-190,-100);
    fill(23,133,65);
  cone(10, 100);
    pop();
    
     push();
    rotate(PI);
    translate(-280,-170,-100);
    fill(99,190,20);
  cone(10, 100);
    pop();
    
    // pasto
  push();
    rotate(PI);
    translate(-280,-170,100);
    fill(171,195,80);
  cone(3, 90);
    pop();
    
     push();
    rotate(PI);
    translate(280,-190,100);
    fill(23,133,65);
  cone(10, 60);
    pop();
    
    push();
    rotate(PI);
    translate(230,-150,100);
    fill(99,190,20);
  cone(5, 60);
    pop();
  }

  if (mx > 450) {
    
    background(216, 143, 54);
    push();
    translate(0,0,-600);
    fill(217,174,56);
    ellipse (0,0,1400,1400);
    fill(239,202,112);
    stroke(255);
    rotateY(frameCount * 0.01);
    sphere(350);
    pop();
    
    
    push();
    translate(0, 305, -100);
    rotateX(PI / 2);
    fill(153,77,28);
    plane(width, 700);
    pop();
    
    push();
    translate(0, 305, -100);
    rotateX(PI/2 );
    fill(193,99,23);
    plane(width- 400, 500);
    pop();
    
    //Hoja 1
    push();
    
    translate(0,0,200);
    
    push();
    
    fill(198,77,21);
    
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.02);
   
    beginShape();
    vertex(20,5);
    vertex(20,15);
    vertex(37,17);
    vertex(25,5);
    vertex(15,29);
    vertex(10,10);
    vertex(-10,7);
     vertex(15,-5);
    
    endShape();
    pop();
    
    //hoja 2
    
     push();
    translate(30,100);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
   fill(142,28,10);
    beginShape();
    vertex(20,5);
    vertex(20,15);
    vertex(37,17);
    vertex(25,5);
    vertex(15,29);
    vertex(10,10);
    vertex(-10,7);
     vertex(15,-5);
    
    endShape();
    pop();
    
    
     //hoja 3
    
     push();
    translate(-100,150);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
   fill(234,192,45);
    beginShape();
    vertex(20,5);
    vertex(20,15);
    vertex(37,17);
    vertex(25,5);
    vertex(15,29);
    vertex(10,10);
    vertex(-10,7);
     vertex(15,-5);
    
    endShape();
    pop();
    
       //hoja 4
    
     push();
    translate(-200,-50);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.02);
   fill(190,101,22);
    beginShape();
    vertex(20,5);
    vertex(20,15);
    vertex(37,17);
    vertex(25,5);
    vertex(15,29);
    vertex(10,10);
    vertex(-10,7);
     vertex(15,-5);
    
    endShape();
    pop();
    
    //hoja 5
    
     push();
    translate(-400,-100);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.02);
   fill(193,46,48);
    beginShape();
    vertex(20,5);
    vertex(20,15);
    vertex(37,17);
    vertex(25,5);
    vertex(15,29);
    vertex(10,10);
    vertex(-10,7);
     vertex(15,-5);
    
    endShape();
    pop();
    
    //hoja 2.2
    
     push();
    translate(330,400);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
   fill(142,28,10);
    beginShape();
    vertex(20,5);
    vertex(20,15);
    vertex(37,17);
    vertex(25,5);
    vertex(15,29);
    vertex(10,10);
    vertex(-10,7);
     vertex(15,-5);
    
    endShape();
    pop();
    
     //hoja 3
    
     push();
    translate(-50,50);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * 0.1);
   fill(234,192,45);
    beginShape();
    vertex(20,5);
    vertex(20,15);
    vertex(37,17);
    vertex(25,5);
    vertex(15,29);
    vertex(10,10);
    vertex(-10,7);
     vertex(15,-5);
    
    endShape();
    pop();
    
       //hoja 4
    
     push();
    translate(-30,-90);
    rotateX(frameCount * 0.02);
    rotateY(frameCount * -0.01);
   fill(190,101,22);
    beginShape();
    vertex(20,5);
    vertex(20,15);
    vertex(37,17);
    vertex(25,5);
    vertex(15,29);
    vertex(10,10);
    vertex(-10,7);
     vertex(15,-5);
    
    endShape();
    
    pop();
    
    //hoja 5
    
     push();
    translate(-40,30);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * 0.03);
   fill(193,46,48);
    beginShape();
    vertex(20,5);
    vertex(20,15);
    vertex(37,17);
    vertex(25,5);
    vertex(15,29);
    vertex(10,10);
    vertex(-10,7);
     vertex(15,-5);
    
    endShape();
    pop();
    
    pop();
    
    //Arbol 1
     push();
    translate(-100,150,150);
	rotateY(-frameCount * 0.01);
  stroke(216,80,65);
  rotateZ(PI);
  fill(196,68,50);
  cylinder(10, 50);
  translate(0, 50, 0);
  fill(196, 65, 48);
  cone(50, 100);
  translate(0, 50, 0);
  fill(199, 89, 51);
  cone(50, 100);
  translate(0, 50, 0);
  fill(81,16,11);
  cone(50, 100);
  pop();
    
    // Arbol 2
     push();
    translate(100,150,50);
	rotateY(-frameCount * 0.01);
  stroke(216,80,65);
  rotateZ(PI);
  fill(196,68,50);
  cylinder(10, 50);
  translate(0, 50, 0);
  fill(199, 89, 51);
  cone(50, 100);
  translate(0, 50, 0);
  
    fill(196, 65, 48);
  cone(50, 100);
  translate(0, 50, 0);
  fill(213, 132, 47);
  cone(50, 100);
  pop();
    
     // Arbol 3
     push();
    translate(200,200,150);
	rotateY(-frameCount * -0.01);
  stroke(216,80,65);
  rotateZ(PI);
  fill(81,16,25);
  cylinder(10, 50);
  translate(0, 50, 0);
  fill(81,16,11);
  cone(50, 100);
  translate(0, 50, 0);
  
    fill(196, 65, 48);
  cone(50, 100);
  translate(0, 50, 0);
  fill(213, 132, 47);
  cone(50, 100);
  pop();
    
     push();
    
    translate(0,-140);
    // Nubes
    push();
    
    rotate(PI)
  translate(200,0);
  stroke(226,225,220);
  fill(196,147,99);
  sphere(40);
  translate(-50,5);
  sphere(40);
  translate(-30,-10);
  sphere(40);
  translate(5,40);
  sphere(40);
  translate(50,10);
  sphere(40);
  
	pop();

      push();
    
  translate(200,0);
  stroke(226,225,220);
 fill(196,147,99);
  sphere(40);
  translate(-50,5);
  sphere(40);
  translate(-30,-10);
  sphere(40);
  translate(5,40);
  sphere(40);
  translate(50,10);
  sphere(40);
  
	pop();
    pop();
    
    // hojas en el piso
    
    push();   
    translate(-210,200,150);
    fill(198,77,51);
    stroke(229,110,94);
    rotate(PI/2);
    ellipsoid(5, 10, 10);
    pop();
    
    push();   
    translate(130,200,150);
    fill(198,77,51);
    stroke(198,77,71);
    rotate(PI/2);
    ellipsoid(5, 10, 10);
    pop();
    
    
    push();   
    translate(90,200,50);
    fill(235,194,42);
    stroke(235,194,42);
    rotate(PI/2);
    ellipsoid(5, 10, 10);
    pop();
    
    push();   
    translate(-50,150,200);
    fill(235,194,42);
    stroke(235,194,42);
    rotate(PI/2);
    ellipsoid(5, 10, 10);
    pop();
    
     push();   
    translate(-100,150,200);
    fill(207,114,82);
    stroke(207,114,82);
    rotate(PI/2);
    ellipsoid(5, 10, 10);
    pop();
    
    
    push();   
    translate(70,150,230);
    fill(207,114,82);
    stroke(207,114,82);
    rotate(PI/2);
    ellipsoid(5, 10, 10);
    pop();
    
    push();   
    translate(-10,150,100);
    fill(207,114,82);
    stroke(196,64,50);
    rotate(PI/2);
    ellipsoid(5, 10, 10);
    pop();
    
   push();
    rotate(PI);
    translate(-50,-200,-200);
    fill(193,99,23);
  cone(10, 100);
    pop();
    
     push();
    rotate(PI);
    translate(-100,-250,-100);
    fill(243,217,94);
  cone(10, 100);
    pop();

    push();
    rotate(PI);
    translate(100,-250,-200);
    fill(243,217,94);
  cone(10, 100);
    pop();
    
  }
}