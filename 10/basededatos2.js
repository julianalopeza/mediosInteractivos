var datos;

var ima;

var posX = 50;
var posY = 50;
var mipais = 0;
var elpais;
var texto = "Para saber la cantidad de KWh que han consumido los países cada año, desde el 1995 hasta el 2015."
var oprimir = "Oprime una letra";
function preload(){
  datos = loadTable('assets/luz.csv', 'csv', 'header');
  ima = loadImage("assets/bombillo.png");
}

function setup() {
createCanvas(1300,700);


print(datos.rows.length);
  print(datos.columns.length);
  print(datos);
  
textSize(49);
 

}


function keyPressed() {
  
 
  if (keyCode === 65) {
   mipais = 1;
  }
  
  else if (keyCode === 66) {
  mipais = 2;
  
  }
  
  else if (keyCode === 67) {
  mipais = 3;
  
  }
  
   else if (keyCode === 68) {
  mipais = 4;
  
  }
  
   else if (keyCode === 69) {
  mipais = 5;
  
  }
  
   else if (keyCode === 70) {
  mipais = 6;
  
  }
  
   else if (keyCode === 71) {
  mipais = 7;
  
  }
  
   else if (keyCode === 72) {
  mipais = 8;
  
  }
  
  else if (keyCode === 73) {
  mipais = 9;
  
  }
  
  else if (keyCode === 74) {
  mipais =10;
  
  }
  
  else if (keyCode === 75) {
  mipais =11;
  
  }
  
  else if (keyCode === 76) {
  mipais =12;
  
  }
  
  else if (keyCode === 77) {
  mipais =13;
  
  }
  
  else if (keyCode === 78) {
  mipais =14;
  
  }
  
   else if (keyCode === 79) {
  mipais =15;
  
  }
  
  else if (keyCode === 80) {
  mipais =16;
  
  }
  
  else if (keyCode === 81) {
  mipais =17;
  
  }
  
   else if (keyCode === 82) {
  mipais =18;
  
  }
  
  else if (keyCode === 83) {
  mipais =19;
  
  }
  
    else if (keyCode === 84) {
  mipais =20;
  
  }
  
   else if (keyCode === 85) {
  mipais =21;
  
  }
  else if (keyCode === 86) {
  mipais =22;
  
  }
  
   else if (keyCode === 87) {
  mipais =23;
  
  }
  
  else if (keyCode === 88) {
  mipais =24;
  
  }
  
   else if (keyCode === 89) {
  mipais =25;
  
  }
  
  else if (keyCode === 90) {
  mipais =26;
  
  }
  print(mipais);
   
}


function draw() {
  background(255);
  textSize(40);
   text(oprimir,500,500);
    
    image(ima, 550,100, 250, 350);
    textSize(14);
    text(texto, 550, 520, 300, 100);
   
   
   textSize(12);
  //Posicion en donde inician los datos
  posx = 50;
  posy = 250;
  
  if (mipais == 1)
  {
    elpais = "Afghanistan";
    fill(255);
    noStroke();
    rect(100,100,900,900);
    
  }
   if (mipais == 2)
  {
    elpais = "Barbados";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
  if (mipais == 3)
  {
    elpais = "Cambodia";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
  if (mipais == 4)
  {
    elpais = "Dominican Republic";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
  if (mipais == 5)
  {
    elpais = "Equatorial Guinea";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
  if (mipais == 6)
  {
    elpais = "Fiji";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
   if (mipais == 7)
  {
    elpais = "Gibraltar";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
   if (mipais == 8)
  {
    elpais = "Haiti";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
  if (mipais == 9)
  {
    elpais = "Iceland";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
  if (mipais == 10)
  {
    elpais = "Jamaica";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
   if (mipais == 11)
  {
    elpais = "Kenya";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
     if (mipais == 12)
  {
    elpais = "Latvia";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
  if (mipais == 13)
  {
    elpais = "Mongolia";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
   if (mipais == 14)
  {
    elpais = "Nicaragua";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
  
  if (mipais == 15)
  {
    elpais = "Oman";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
    if (mipais == 16)
  {
    elpais = "Panama";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
      if (mipais == 17)
  {
    elpais = "Qatar";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
      if (mipais == 18)
  {
    elpais = "Republic of Moldova";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
   if (mipais == 19)
  {
    elpais = "Senegal";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
  if (mipais == 20)
  {
    elpais = "Trinidad and Tobago";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
   if (mipais == 21)
  {
    elpais = "Uruguay";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
  if (mipais == 22)
  {
    elpais = "Viet Nam";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
   if (mipais == 23)
  {
    elpais = "Wallis and Futuna Islands";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
   if (mipais == 25)
  {
    elpais = "Yemen";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
  if (mipais == 26)
  {
    elpais = "Zimbabwe";
        fill(255);
    noStroke();
    rect(100,100,900,900);
  }
  
  
  

 /* if(mouseX < 300)
  {
    elpais = "Afghanistan";
    text(elapais,posx,posy- 180);
  }
/* else if(mouseX > 300 && mouseX =< 600);
  {
    elpais = "Anguilla";
  }
  else if(mouseX > 600 && mouseX =< 900);
  {
    elpais = "Cameroon";
  }*/
 
  
print(elpais);
  
  for (var r = 0; r < datos.getRowCount(); r++)
  {
    var pais = datos.getString(r, "Country or Area");
    
   if(pais == elpais)
   {
      var fechas = datos.getString(r, "Year");
      var unidades = datos.getString(r, "Unit");
      var valor = parseInt(datos.getString(r, "Value"));
      var m = map(valor, 30000, 0, width, 0);
      fill(242,237,85);
      
      textSize(12);
      stroke(1);
      rect(posx,posy+50,30,m);
      fill(0);
      noStroke();
      text(unidades, 50,250);
      text(fechas,posx,posy- 100);
      text(valor,posx,posy+30);
      image(ima, posx-10,posy-80, 40, 55);
      
      
      
      
      textSize(40);
     
       text(elpais,450,89);
       
       stroke(3);
       
       line(30,0,30,2000);
       line(1100,0,1100,2000);
       line(0,260,1000,260);
      
      line(0,160,1000,160);
      posx = posx + 50;

        if (posx > width-50) {
          posx = posx+9;
          posy = posy+50;
        }
   }
    
  }
 
}
