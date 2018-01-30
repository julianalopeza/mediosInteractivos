function setup() { 
  createCanvas(760,750);
	background(214,211,196);
	
	//Inicailmente se hicieron las lineas negras de la figura para despues, a través de la cuadrícula en el cuadern
	//hacer figuras de colores solidos comletos que cumplieran la función de rellenar los espacios.
	//Una vez realizadas estas diguras, se comenzo a jugar con la posición de las firuras por lo que 
	//era necesario acomodar el orden en el cual estaba escríto el código. 
	
	
	fill(255); // Fondo blanco
	strokeWeight(0);
	beginShape();
	vertex(93,450);
	vertex(0,300);
	vertex(0,0);
	vertex(420,0);
	vertex(140,185);
	vertex(238,340);
	endShape();
	
	fill(213,181,169); //Cuadrado rosado 1 cuadricula
	strokeWeight(0);
	beginShape();
	vertex(545,351);
	vertex(618,353);
	vertex(617,429);
	vertex(545,427);
	endShape();
	
	
	fill(175,70,73); //Cuadrado rosado 2 cuadricula
	strokeWeight(0);
	beginShape();
	vertex(621,277);
	vertex(699,277);
	vertex(699,353);
	vertex(621,350);
	endShape();
	
		fill(255);
	strokeWeight(0); // cuadrado blanco 1 cuadricula
	beginShape();
	vertex(544,277);
	vertex(618,277);
	vertex(617,350);
	vertex(545,347);
	endShape();
	
	fill(255); // Cuadrado blanco 2 cuadricula
	strokeWeight(0);
	beginShape();
	vertex(621,353);
	vertex(699,356);
	vertex(698,431);
	vertex(621,430);
	endShape();
	
		strokeWeight(3);
	stroke(0);
	line(540,170,545,540); //Lineas verticales cuadricula
	line(620,170,618,540);
	line(700,170,700,540);
	
	line(425,275,750,275); //lineas horizontales cuadricula
	line(422,345,750,355);
	line(423,425,750,435);
	
	//Figuras de relleno
	
	noStroke(); // Triangulo 1 naranja 
	fill(178,104,37);
	beginShape(); 
	vertex(480,750);
	vertex(140,185);
	vertex(163,170);
	endShape();
	
	beginShape(); // Cuadrado naranja
	vertex(290,-1);
	vertex(119,90);
	vertex(147,136);
	vertex(350,-1);
	endShape();
	
	beginShape(); // Triangulo 2 naranja 
	vertex(400,745);
	vertex(200,398);
	vertex(180,410);
	endShape();
	
	beginShape(); // Triangulo 3 naranja 
	vertex(350,750);
	vertex(150,436);
	vertex(166,421);
	endShape();
	
	
	fill(165,40,25);
	beginShape(); // Cuadrado rojo
	vertex(-1,550);
	vertex(-1,525);
	vertex(97,448);
	vertex(106,468);
	endShape();
	
	fill(209,171,112);
	beginShape(); // Cuadrado Amarillo superior abajo de arco
	vertex(29,-1);
	vertex(90,-1);
	vertex(63,10);
	vertex(42,22);
	endShape();
	
	fill(83,96,105);
	beginShape(); // Cuadrado gris encima circulo azul
	vertex(107,314);
	vertex(85,275);
	vertex(59,290);
	vertex(85,330);
	endShape();
	
	fill(21,24,39);
	beginShape(); // Cuadrado negro 1 cuadricula
	vertex(60,294);
	vertex(14,320);
	vertex(-1,297);
	vertex(-13,275);
	vertex(30,250);
	endShape();
	
	fill(188,198,183);
	beginShape(); // Cuadrado verde 1 cuadricula (Abajo para arriba)
	vertex(92,270);
	vertex(60,230);
	vertex(90,210);
	vertex(119,255);
	endShape();
	
	fill(215,229,211);
	beginShape(); // Cuadrado verde 2 cuadricula
	vertex(30,250);
	vertex(7,215);
	vertex(40,193);
	vertex(60,230);
	endShape();
	
		
	fill(215,229,211);
	beginShape(); // Cuadrado verde 3 cuadricula
	vertex(51,134);
	vertex(18,156);
	vertex(38,193);
	vertex(71,178);
	endShape();
	
		fill(0);
	beginShape(); // Cuadrado negro 2 cuadricula (Abajo para arriba)
	vertex(51,136);
	vertex(18,157);
	vertex(-1,127);
	vertex(-1,105);
	vertex(22,90);
	endShape();
	
	
	
		fill(0);
	beginShape(); // Cuadrado negro 2 cuadricula
	
	vertex(23,90);
	vertex(-1,50);
	vertex(45,20);
	vertex(70,65);
	endShape();
	
	
	fill(184,48,91,250);
	beginShape(); // rectangulo rosado esquina
	vertex(-1,-1);
	vertex(20,0);
	vertex(23,60);
	vertex(0,63);
	endShape();
	
	fill(222,197,89,250);
	beginShape(); // Acuadrado amarillo abajo
	vertex(0,690);
	vertex(50,740);
	vertex(40,770);
	vertex(0,730);
	endShape();
	
	strokeWeight(2);
	stroke(0);
	fill(72,124,55,250);
	beginShape(); // Triangulo verde esquina
	vertex(0,565);
	vertex(18,605);
	vertex(0,603);
	
	endShape();
	
	strokeWeight(3);
	stroke(0);
	line(70,0,480,750); //Lineas diagonales triangulos
	line(30,0,480,750);
	
	line(0,130,400,750);
	line(45,200,350,750);
	line(0,200,350,750);
	
	strokeWeight(3); // Diagonal de colores
	noFill();
	beginShape();
	vertex(590,73);
	vertex(600 ,90);
	vertex(-1,550);
	vertex(-1,525);
	endShape(CLOSE);
	
	strokeWeight(3);
	line(0,300,288,750);
	
	
	fill(0); // Diagonal negra
	strokeWeight(0);
	beginShape();
	vertex(20,475);
	vertex(18,490);
	vertex(619,685);
	vertex(620,670);
	
	endShape();
	
	fill(0); //Cuadrado negro sobre diagonal de clores
	strokeWeight(0);
	beginShape();
	vertex(445,111);
	vertex(475,152);
	vertex(415,200);
	vertex(383,157);
	endShape();
	
	fill(0); //Rectangulo negro sobre diagonal de clores
	strokeWeight(0);
	beginShape();
	vertex(97,449);
	vertex(107,467);
	vertex(600 ,90);
	vertex(590,73);
	
	endShape();
	
	strokeWeight(3); //Linea diagonal detrás circulo azul
	stroke(0);
  line(38,360,160,280);
	
	strokeWeight(0);
	stroke(0);
	fill(49,133,192,230); //Circulo azul
	ellipse(160,365,190,190);
	
	fill(151,183,200,200); //Cuadrados claros de la diagonal 
	beginShape(); 
	vertex(182,410);
	vertex(172,393);
	vertex(189,380);
	vertex(199,397);
	endShape();
	
	strokeWeight(3);
	stroke(0);
	line(0,50,400,750);
	

	//Lineas diagonales parte superior izquierda
	strokeWeight(3);
	stroke(0);
	

	line(15,320,115,255);
	line(-1,270,90,212);
	line(-1,220,70,175);
	line(-1,170,119,90);
	line(119,90,290,-1);
	line(0,105,22,90);
	line(22,90,200,-1);
	line(-1,50,100,-13);
	line(120,150,350,-1);
	line(140,185,389,20);
	
	
	fill(148,163,162);
	beginShape(); //cuadrado gris debajo del circulo
	vertex(391,20);
	vertex(430,83);
	vertex(365,130);
	vertex(320,68);
	endShape();
	
	
	fill(151,183,200,200); //Cuadrados claros de la diagonal
	strokeWeight(0);
	stroke(0);
	beginShape(); 
	vertex(150,434);
	vertex(168,420);
	vertex(158,404);
	vertex(140,418);
	endShape();
	
	

	
	fill(151,183,200,200); //Cuadrados claros de la diagonal 
	beginShape(); 
	vertex(261,350);
	vertex(251,332);
	vertex(237,343);
	vertex(247,360);
	endShape();
	
	
	
	noStroke(); // Circulo naranja superior
	fill(234,73,56,200);
	ellipse(429,21,125,125);
	
	noStroke(); // Circulo rosado superior
	fill(190,158,178,200);
	ellipse(425,20,110,110);
	
	
	strokeWeight(8); // circulo naranja izquierda
	stroke(173,73,42);;
	noFill();
	ellipse(-55,440,150,170);
	
	strokeWeight(4); // circulo negro superior
	stroke(0);;
	noFill();
	ellipse(55,-35,100,100);
	
	
	
} 

function draw() { 
}