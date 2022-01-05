//variáveis da bola
let xBola = 300;
let yBola = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bola
let velocidadeXBola = 5;
let velocidadeYBola = 5;

function mostraBola() {
  fill(255);
  circle(xBola, yBola, diametro);
}

function movimentaBola() {
  xBola += velocidadeXBola;
  yBola += velocidadeYBola;
}

function verificaColisaoBorda() {
  if (xBola + raio > width || xBola - raio < 0) {
    velocidadeXBola *= -1;
  }
  if (yBola + raio > height || yBola - raio < 0) {
    velocidadeYBola *= -1;
  }
}