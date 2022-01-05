//variáveis da baliza time 1
let xBalizaTime1 = 2;
let yBalizaTime1 = 150;
let larguraBaliza = 3;
let alturaBaliza = 100;
let golsTime1 = 0;

//variáveis da baliza time 2
let xBalizaTime2 = 594;
let yBalizaTime2 = 150;
let golsTime2 = 0;

function mostraBaliza(x, y) {
  rect(x, y, larguraBaliza, alturaBaliza)
}

function verificaColisaoBaliza1() {
  if (xBola - raio < 5 && yBola + raio > 150 && yBola - raio < 250) {
    velocidadeXBola *= -1;
    golsTime2++;
    gol.play();
    bolaNoCentro();
  }
}

function verificaColisaoBaliza2() {
  if (xBola + raio > 594 && yBola + raio > 150 && yBola - raio < 250) {
    velocidadeXBola *= -1;
    golsTime1++;
    gol.play();
    bolaNoCentro();
  }
}

function bolaNoCentro() {
  xBola = 300;
  yBola = 200;
}